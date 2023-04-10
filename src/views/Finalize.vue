<template>
    <div class="container px-4 mx-auto mt-5 text-xl text-center">
        <h1 class="my-8 text-7xl">Quiz Complete! 🎉</h1>
        <div style="background-color: #1a2f47" class="inline-flex flex-col px-5 py-3 my-3 rounded-xl">
            <h2 class="pb-2 mb-2 text-3xl font-bold border-b-2">~ Stats ~</h2>
            <p>Mode: <strong class="capitalize">{{ $store.state.mode }}</strong></p>
            <p>Average tries per kana: <strong>{{ averageTriesPerKana }}</strong></p>
            <p>You've passed <strong>{{ $store.state.quizentries.filter(x => x.Status === true).length }}</strong> out of <strong>{{ $store.state.quizentries.length }}</strong></p>
        </div>
        <br>
        <button @click="$router.push('Practice')" class="px-6 py-4 my-10 mt-5 transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600">Retry</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onUnmounted } from 'vue';
const $store = useStore()

const averageTriesPerKana = $store.getters.averageTriesPerKana;

onUnmounted(() => {
    $store.commit("resetQuizEntries");
})
</script>