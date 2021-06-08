<template>
    <div class="container text-xl mt-5 mx-auto px-4">
        <h1 class="text-4xl text-center mb-12">Please choose what you'd like to practice</h1>
        <div class="grid grid-cols-2 text-center gap-4 text-indigo-500 mb-5">
            <button 
                :class="mode === 'hiragana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="rounded-lg py-2"
                @click="changeMode('hiragana')"
            >Hiragana</button>
            <button 
                :class="mode === 'katakana' ? 'text-white bg-indigo-500' : 'ring-4 ring-inset ring-indigo-500'"
                class="rounded-lg py-2"
                @click="changeMode('katakana')"
            >Katakana</button>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-6 mb-12">
            <div class="text-center">
                <p class="mb-2 text-2xl">Main Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <KanaToggle v-for="(idx, kana) in $options.KanaList[mode]['main']" :key="idx" :Kana="kana" Type="main"></KanaToggle>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Dakuten Kana</p>
                <div class="grid grid-cols-1 gap-4">
                    <KanaToggle v-for="(idx, kana) in $options.KanaList[mode]['dakuten']" :key="idx" :Kana="kana" Type="dakuten"></KanaToggle>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2 text-2xl">Combination Kana</p>
                <div class="grid grid-cols-2 gap-4">
                    <KanaToggle v-for="(idx, kana) in $options.KanaList[mode]['combination']" :key="idx" :Kana="kana" Type="combination"></KanaToggle>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button
                @click="$router.push('Quiz')"
                class="text-3xl mt-5 px-8 py-5 rounded-lg transition duration-300"
                :class="hasGroups ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-500 hover:bg-red-800'"
                :disabled="!hasGroups">Practice
            </button>
        </div>
    </div>
</template>

<script>
import KanaToggle from "@components/KanaToggle.vue";
import KanaList from "@assets/KanaList.json";
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: "Practice",
    data: () => {
        return {
            mode: "hiragana"
        }
    },
    methods: {
        ...mapMutations({
            changeMode: 'changeMode'
        }),
        changeMode: function (modeStr) {
            this.changeMode(modeStr);
            console.log("Changed mode to " + this.mode)
        },
    },
    computed: {
        hasGroups() {
            console.log("Updated hasGroups -> " + this.$store.getters.hasGroups)
            return this.$store.getters.hasGroups;
        },
        mode() {
            return this.$store.state.mode;
        }
    },
    components: {
        KanaToggle
    },
    KanaList: KanaList
}
</script>

<style scoped>

</style>