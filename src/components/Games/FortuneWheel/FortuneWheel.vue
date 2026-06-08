<template>
    <div class="roller">
        <div class="blur left"></div>
        <div class="blur right"></div>
        <div class="prizes-list" ref="prizesContainer">
            <div class="prize-item" v-for="prize in prizes" :key="prize.id">{{ prize.id }}</div>
        </div>
    </div>
    <button style="z-index: 3;" @click="spin">Click!</button>
</template>


<style lang="scss" scoped>
    .roller {
        height: 180px;
        width: 95%;
        align-self: center;
        background-color: whitesmoke;
        
        .blur{
            backdrop-filter: blur(10px);
            display: inline-flex;
            width: 30%;
            height: 100%;
            position: fixed;
            z-index: 2;
        }
        .blur.left {
            left: 0;
            background:linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent);
        }

        .blur.right {
            right: 0;
            background:linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent);
        }
        
        .prizes-list {
            overflow-x: auto;
            white-space: nowrap;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            align-self: center;
            width: 95%;

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
        }
    }
    
</style>

<script setup lang="ts">

    import { ref } from 'vue'


    
    const prizesContainer = ref<HTMLElement>();
    const prizes = ref<{id: number}[]>([]);

    for (let i = 0; i < 40; i++) {
        prizes.value.push({id: i});
    }
    
    
    function spin() {
        const index = Math.floor((Math.random() * prizesContainer.value?.childElementCount!));

        prizesContainer.value?.children[index].scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
        })
        
    }
</script>