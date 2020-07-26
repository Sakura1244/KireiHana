<template>
  <v-app dark>
    <v-app-bar
      v-model="isLoaded"
      fixed
      app
      :height="40"
      flat
      color="primary"
    >
      <v-container grid-list-xs>
        <v-layout row wrap justify-center align-center>
          <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
          <!-- <v-avatar class="mr-2 logo">
            <v-img :src="logo" />
          </v-avatar> -->

          <!-- <v-toolbar-title v-text="title" /> -->
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-main v-if="isLoaded">
      <nuxt />
    </v-main>

    <div class="background-cover">
      <!-- <v-img class="particle-1" width="200" :src="logo" />
      <v-img class="particle-2" width="200" :src="logo" /> -->
      <div class="particle-3" />
      <div class="particle-4" />
    </div>

    <v-app-bar
      v-model="isLoaded"
      fixed
      app
      :height="40"
      flat
      bottom
      color="primary"
    />

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
  mounted () {
    setTimeout(() => {
      this.isLoaded = true
    }, 2000)
  }
}
</script>
