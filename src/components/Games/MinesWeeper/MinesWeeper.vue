<template>
    <div class="ceils-container">
        <div v-for="ceil in ceils" :key="ceil.id" class="ceil" @click="onCeilOpen(ceil)">
            <img :src="diamond" v-if="ceil.value == 'diamond'">
            <img :src="bomb" v-if="ceil.value == 'bomb'">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ceils-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        
        

        .ceil {
            display: grid;
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            flex-direction: row;
            background-color: darkgray;
            border: 3px darkslategray solid;
            padding: 1%;
            border-radius: 10%;
            place-items: center;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 80%;
                y: 50%;
            }
        }
    }
</style>

<script setup lang="ts">

    import bomb from './assets/bomb.png';
    import diamond from './assets/diamond.png'

    import {ref } from 'vue'



    type Ceil = {
        id: number
        value: "bomb" | "diamond" | "undefined"
    }

    const ceils = ref<Ceil[]>([]);

    for (let i = 0; i < 20; i++){
        ceils.value?.push({id: i, value: "undefined"});
    }

    function onCeilOpen(ceil: Ceil) {
        
        if (ceil.value == 'undefined'){
            const randWeight = Math.random();

            if (randWeight > 0.8) {
                ceil.value = 'bomb';
            }
            else {
                ceil.value = 'diamond';
            }
        }
    }

</script>