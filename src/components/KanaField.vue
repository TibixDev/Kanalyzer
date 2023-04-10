<template>
    <div class="flex flex-col justify-center px-4 mt-5 text-lg text-center rounded-xl KanaField" :class="backgroundColor">
        <h1 class="py-3 text-5xl KanaChar">{{ props.Kana }}</h1>
        <!-- <h1 class="py-1 text-xl">({{ Solution }})</h1> -->
        <div class="py-2 text-center group">
            <input type="text" name="Kana"
                :tabindex="props.TabID + 1"
                class="w-16 my-1 text-xl text-center lowercase transition duration-300 rounded-md" :class="textColor"
                autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" v-model="userInput"
                @blur="checkSolution()" @click="userInput = ''" :disabled="solutionStatus === true"
                v-on:keyup.enter="checkSolution()"
                >
        </div>
    </div>
</template>

<script setup>
import { mapMutations } from 'vuex';
import { computed, defineProps, onMounted } from 'vue';
import { useStore } from 'vuex';

const $store = useStore();

let userInput = $ref('');
let solutionStatus = $ref('unsolved');

const addQuizEntry = (...args) => $store.commit('addQuizEntry', ...args);
const increaseQuizEntryFaults = (...args) => $store.commit('increaseQuizEntryFaults', ...args)
const changeQuizEntryStatus = (...args) => $store.commit('changeQuizEntryStatus', ...args)

let props = defineProps({
    'Kana': String,
    'Solution': String,
    'TabID': Number
});

function checkSolution() {
    let kanaInput = document.querySelector(`[tabindex="${props.TabID + 2}"]`);
    if (userInput.length > 0) {
        let isCorrect = userInput.toLowerCase() === props.Solution;
        solutionStatus = isCorrect;
        changeQuizEntryStatus({ Kana: props.Kana, Status: isCorrect });
        
        if (!isCorrect) {
            increaseQuizEntryFaults(props.Kana);
        } else {
            kanaInput && kanaInput.focus();
        }
    }
}

onMounted(() => {
    addQuizEntry({ Kana: props.Kana, Solution: props.Solution })
})

let backgroundColor = computed(() => {
    if (solutionStatus === "unsolved") return 'bg-indigo-500'
    else if (solutionStatus === true) return 'bg-green-500'
    else if (solutionStatus === false) return 'bg-red-500'
})

let textColor = computed(() => {
    if (solutionStatus === "unsolved") return 'text-indigo-500'
    else if (solutionStatus === true) return 'text-gray-50'
    else if (solutionStatus === false) return 'text-red-500'
})
</script>

<style scoped>
.KanaField {
    max-width: 6em;
}

.KanaChar {
    font-family: 'Noto Sans JP', sans-serif;
}
</style>