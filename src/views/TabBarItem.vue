<template>
    <div class="tab-bar-item">
        <slot >首页</slot>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem"
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
    }
</style>