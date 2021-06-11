<template>
    <div class="container text-lg mt-5 mx-auto px-4 text-center">
        <h1 class="text-5xl text-center mb-12">Kanalyzer Quiz</h1>
        <div class="content-center grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            <template v-for="KanaType, IdxT of $store.state.groups" :key="IdxT">
                <template v-for="KanaGroup, IdxG of KanaType" :key="IdxG">
                    <KanaField v-for="Kana, IdxK of $options.KanaList[$store.state.mode][IdxT][KanaGroup]" :key="IdxK" :Kana="Kana" :Solution="IdxK"></KanaField>
                </template>
            </template>
        </div>
        <button @click="$router.push('Finalize')" class="bg-indigo-500 mt-5 px-6 py-4 rounded-xl hover:bg-indigo-600 transition duration-300">Finish Quiz</button>
    </div>
</template>

<script>
import KanaField from "@components/KanaField.vue";
import KanaList from "@assets/KanaList.json";

export default {
    KanaList: KanaList,
    name: "Quiz",
    components: {
        KanaField
    }
}
</script>

<style scoped>

</style>