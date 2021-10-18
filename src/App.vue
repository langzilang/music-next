<template>
  <m-header></m-header>
  <router-view/>
</template>
<script>
import Header from '@/components/header'
export default {
  components:{
    MHeader:Header
  }
}
</script>
<style lang="scss">

</style>
