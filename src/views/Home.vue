<template>
    <div class="container px-4 mx-auto mt-5 text-xl text-center">
        <h1 class="my-8 text-7xl">Kanalyzer</h1>
        <p>Do you want to learn / practice Hiragana and Katakana?</p>
        <p>We have the perfect tool for you.</p>
        <button @click="$router.push('Practice')" class="px-6 py-4 mt-5 transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600">Get Started</button>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const $store = useStore();

onMounted(() => {
    $store.commit("resetQuizEntries");
})
</script>