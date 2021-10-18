<template>
  <m-header></m-header>
  <tab></tab>
  <router-view/>
</template>
<script>
import Header from '@/components/header'
import Tab from '@/components/tab/tab'
export default {
  components:{
    MHeader:Header,
    Tab:Tab
  }
}
</script>
<style lang="scss">

</style>
