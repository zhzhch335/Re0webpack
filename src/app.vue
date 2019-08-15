<template>
  <div id="appFromVue">
    <router-view/>
    <h2>Hello template reload !</h2>
    <img src="./assets/thinktwice.png" alt="">
  </div>
</template>

<script>
import axios from "axios";
import api from "../mock/api";

export default {
  async created(){
    let res = await axios.get(api.getUserInfo);
    console.log(res);
  }
}

// export default {
//   name:"Appexp"
// }
</script>

<style lang="scss">
  $yellow : brown;
  h2{
    color: $yellow;
    background-image: cross-fade( red, yellow, blue);
  }
</style>