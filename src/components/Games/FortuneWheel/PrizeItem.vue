<template>
    <div class="prize-item">
        <div>{{ props.prize.title }}</div>
    </div>
</template>

<style lang="scss" scoped>
    .prize-item {
        display: inline-flex;
        margin-left: 10px;
        margin-top: 3%;
        margin-bottom: 3%;
        height: 100px;
        width: 100px;
        background-color:aquamarine;
        border: red solid 1px;
        flex-shrink: 0;
        z-index: 1;
        scroll-snap-align: center;
    }
</style>

<script setup lang="ts">
    import type { Prize } from './types';

    const props = defineProps<{prize: Prize}>();
</script>