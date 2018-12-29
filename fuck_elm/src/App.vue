<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/mheader/mheader'
export default {
  name: 'App',
  components:{
    MHeader
  }
}
</script>
<style>

@import "assets/reset.css"


</style>
<style>
  body,html{
  font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif,Droid Sans Fallback
}
</style>

