<template>
    <div class="container px-4 mx-auto mt-5 text-lg text-center">
        <h1 class="mb-12 text-5xl text-center">Kanalyzer Quiz</h1>
        <div
            class="grid content-center grid-cols-3 gap-4 mb-10 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
            <KanaField
                v-for="Kana, IdxK of actualKanaList"
                :key="IdxK"
                :Kana="Kana.japanese"
                :Solution="Kana.original"
                :TabID="IdxK"
            >
            </KanaField>
        </div>
        <button
            @click="$router.push('Finalize')"
            :tabindex="actualKanaList.length + 1"
            class="px-6 py-4 my-10 mt-5 transition duration-300 bg-indigo-500 rounded-xl hover:bg-indigo-600">Finish
            Quiz</button>
    </div>
</template>

<script setup>
import KanaField from "../components/KanaField.vue";
import KanaList from "../assets/KanaList.json";
import { useStore } from "vuex";

const $store = useStore();

let actualKanaList = loadKanaList(KanaList, $store.state.mode, $store.state.groups);

/**
 * 
 * @param kanaList Object
 * @param alphabetType string
 * @param chosenGroups string[]
 * @returns {original: string, japanese: string, type: string, groupType: string, alphabetType: string}[]
 */
function loadKanaList(kanaList, alphabetType, chosenGroups) {
    if (Array.isArray(kanaList) || !(kanaList instanceof Object)) {
        console.error("Failed to load kana list: not an object.");
        return;
    }
    const output = [];

    const alphabetTypeObj = kanaList[alphabetType];
    if (!alphabetTypeObj) return [];

    const types = Object.keys(alphabetTypeObj);

    types.forEach(type => {
        const typeObj = alphabetTypeObj[type];
        const groupTypes = Object.keys(typeObj).filter(groupType => chosenGroups.includes(groupType));

        groupTypes.forEach(groupType => {
            const group = typeObj[groupType];
            Object.entries(group).forEach(entry => {
                output.push({ original: entry[0], japanese: entry[1], type, groupType, alphabetType });
            })
        })
    })

    for (let i = output.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [output[i], output[j]] = [output[j], output[i]];
    }

    return output;
}
</script>