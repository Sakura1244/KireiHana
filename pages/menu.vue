<template>
  <v-container grid-list-xs>
    <v-layout row justify-center align-center wrap>
      <v-flex xs12 sm12 md1>
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
              to="/"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-layout>
        </v-slide-y-transition>
      </v-flex>
      <v-flex xs12 sm12 md11>
        <v-layout row wrap>
          <v-flex
            v-for="(product, index) in menu"
            :key="index"
            xs12
            sm12
            md6
            class="pa-2"
          >
            <v-slide-y-reverse-transition>
              <v-card v-show="loaded" :to="`/${product.link}`" class="pa-2 pa-md-6" outlined>
                <v-card-title class="title-container justify-center justify-md-start" primary-title>
                  <div>
                    <h2 class="text-h5 text-lg-h4 text-truncate">
                      「 {{ product.text }} <span>Team 」</span>
                    </h2>
                  </div>
                </v-card-title>
                <v-card-text class="text-center text-md-left">
                  <div class="text-container px-2 px-md-6">
                    <p>
                      Known as 綺麗花/Kireihana/ is an AMV Team from Indonesia.
                      as in Indonesia Means "Bunga yang indah"
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-y-reverse-transition>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        text: 'About',
        link: 'about'
      },
      {
        text: 'Products',
        link: 'products'
      }
    ],
    loaded: false
  }),
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 250)
  }
}
</script>
