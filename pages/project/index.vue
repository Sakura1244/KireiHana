<template>
  <div />
</template>

<script>
export default {
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    redirect('/menu')
  },
  head: {
    title: 'KireiHana - Project'
  }
}
</script>
