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
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
      <v-flex xs12>
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('getProducts')
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 250)
  }
}
</script>
