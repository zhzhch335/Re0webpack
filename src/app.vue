<template>
  <div id="appFromVue">
    <!-- <img src="./assets/thinktwice.png" alt=""> -->
    <ul>
      <li class="ico-l1"></li>
      <li class="ico-l2"></li>
      <li class="ico-l3"></li>
      <li class="ico-l4">a</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import api from "../mock/api";

export default {
  async created() {
    let res = await axios.get(api.getUserInfo);
    console.log(res);
  }
};

// export default {
//   name:"Appexp"
// }
</script>

<style lang="scss">
@import "~sprite.scss";

$yellow: brown;

h2 {
  color: $yellow;
  background-image: cross-fade(red, yellow, blue);
}

.ico-l1 {
  @include sprite($i-linkapp-27);
}

.ico-l2 {
  @include sprite($i-linkapp-28);
}

.ico-l3 {
  @include sprite($i-linkapp-29);
}

.ico-l4 {
  @include sprite($i-linkapp-30);
}

</style>