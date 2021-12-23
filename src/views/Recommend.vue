<template>
  <div class="home-body">
    推介页面
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script>
// import {  } from "@/api/createContrast.js";
// import someComponent from './someComponent'
import { getRecommend } from '@/service/recommend'
// 推介页
export default {
  name: 'Recommend',
  data () {
    return {}
  },
  components: {
    // someComponent
  },
  computed: {},

  watch: {},
  async created () {
    const result = await getRecommend()
    console.log(result);
  },

  mounted () {

  },
  methods: {}
}

</script>

<style lang="scss" scoped>

</style>
