<template>
  <div id="appFromVue">
    <router-view/>
    <h2>Hello template reload !</h2>
    <img src="./assets/thinktwice.png" alt="">
  </div>
</template>

<script>
export default {
  name:"Appexp"
}
</script>

<style lang="scss">
  $yellow : brown;
  h2{
    color: $yellow;
    background-image: cross-fade( red, yellow, blue);
  }
</style>