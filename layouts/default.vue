<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" app :temporary="true">
        <v-list>
          <v-list-item link :to="localePath({ name: 'index' })" exact>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="localePath({ name: 'vis' })" exact>
            <v-list-item-action>
              <v-icon>mdi-chart-bar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('visualization') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--
          <v-list-item link :to="localePath({ name: 'search' })">
            <v-list-item-action>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('search') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="localePath({ name: 'entity' })">
            <v-list-item-action>
              <v-icon>mdi-tag</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('entity') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="localePath({ name: 'map' })">
            <v-list-item-action>
              <v-icon>mdi-map</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('map') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          -->

          <v-list-item
            link
            href="https://naoki-kokaze.github.io/depcha_analysis/snorql/"
            target="_blank"
          >
            <v-list-item-action>
              <v-icon>mdi-database</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                >SPARQL Endpoint
                <v-icon>mdi-open-in-new</v-icon></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>
          <nuxt-link
            :to="
              localePath({
                name: 'index',
              })
            "
            style="color: inherit; text-decoration: inherit"
          >
            {{ title }}
          </nuxt-link>
        </v-toolbar-title>

        <template v-if="$vuetify.breakpoint.name != 'xs' && false">
          <v-spacer></v-spacer>

          <FullTextSearch />
        </template>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn v-on="on">
              <v-icon>mdi-translate</v-icon>
              <span v-if="$vuetify.breakpoint.name != 'xs'" class="ml-2">
                {{ $i18n.locale == 'ja' ? '日本語' : 'English' }}
                <v-icon class="ml-2">mdi-menu-down</v-icon>
              </span>
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('ja')">
              <v-list-item-title>日本語</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-if="false">
          <template v-if="isSignedIn">
            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-avatar size="36">
                    <img :src="userPic" :alt="userName" />
                  </v-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item @click="dialog = !dialog">
                  <v-list-item-title>プロフィール編集</v-list-item-title>
                </v-list-item>
                <v-list-item @click="signOut">
                  <v-list-item-title>ログアウト</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-else>
            <v-btn color="error" @click="dialog4login = !dialog4login"
              >ログイン</v-btn
            >
          </template>
        </template>
      </v-app-bar>
    </div>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer :dark="true" class="mt-5">
      <v-container>
        <p class="text-center my-5">Naoki KOKAZE &amp; Satoru NAKAMURA</p>
      </v-container>
    </v-footer>

    <v-dialog v-model="dialog4login" width="500">
      <v-card>
        <v-card-title class="primary white--text" primary-title
          >ログイン</v-card-title
        >

        <v-card-text class="mt-5">
          ログインにはGoogle<!--またはTwitter-->アカウントが必要です。
          <div class="text-center mb-5">
            <v-btn class="error mt-5" @click="signInWithGoogle">
              <v-icon class="mr-2">mdi mdi-google</v-icon
              >Googleアカウントでログイン
            </v-btn>
            <!--
            <v-btn class="info mt-5" @click="signInWithTwitter">
              <v-icon class="mr-2">mdi mdi-twitter</v-icon
              >Twitterアカウントでログイン
            </v-btn>
            -->
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      large
      color="error"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import firebase from '../plugins/firebase'
import FullTextSearch from '~/components/search/FullTextSearch.vue'

@Component({
  components: {
    FullTextSearch,
  },
})
export default class search extends Vue {
  fab: boolean = false

  drawer: boolean = false
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t(process.env.siteName as any)

  dialog4login: boolean = false

  get userName(): any {
    return this.$store.getters.getUserName
  }

  set userName(value: any) {
    this.$store.commit('setUserName', value)
  }

  get userPic(): any {
    return this.$store.getters.getUserPic
  }

  set userPic(value: any) {
    this.$store.commit('setUserPic', value)
  }

  get userUid(): any {
    return this.$store.getters.getUserUid
  }

  set userUid(value: any) {
    this.$store.commit('setUserUid', value)
  }

  get isSignedIn(): boolean {
    return this.$store.getters.getIsSignedIn
  }

  set isSignedIn(value: boolean) {
    this.$store.commit('setSignedIn', value)
  }

  created() {
    this.onAuthStateChanged()
  }

  onScroll(e: any): void {
    if (typeof window === 'undefined') return
    const top = window.pageYOffset || e.target.scrollTop || 0
    this.fab = top > 20
  }

  toTop(): void {
    // @ts-ignore
    this.$vuetify.goTo(0)
  }

  signInWithGoogle() {
    this.$store.dispatch('login')
    /*
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(error => alert(error.message))
      .then(() => (this.dialog4login = !this.dialog4login));
    */
    this.dialog4login = !this.dialog4login
  }

  onAuthStateChanged() {
    firebase.auth().onAuthStateChanged((user) => {
      this.userUid = user ? user.uid : null
      this.userName = user ? user.displayName : null
      this.userPic = user ? user.photoURL : null
      this.isSignedIn = !!user
    })
  }

  async signOut() {
    await firebase.auth().signOut()
  }
}
</script>

<style>
* {
  text-transform: none !important;
}

a {
  text-decoration: none !important;
}
</style>
