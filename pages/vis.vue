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

    <v-container class="my-5">
      <v-row>
        <v-col v-for="(obj, index) in items" :key="index" cols="12" :sm="3">
          <v-card outlined flat no-body class="mb-4">
            <v-img
              src="https://raw.githubusercontent.com/hi-ut/static_images/main/account.png"
              contain
              style="height: 150px"
              width="100%"
              class="grey lighten-2"
            ></v-img>

            <div class="pa-4">
              <h4>{{ obj.label }}</h4>
            </div>

            <v-divider />

            <v-card-actions>
              <template>
                <v-btn
                  color="primary"
                  :to="
                    localePath({
                      name: 'network',
                      query: {
                        g: obj.g,
                      },
                    })
                  "
                  ><v-icon class="mr-2">mdi-graph</v-icon>
                  {{ $t('network') }}</v-btn
                >
                <v-btn
                  target="_blank"
                  color="primary"
                  :href="`https://kokaze.vercel.app/ssr2?g=${obj.g}`"
                  ><v-icon class="mr-2">mdi-chart-bar</v-icon>
                  {{ $t('chart') }}</v-btn
                >
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({
  components: {},
})
export default class PageCategory extends Vue {
  @Watch('$route', { deep: true })
  watchTmp(): void {
    this.search()
  }

  items: any = []

  /// /////////////

  // state
  mounted() {
    this.search()
  }

  async search() {
    const query2 = `
    PREFIX bk: <https://gams.uni-graz.at/o:depcha.bookkeeping#>
            
    SELECT DISTINCT ?g
    
    WHERE {
      graph ?g { ?transfer bk:to ?to. }
    }
    ORDER BY ?transfer
    `

    const url2 =
      process.env.endpoint + '?output=json&query=' + encodeURIComponent(query2)

    const res = await axios.get(url2)
    const results = res.data

    const items = []
    for (let i = 0; i < results.length; i++) {
      const obj = results[i]
      items.push({
        label: this.$utils.getLabelFromG(obj.g),
        g: obj.g,
      })
    }

    this.items = items
  }

  get title() {
    return this.$t('visualization') // this.$t(this.settings[this.$route.params.slug].label)
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
        text: this.title,
      },
    ]
  }
}
</script>
