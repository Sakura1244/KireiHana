<template>
  <v-app dark>
    <!-- <v-app-bar
      v-model="appBar"
      fixed
      app
      :height="40"
      flat
      hide-on-scroll
      color="primary"
    /> -->

    <v-main v-if="isLoaded">
      <nuxt />
    </v-main>

    <div class="background-cover">
      <!-- <v-img class="particle-1" width="200" :src="logo" />
      <v-img class="particle-2" width="200" :src="logo" /> -->
      <div class="particle-3" />
      <div class="particle-4" />
    </div>

    <!-- <v-app-bar
      v-model="appBar"
      fixed
      app
      :height="40"
      flat
      bottom
      hide-on-scroll
      color="primary"
    /> -->

    <v-overlay :value="!isLoaded" color="primarylight" opacity="1">
      <v-avatar class="logo_loading" size="100">
        <v-img :src="logo" />
      </v-avatar>
    </v-overlay>
  </v-app>
</template>

<script>
import Logo from '@/static/logo/logo.png'

export default {
  data () {
    return {
      isLoaded: false,
      appBar: false,
      logo: Logo,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'KireiHana'
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoaded = true
      this.appBar = true
    }, 2000)
  }
}
</script>
