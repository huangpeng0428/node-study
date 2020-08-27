<!--
 * @Date: 2020-08-27 16:27:46
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-08-27 18:23:09
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// @ is an alias to /src
// eslint-disable-next-line import/no-unresolved
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
}
</script>
