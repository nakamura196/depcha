<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>

    <v-container class="mt-5">
      <h2>{{ title }}</h2>
      <p class="mt-2">
        {{
          `The "thres" query parameter reduces the number of relations
        displayed.` +
          ' ' +
          (topFlag ? `Top ${max} relations are displayed.` : '')
        }}
      </p>
    </v-container>

    <v-sheet class="grey lighten-3 pt-2 mb-2"
      ><v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <v-select
              v-model="from"
              dense
              :items="froms"
              attach
              chips
              label="From"
              multiple
              @keydown.enter="filter(false)"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              v-model="to"
              dense
              :items="tos"
              attach
              chips
              label="To"
              multiple
              @keydown.enter="filter(false)"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3"
            ><v-select
              v-model="commodity"
              dense
              :items="commodities"
              attach
              chips
              label="Commodity"
              multiple
              @keydown.enter="filter(false)"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="1">
            <v-text-field
              v-model="thres"
              class="mt-3 pt-0"
              type="number"
              label="Threshold"
              @keydown.enter="filter(false)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn color="primary" class="ma-1" @click="filter(false)">{{
              $t('search')
            }}</v-btn>
            <v-btn class="ma-1" @click="filter(true)">{{ $t('clear') }}</v-btn>
          </v-col>
        </v-row>
      </v-container></v-sheet
    >

    <v-container>
      <v-row dense>
        <v-col cols="12" :sm="3">
          <!-- Main -->
          <v-card v-if="false" flat outlined class="mb-5">
            <v-img
              v-if="nodesMap[u] && nodesMap[u].image && false"
              :src="nodesMap[u].image"
              contain
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
            ></v-img>

            <div class="pa-4" :style="'max-height: 200px; overflow-y: auto;'">
              <nuxt-link
                :to="
                  localePath({
                    name: 'entity-slug-id',
                    params: { slug: nodesMap[u].entity, id: nodesMap[u].label },
                  })
                "
              >
                <h4>{{ nodesMap[u].label }}</h4>
              </nuxt-link>

              <template v-if="nodesMap[u] && nodesMap[u].description">
                <div class="mt-2">
                  {{ nodesMap[u].description }}
                </div>
              </template>
            </div>

            <template>
              <v-divider />

              <v-card-actions>
                <v-btn color="primary" @click="focus(u)">{{
                  $t('フォーカス')
                }}</v-btn>
                <v-spacer></v-spacer>
                <ResultOption
                  :item="{
                    label: targetNode.label,
                    url: targetNode.url,
                  }"
                />
              </v-card-actions>
            </template>
          </v-card>

          <!-- Other -->

          <v-card v-if="otherId" flat outlined class="mb-5">
            <v-img
              v-if="false"
              :src="
                otherNode && otherNode.image
                  ? otherNode.image
                  : 'https://raw.githubusercontent.com/hi-ut/static_images/main/no_image.svg'
              "
              contain
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
            ></v-img>

            <div class="pa-4" :style="'max-height: 200px; overflow-y: auto;'">
              <a
                target="_blank"
                :href="`${snorql}?describe=${encodeURIComponent(otherNode.id)}`"
              >
                <h4>{{ otherNode.label }}</h4>
              </a>

              <template v-if="otherNode && otherNode.description">
                <div class="mt-2">
                  {{ otherNode.description }}
                </div>
              </template>
            </div>

            <template>
              <v-divider />

              <v-card-actions>
                <v-btn color="primary" @click="focus(otherId)">{{
                  $t('フォーカス')
                }}</v-btn>
                <v-spacer></v-spacer>
                <ResultOption
                  :item="{
                    label: otherNode.label,
                    url: otherNode.url,
                  }"
                />
              </v-card-actions>
            </template>
          </v-card>

          <div v-if="fromArray.length > 0" class="mb-5">
            <v-sheet class="grey lighten-3 pa-2"
              ><h3>
                <v-icon>mdi-view-list</v-icon>
                <small>{{ 'From' }}</small>
              </h3></v-sheet
            >

            <div style="max-height: 200px; overflow-y: auto" class="mb-5">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th width="30%">{{ 'From' }}</th>
                      <th width="30%">{{ 'To' }}</th>
                      <th width="40%">{{ 'Commodity (Freq)' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in fromArray" :key="key">
                      <td width="30%">{{ nodesMap[item.from].label }}</td>
                      <td width="30%">{{ nodesMap[item.to].label }}</td>
                      <td width="40%" :style="`color: ${colors[item.slug]}`">
                        {{ item.title }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </div>

          <div v-if="toArray.length > 0">
            <v-sheet class="grey lighten-3 pa-2"
              ><h3>
                <v-icon>mdi-view-list</v-icon>
                <small>{{ 'To' }}</small>
              </h3></v-sheet
            >

            <div style="max-height: 200px; overflow-y: auto">
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th width="30%">{{ 'From' }}</th>
                      <th width="30%">{{ 'To' }}</th>
                      <th width="40%">{{ 'Commodity (Freq)' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in toArray" :key="key">
                      <td width="30%">{{ nodesMap[item.from].label }}</td>
                      <td width="30%">{{ nodesMap[item.to].label }}</td>
                      <td width="40%" :style="`color: ${colors[item.slug]}`">
                        {{ item.title }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </div>
        </v-col>
        <v-col cols="12" :sm="9">
          <v-row>
            <v-col cols="12" :sm="9">
              <network
                id="mynetwork"
                ref="network"
                :nodes="nodes"
                :edges="edges"
                :options="options"
                style="height: 650px; background-color: #f0f4c3"
                @stabilized="stabilized"
                @click="onNodeSelected"
              >
              </network>
            </v-col>
            <v-col cols="12" :sm="3">
              <!-- Main -->
              <v-sheet class="grey lighten-3 pa-2"
                ><h3>
                  <v-icon>mdi-information</v-icon>
                  <small>{{ 'Legend' }}</small>
                </h3></v-sheet
              >
              <div
                dense
                style="max-height: 200px; overflow-y: auto"
                class="mb-5 pa-2"
              >
                <v-chip
                  v-for="(item, key) in colors"
                  :key="key"
                  label
                  class="ma-1"
                  color="white--text"
                  :style="`background-color: ${item}`"
                  >{{ key }}</v-chip
                >
              </div>

              <v-sheet class="grey lighten-3 pa-2"
                ><h3>
                  <v-icon>mdi-view-list</v-icon>
                  <small>{{ $t('entity') }}</small>
                </h3></v-sheet
              >
              <v-list dense style="max-height: 400px; overflow-y: auto">
                <v-list-item
                  v-for="(item, key) in nodes"
                  :key="key"
                  @click="select(item.id)"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.image"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.label"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="py-5">
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
import ResultOption from '~/components/display/ResultOption.vue'
const { Network } = require('vue-vis-network')

@Component({
  components: {
    ResultOption,
    network: Network,
  },
})
export default class PageCategory extends Vue {
  @Watch('$route', { deep: true })
  watchTmp(): void {
    this.search()
  }

  snorql: any = process.env.snorql

  loading: boolean = false

  otherId: string = ''

  max: Number = 100
  topFlag: boolean = false

  /// /////////////

  nodes: any = []
  edges: any = []

  nodesMap: any = {}
  edgeMap: any = {}

  fromArray: any = []
  toArray: any = []

  colors: any = {}

  options: any = {
    nodes: {
      color: {
        background: 'lightgray',
        highlight: {
          background: 'lightgray',
          border: '#FF6E00',
        },
      },
      borderWidthSelected: 8,
      borderWidth: 4,
      shapeProperties: {
        useBorderWithImage: true,
      },
    },
    edges: {
      color: 'lightgray',
    },
    physics: {
      enabled: true,
    },
    layout: { randomSeed: 2 },
  }

  /// ///

  tos: any = []
  froms: any = []
  commodities: any = []

  from: string[] = []
  to: string[] = []
  commodity: string[] = []

  thres: number = 0

  /// /////////////

  get otherNode() {
    return this.nodesMap[this.otherId]
  }

  get g() {
    return this.$route.query.g
  }

  get title() {
    return this.$t('network') + ': ' + this.$utils.getLabelFromG(this.g)
  }

  head() {
    return {
      title: this.title,
    }
  }

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('visualization'),
        disabled: false,
        to: this.localePath({ name: 'vis' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  /// /////////////

  // state
  mounted() {
    this.pre()
    this.search()
  }

  async pre() {
    const g = this.$route.query.g || 'http://example.org/depcha.ward_ledger.1'

    this.thres = this.$route.query.thres ? Number(this.$route.query.thres) : 0

    const query =
      `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX gams: <https://gams.uni-graz.at/o:gams-ontology#>
    PREFIX gn: <http://www.geonames.org/ontology#>
    PREFIX functx: <http://www.functx.com>
    PREFIX bk: <https://gams.uni-graz.at/o:depcha.bookkeeping#>
    PREFIX t: <http://www.tei-c.org/ns/1.0>
            
    SELECT DISTINCT ?from ?from_name ?to ?to_name ?commodity
    FROM <` +
      g +
      `>
    WHERE {
      ?transaction rdf:type bk:Transaction;
                            bk:consistsOf ?transfer.
      
      ?transfer bk:from ?from;
                          bk:to ?to;
                          bk:transfers ?measure.
      optional { ?from bk:name ?from_name . }
      optional { ?to bk:name ?to_name . }
      
      OPTIONAL{ ?measure bk:commodity ?commodity }.
    }
    ORDER BY ?transfer
    `

    const url =
      'https://dydra.com/naoki_cocaze/depcha-analysis/sparql?output=json&query=' +
      encodeURIComponent(query)

    const res = await axios.get(url)
    const results = res.data

    const map: any = {}
    const froms: any = {}
    const tos: any = {}
    const commodities: any = {}
    map.froms = froms
    map.tos = tos
    map.commodities = commodities

    for (let i = 0; i < results.length; i++) {
      const obj = results[i]
      froms[obj.from] =
        obj.from_name.replace('\n', ' ').replace(/\s+/g, ' ') || obj.from
      tos[obj.to] =
        obj.to_name.replace('\n', ' ').replace(/\s+/g, ' ') || obj.to
      if (obj.commodity) {
        commodities[obj.commodity] = obj.commodity
      }
    }

    for (const key in map) {
      const array = []
      const obj = map[key]
      const keys = Object.keys(obj)
      keys.sort()
      for (const value of keys) {
        array.push({
          text: obj[value],
          value,
        })
      }

      ;(this as any)[key] = array
    }

    /*
    const froms2 = []
    for (const key in froms) {
      froms2.push({
        text: froms[key],
        value: key,
      })
    }

    this.froms = froms2
    this.tos = tos
    this.commodities = commodities
    */
  }

  async search() {
    this.loading = true
    // this.getTo()

    const g = this.$route.query.g || 'http://example.org/depcha.ward_ledger.1'

    const fields = ['from', 'to', 'commodity']
    for (let j = 0; j < fields.length; j++) {
      const field = fields[j]

      let query = this.$route.query[field]
      if (typeof query === 'string') {
        query = [query]
      }

      ;(this as any)[field] = query || []
    }

    // const bind = `BIND(<` + to2 + `> as ?to)`
    const bind = ''

    const filters = []
    const filterCommodities = []

    for (let j = 0; j < fields.length; j++) {
      const field = fields[j]
      const array = (this as any)[field]
      if (array) {
        const tmp = []
        for (let i = 0; i < array.length; i++) {
          if (field === 'commodity') {
            tmp.push(`?${field} = '${array[i]}'`)
          } else {
            tmp.push(`?${field} = <${array[i]}>`)
          }
        }

        if (tmp.length === 0) {
          continue
        }
        const filter = `filter (${tmp.join('||')})`

        if (field === 'commodity') {
          filterCommodities.push(filter)
        } else {
          filters.push(filter)
        }
      }
    }

    let filterCommoditiesStr = ''
    if (filterCommodities.length > 0) {
      filterCommoditiesStr =
        '?measure bk:commodity ?commodity . ' + filterCommodities.join('\n')
    }

    const query =
      `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX gams: <https://gams.uni-graz.at/o:gams-ontology#>
    PREFIX gn: <http://www.geonames.org/ontology#>
    PREFIX functx: <http://www.functx.com>
    PREFIX bk: <https://gams.uni-graz.at/o:depcha.bookkeeping#>
    PREFIX t: <http://www.tei-c.org/ns/1.0>
            
    SELECT DISTINCT ?from ?from_name ?to ?to_name ?commodity ?transaction
    FROM <` +
      g +
      `>
    WHERE {
      ` +
      bind +
      `
      
      ?transaction rdf:type bk:Transaction;
                            bk:consistsOf ?transfer.
      
      ?transfer bk:from ?from;
                          bk:to ?to;
                          bk:transfers ?measure.
      ` +
      filters.join('\n') +
      `
      optional { ?from bk:name ?from_name . }
      optional { ?to bk:name ?to_name . }
      
      OPTIONAL{ ?measure bk:commodity ?commodity . } .
      ` +
      filterCommoditiesStr +
      `
    }
    ORDER BY ?transfer
    `

    const url =
      'https://dydra.com/naoki_cocaze/depcha-analysis/sparql?output=json&query=' +
      encodeURIComponent(query)

    const res = await axios.get(url)
    const results = res.data

    const nodes = []
    const edges = []
    const nodesMap: any = {}
    const edgeMap: any = {}

    let edgeCount = 0

    for (let i = 0; i < results.length; i++) {
      const obj = results[i]

      const from = obj.from
      const to = obj.to

      /// //

      if (!nodesMap[from]) {
        let fromName =
          obj.from_name || obj.from.split('/')[obj.from.split('/').length - 1]
        fromName = fromName.replace('\n', ' ').replace(/\s+/g, ' ') // .split('  ').join(' ')

        nodesMap[from] = {
          label: fromName,
          id: from,
          shape: 'image',
          image:
            'https://raw.githubusercontent.com/hi-ut/static_images/main/account.png',
          borderWidth: 4,
          color: {
            border: 'lightgreen',
          },
        }
      }

      /// /

      if (!nodesMap[to]) {
        let toName =
          obj.to_name || obj.to.split('/')[obj.to.split('/').length - 1]
        toName = toName.replace('\n', ' ').replace(/\s+/g, ' ') // .replace(/ {2}/g, ' ') // .split('  ').join(' ')

        nodesMap[to] = {
          label: toName,
          id: to,
          shape: 'image',
          image:
            'https://raw.githubusercontent.com/hi-ut/static_images/main/account.png',
          borderWidth: 4,
          color: {
            border: 'lightgreen',
          },
        }
      }

      if (!edgeMap[from]) {
        edgeMap[from] = {}
      }

      if (!edgeMap[from][to]) {
        edgeMap[from][to] = {}
      }

      const commodity = obj.commodity || 'Money'
      if (!edgeMap[from][to][commodity]) {
        edgeMap[from][to][commodity] = 0

        edgeCount += 1
      }

      edgeMap[from][to][commodity] += 1

      /// /
    }

    if (edgeCount > this.max) {
      this.topFlag = true
    }

    /// ///

    const nodesMap2: any = {}
    const edgeMap2: any = {}

    const edgeFreq: any = {}

    let index = 0

    const thres = this.thres

    for (const from in edgeMap) {
      for (const to in edgeMap[from]) {
        for (const commodity in edgeMap[from][to]) {
          const count = edgeMap[from][to][commodity]

          if (count < thres) {
            continue
          }

          edgeMap2[index] = {
            from,
            to,
            value: count,
            slug: commodity,
            title: `${commodity} (${count})`,
            // label: `${commodity} (${count})`,
            id: index,
            arrows: {
              to: {
                enabled: true,
              },
            },
            color: this.getColor(commodity),
          }

          edgeFreq[index] = count

          index += 1
        }
      }
    }

    // ソート
    const arr = Object.keys(edgeFreq).map((e) => ({
      key: e,
      value: edgeFreq[e],
    }))

    arr.sort(function (a, b) {
      if (a.value < b.value) return 1
      if (a.value > b.value) return -1
      return 0
    })

    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i]

      const edge = edgeMap2[obj.key]

      const from = edge.from
      const to = edge.to

      if (!nodesMap2[from]) {
        nodesMap2[from] = nodesMap[from]
      }

      if (!nodesMap2[to]) {
        nodesMap2[to] = nodesMap[to]
      }

      edges.push(edge)

      if (i > this.max) {
        break
      }
    }

    // ノード登録
    for (const uri in nodesMap2) {
      const node = nodesMap2[uri]
      nodes.push(node)
    }

    this.edges = edges

    this.nodesMap = nodesMap2

    // 繋がりを一覧する際に使える？
    this.edgeMap = edgeMap
    // console.log(edgeMap2)

    this.loading = false

    this.nodes = nodes
  }

  getColor(value: string) {
    const colors = this.colors
    if (!colors[value]) {
      colors[value] = stringToColour(value) // intToRGB(hashCode(value)) // getRandomColor()

      // ソート
      const colors2: any = {}
      const keys = Object.keys(colors)
      keys.sort()
      for (const key of keys) {
        colors2[key] = colors[key]
      }
      this.colors = colors2
    }

    return colors[value]
  }

  onNodeSelected(value: any) {
    const nodes = value.nodes

    const nodeMap = this.nodesMap

    if (nodes.length > 0) {
      const node = nodeMap[nodes[0]]

      const uri = node.id

      this.select(uri)

      return uri
    }

    return ''
  }

  focus(uri: string) {
    const network: any = this.$refs.network
    network.focus(uri)
  }

  select(uri: string, searchFlag: boolean = false) {
    const nodeMap = this.nodesMap

    if (nodeMap[uri]) {
      /*
      if (this.u !== uri) {
       this.otherId = uri 
      }
      */
      this.otherId = uri

      const network: any = this.$refs.network
      network.selectNodes([uri])

      if (searchFlag) {
        // network.focus(uri)
        // this.search(uri)
      } else {
      }

      this.getList(uri)
    } else {
      console.log({ uri })
    }
  }

  getList(uri: string) {
    const edges = this.edges
    const toArray = []
    const fromArray = []
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i]

      if (edge.from === uri) {
        toArray.push(edge)
      }

      if (edge.to === uri) {
        fromArray.push(edge)
      }
    }

    this.toArray = toArray
    this.fromArray = fromArray
  }

  stabilized() {
    this.options.physics.enabled = false
  }

  filter(clearFlag: boolean = false) {
    const query: any = {
      g: this.g,
    }
    if (this.thres > 0) {
      query.thres = this.thres
    }
    if (!clearFlag) {
      query.from = this.from
      query.to = this.to
      query.commodity = this.commodity
    }
    location.href =
      process.env.BASE_URL +
      this.localePath({
        name: 'network',
        query,
      })
  }
}

const stringToColour = function (str: any) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += ('00' + value.toString(16)).substr(-2)
  }
  return colour
}
</script>
