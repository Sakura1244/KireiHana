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
          <v-layout v-show="loaded" row wrap justify-center>
            <template v-for="(item, index) in team">
              <v-flex
                :key="index"
                xs12
                :sm6="item.username !== '#linebreak' && item.username !== '#divider'"
                :lg4="item.username !== '#linebreak' && item.username !== '#divider'"
                class="pa-1 pa-md-2 pa-lg-4"
              >
                <br v-if="item.username === '#linebreak'">
                <v-divider v-else-if="item.username === '#divider'" />
                <v-card v-else outlined class="pa-2 pa-md-4">
                  <v-layout class="px-md-4" column wrap justify-center align-center>
                    <v-avatar
                      :size="avatarSize"
                      color="primarylight"
                      class="ma-auto"
                    >
                      <v-img v-if="item.picture !== 0" :src="item.picture" :lazy-src="item.picture">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="primary" />
                          </v-row>
                        </template>
                      </v-img>
                      <v-img v-else height="75%" contain :src="logo" :lazy-src="logo">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="primary" />
                          </v-row>
                        </template>
                      </v-img>
                    </v-avatar>
                    <v-flex xs12 class="text-center my-2 my-md-3">
                      <v-card-title class="info-container pa-0 justify-center" primary-title>
                        <div>
                          <h2 v-if="item.username" class="text-body-1 text-md-h6 text-truncate">
                            {{ item.username }}
                          </h2>
                          <h2 v-else class="text-body-1 text-md-h6 text-truncate">
                            -
                          </h2>
                        </div>
                      </v-card-title>
                      <v-flex xs12 class="pa-0">
                        <p v-if="item.status !== 0" class="text-body-2 text-capitalize text-truncate">
                          {{ item.status }}
                        </p>
                        <p v-else class="text-body-2 text-capitalize text-truncate">
                          -
                        </p>
                      </v-flex>
                      <v-card-text class="text-center mt-0 mt-lg-3 pa-0">
                        <div class="text-container px-2 px-md-6">
                          <p v-if="item.bio !== 0" class="text-body-2 ma-0 text-truncate">
                            {{ item.bio }}
                          </p>
                          <p v-else class="text-body-2 ma-0 text-truncate">
                            -
                          </p>
                        </div>
                      </v-card-text>
                    </v-flex>
                    <v-divider class="mb-2 mb-md-3" style="width: 90%" />
                    <v-flex xs12>
                      <v-btn
                        class="white--text mx-1"
                        :disabled="item.instagram === 0"
                        small
                        depressed
                        fab
                        color="primarydark"
                        :href="item.instagram !== 0 ? generateLink(item.instagram) : ''"
                        target="_blank"
                        link
                      >
                        <v-icon small>
                          mdi-instagram
                        </v-icon>
                      </v-btn>
                      <v-btn
                        class="white--text mx-1"
                        :disabled="item.youtube === 0"
                        small
                        depressed
                        fab
                        color="primarydark"
                        :href="item.youtube !== 0 ? generateLink(item.youtube) : ''"
                        target="_blank"
                        link
                      >
                        <v-icon small>
                          mdi-youtube
                        </v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </template>
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import logo from '@/static/logo/logo.png'

export default {
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('getTeam')
    const team = store.getters.team
    return { team }
  },
  data: () => ({
    logo,
    loaded: false
  }),
  computed: {
    avatarSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '70'
        case 'sm': return '70'
        case 'md': return '100'
        case 'lg': return '100'
        case 'xl': return '100'
        default: return '100'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 250)
  },
  methods: {
    generateLink (url) {
      // eslint-disable-next-line no-useless-escape
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = 'https://' + url
      }
      return url
    }
  },
  head: {
    title: 'KireiHana - Member'
  }
}
</script>
