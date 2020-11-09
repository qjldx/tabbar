<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
        height: 49px;
        text-align: center;
        position: absolute;
    }
</style>