<template>
  <v-container grid-list-xs class="my-4">
    <v-layout row justify-center align-center wrap>
      <v-flex xs5 sm4 md4>
        <kinesis-container>
          <kinesis-element
            :strength="strengthKinesis"
            type="depth"
            transform-origin="50% 50%"
          >
            <v-slide-y-transition>
              <v-img
                v-show="loaded"
                class="logo"
                width="100%"
                contain
                :src="logo"
                :lazy-src="logo"
                aspect-ratio="1"
                @click="toggleTheme"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="primarylight" />
                  </v-row>
                </template>
              </v-img>
            </v-slide-y-transition>
          </kinesis-element>
        </kinesis-container>
      </v-flex>
      <v-flex xs12 sm12 md7>
        <v-slide-y-reverse-transition>
          <v-card v-show="loaded" class="pa-2 pa-md-6" outlined>
            <v-card-title class="title-container justify-center justify-md-start" primary-title>
              <div>
                <h2 class="text-h5 text-lg-h4 text-truncate">
                  「 KireiHana <span>Team 」</span>
                </h2>
              </div>
            </v-card-title>
            <v-card-text class="text-center text-md-left">
              <div class="text-container px-2 px-md-6">
                <p>
                  Known as 綺麗花/Kireihana/ is an AMV Team from Indonesia.
                  <br>
                  as in Indonesia Means "Bunga yang indah"
                </p>
                <p>this team was created because the leader himself really like <b>“Hanami Season”</b> or <b>“Cherry Blossom Viewing”</b>, The pops of pink mark the ending of winter and signify the beginning of spring. Due to their quick blooming season, cherry blossoms also symbolize the transience of life</p>
              </div>
              <div class="mt-8 mx-4">
                <template v-for="(social, index) in links">
                  <v-btn
                    v-if="social.sidelink === 'FALSE' && social.visible === 'TRUE'"
                    :key="index"
                    depressed
                    :disabled="social.disabled === 'TRUE'"
                    color="primary"
                    class="text ma-1 text-capitalize"
                    target="_blank"
                    :href="social.link"
                  >
                    <v-icon
                      v-if="social.icon"
                      left
                      dark
                    >
                      {{ social.icon }}
                    </v-icon>
                    {{ social.text }}
                  </v-btn>
                </template>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-y-reverse-transition>
      </v-flex>
      <v-flex xs12 sm12 md1 class="mt-2">
        <v-slide-y-transition>
          <v-layout
            v-show="loaded"
            class="flex-row flex-md-column"
            justify-center
            align-center
            wrap
          >
            <v-btn
              class="ma-2 white--text order-last order-md-first"
              small
              depressed
              fab
              color="primary"
              nuxt
              to="/menu"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <template v-for="(social, index) in links">
              <v-btn
                v-if="social.sidelink === 'TRUE' && social.visible === 'TRUE'"
                :key="index"
                class="ma-2 white--text"
                small
                depressed
                :disabled="social.disabled === 'TRUE'"
                fab
                color="primarydark"
                :href="social.link"
                target="_blank"
                link
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </template>
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  KinesisContainer,
  KinesisElement
} from 'vue-kinesis'
import LogoText from '@/static/logo/logo.png'
import LogoTextWhite from '@/static/logo/logo_white.png'

export default {
  components: {
    KinesisContainer,
    KinesisElement
  },
  data: () => ({
    loaded: false,
    descriptions: [
      'Known as 綺麗花/Kireihana/ is an AMV Team from Indonesia.',
      'as in Indonesia Means "Bunga yang indah"'
    ],
    descriptions2: [
      'this team was created because the leader himself really like “Hanami Season” or “Cherry Blossom Viewing”,  The pops of pink mark the ending of winter and signify the beginning of spring. Due to their quick blooming season, cherry blossoms also symbolize the transience of life'
    ],
    socials: [
      {
        text: 'Youtube',
        icon: 'mdi-youtube',
        link: 'https://www.youtube.com/channel/UCuEH2lN3erODkq49-d7zXUA'
      },
      {
        text: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/kireihanateam/'
      },
      {
        text: 'Discord',
        icon: 'mdi-discord',
        link: 'https://discord.gg/MkFsukEkhN'
      }
    ]
  }),
  computed: {
    links () {
      return this.$store.getters.links || []
    },
    logo () {
      switch (this.$vuetify.theme.dark) {
        case false: return LogoText
        default: return LogoTextWhite
      }
    },
    widthLogo () {
      switch (this.$vuetify.breakpoint.smAndDown) {
        case true: return '100%'
        case false: return '100%'
        default: return '100%'
      }
    },
    strengthKinesis () {
      switch (this.$vuetify.breakpoint.smAndDown) {
        case true: return 0
        default: return 20
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 250)
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('kireihana_dark', this.$vuetify.theme.dark)
      // this.$vuetify.theme.themes.light.primary = '#F98298'
      // this.$vuetify.theme.themes.dark.primary = '#F98298'
    }
  }
}
</script>
