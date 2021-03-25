<template>
  <div>
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import headerBar from './components/header-bar.vue'
export default {
  components: { headerBar },

}
</script>

<style>

</style>