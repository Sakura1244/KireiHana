<template>
  <v-container grid-list-xs>
    <v-layout row justify-center align-center wrap>
      <v-flex xs12 class="my-4">
        <v-slide-y-transition>
          <v-layout
            v-show="loaded"
            column
            justify-center
            align-center
            wrap
            class="ma-2"
          >
            <v-btn
              small
              depressed
              fab
              color="primary"
              nuxt
              to="/menu"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-flex xs12 class="w-full mt-4">
              <v-card class="pa-2 pa-md-4" color="transparent" flat>
                <v-card-title class="title-container justify-center" primary-title>
                  <div>
                    <h2 class="text-h5 text-lg-h4 text-truncate">
                      「 Dedication <span>Project 」</span>
                    </h2>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-divider />
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
      <v-flex xs12 class="md:mt-6">
        <v-slide-y-transition>
          <v-layout v-show="loaded" row wrap>
            <v-flex v-for="(product, index) in products" :key="index" xs12 md6 class="pa-2">
              <v-card :min-height="300" class="pa-2 pa-md-4" outlined>
                <youtube
                  player-width="100%"
                  :player-height="300"
                  :video-id="product.snippet.resourceId.videoId"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
      <v-flex xs12 class="my-8">
        <v-slide-y-transition>
          <v-layout v-show="loaded" row justify-center wrap>
            <v-btn :href="detailLink" target="_blank" depressed color="primary" class="ma-2 white--text text-capitalize">
              <v-icon left dark>
                mdi-youtube
              </v-icon>
              See More
            </v-btn>
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('getDedication')
  },
  data: () => ({
    loaded: false,
    detailLink: 'https://www.youtube.com/channel/UCuEH2lN3erODkq49-d7zXUA/playlists'
  }),
  computed: {
    products () {
      return this.$store.getters.dedication
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 250)
  },
  head: {
    title: 'KireiHana - Dedication Project'
  }
}
</script>
