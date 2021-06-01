<template>
    <div class="container text-xl mt-5 mx-auto px-4">
        <h1 class="text-4xl text-center mb-12">Please choose what you'd like to practice</h1>
        <div class="grid grid-cols-2 text-center gap-4 text-indigo-500 mb-5">
            <button 
                :class="mode === 'hiragana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="rounded-lg py-2"
                @click="toggleMode('hiragana')"
            >Hiragana</button>
            <button 
                :class="mode === 'katakana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="rounded-lg py-2"
                @click="toggleMode('katakana')"
            >Katakana</button>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-6 mb-12">
            <div class="text-center">
                <p class="mb-2 text-2xl">Main Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">a</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ka</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">sa</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ta</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">na</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ha</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ma</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ra</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">wa</button>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Dakuten Kana</p>
                <div class="grid grid-cols-1 gap-4">
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ga</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">za</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">da</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ba</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">pa</button>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Combination Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">kya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">sha</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">cha</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">nya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">hya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">mya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">rya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">gya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">ja</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">dya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">bya</button>
                    <button class="rounded-lg py-2 px-1 bg-indigo-500">pya</button>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button class="bg-indigo-500 text-3xl mt-5 px-6 py-4 rounded-lg hover:bg-indigo-600 transition duration-300">Practice</button>
        </div>
    </div>
</template>

<script>
import KanaToggle from "../components/KanaToggle.vue"

export default {
    name: "Practice",
    data: () => {
        return {
            mode: "hiragana"
        }
    },
    methods: {
        toggleMode: function (modeStr) {
            this.mode = modeStr;
        }
    },
    components: {
        KanaToggle
    }
}
</script>

<style scoped>

</style>