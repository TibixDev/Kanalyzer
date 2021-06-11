<template>
    <div class="container text-xl mt-5 text-center mx-auto px-4">
        <h1 class="text-7xl my-8">Quiz Complete! 🎉</h1>
        <div style="background-color: #1a2f47" class="inline-flex flex-col px-5 py-3 my-3 rounded-xl">
            <h2 class="text-3xl mb-2 font-bold border-b-2 pb-2">~ Stats ~</h2>
            <p>Mode: <strong class="capitalize">{{ $store.state.mode }}</strong></p>
            <p>Average tries per kana: <strong>{{ averageTriesPerKana }}</strong></p>
            <p>You've passed <strong>{{ $store.state.quizentries.filter(x => x.Status === true).length }}</strong> out of <strong>{{ $store.state.quizentries.length }}</strong></p>
        </div>
        <br>
        <button @click="$router.push('Practice')" class="bg-indigo-500 mt-5 px-6 py-4 my-10 rounded-lg hover:bg-indigo-600 transition duration-300">Retry</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Finalize",
    computed: {
        ...mapGetters(['averageTriesPerKana']),
    }
}
</script>

<style scoped>

</style>