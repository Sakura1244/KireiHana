<template>
  <v-app dark>
    <v-app-bar
      v-model="isLoaded"
      fixed
      app
      :height="55"
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
      :height="55"
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

<style lang="scss">
.background-cover {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.06;
  z-index: 0;

  .particle-1 {
    position: absolute;
    top: 50px;
    right: 0px;
    transform: rotate(60deg);
  }
  .particle-2 {
    position: absolute;
    bottom: 60px;
    left: 0;
    transform: rotate(45deg);
  }

  .particle-3 {
    position: absolute;
    top: -100px;
    left: -230px;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 100px solid var(--v-primary-base);
  }
  .particle-4 {
    position: absolute;
    bottom: -100px;
    right: -230px;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 100px solid var(--v-primary-base);
  }
}
</style>

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
