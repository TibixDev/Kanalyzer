<template>
    <div class="container px-4 mx-auto mt-5 text-xl">
        <h1 class="mb-12 text-4xl text-center">Please choose what you'd like to practice</h1>
        <div class="grid grid-cols-2 gap-4 mb-5 text-center text-indigo-500">
            <button 
                :class="mode === 'hiragana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="py-2 rounded-lg"
                @click="changeMode('hiragana')"
            >Hiragana</button>
            <button 
                :class="mode === 'katakana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="py-2 rounded-lg"
                @click="changeMode('katakana')"
            >Katakana</button>
        </div>
        <div class="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3">
            <div class="text-center">
                <p class="mb-2 text-2xl">Main Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <KanaToggle v-for="(idx, kana) in KanaList[mode]['main']" :key="idx" :Kana="kana" Type="main"></KanaToggle>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Dakuten Kana</p>
                <div class="grid grid-cols-1 gap-4">
                    <KanaToggle v-for="(idx, kana) in KanaList[mode]['dakuten']" :key="idx" :Kana="kana" Type="dakuten"></KanaToggle>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Combination Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <KanaToggle v-for="(idx, kana) in KanaList[mode]['combination']" :key="idx" :Kana="kana" Type="combination"></KanaToggle>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button
                @click="$router.push('Quiz')"
                class="px-8 py-5 my-10 mt-5 text-3xl transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600 disabled:bg-gray-500 disabled:hover:bg-gray-600 disabled:cursor-not-allowed"
                :disabled="!hasGroups">Practice
            </button>
        </div>
    </div>
</template>

<script setup>
import KanaToggle from "../components/KanaToggle.vue";
import KanaList from "../assets/KanaList.json";
import { computed, onMounted } from "vue";
import { mapMutations, useStore } from 'vuex';
const $store = useStore();

//let mode = $ref('hiragana')

const { changeMode } = mapMutations(['changeMode'])

let hasGroups = computed(() => {
    console.log("Updated hasGroups -> " + $store.getters.hasGroups)
    return $store.getters.hasGroups;
})

let mode = computed(() => {
    return $store.state.mode
});

let created = computed(() => {
    $store.commit('resetStore');
})

onMounted(() => {
    $store.commit('resetGroups')
})
</script>

<style scoped>

</style>