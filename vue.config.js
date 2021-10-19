module.exports = {
  lintOnSave: true,
  devServer:{
    open:true,
  },
  css:{
    loaderOptions:{
      sass: {
        //全局引入变量和mixin
        additionalData:`
        @import "@/assets/scss/variable.scss"
        @import "@/assets/scss/mixin.scss";
        `
      },
      // @import "@/assets/scss/base.scss";
      // @import "@/assets/scss/reset.scss";
      // @import "@/assets/scss/icon.scss";
    }
  }
}
