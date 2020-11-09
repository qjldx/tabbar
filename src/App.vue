<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
      </tab-bar-item>
      <tab-bar-item>
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
 <router-view></router-view>
  </div>
</template>

<script>
  import TabBar from "./views/TabBar";
  import TabBarItem from "./views/TabBarItem";
  export default {
    components: {TabBarItem, TabBar}
  }
</script>
<style>


</style>
