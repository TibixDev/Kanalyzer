<template>
    <div
        class="flex flex-col justify-center text-lg text-center mt-5 px-4 rounded-xl KanaField"
        :class="BackgroundColor"
    >
        <h1 class="text-5xl py-3">{{ Kana }}</h1>
        <!-- <h1 class="text-xl py-1">({{ Solution }})</h1> -->
        <div class="py-2 text-center">
            <input
                type="text" name="Kana"
                class="w-16 my-1 rounded-md text-center text-xl lowercase transition duration-300"
                :class="TextColor"
                autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                v-model="UserInput"
                @blur="CheckSolution()"
                @click="UserInput = ''"
                :disabled="SolutionStatus === true"
                v-on:keyup.enter="CheckSolution()"
            >
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: "KanaField",
    props: {
        Kana: String,
        Solution: String
    },
    data: function () {
        return {
            UserInput: "",
            SolutionStatus: "unsolved"
        }
    },
    methods: {
        ...mapMutations(['addQuizEntry', 'increaseQuizEntryFaults', 'changeQuizEntryStatus']),
        CheckSolution() {
            if (this.UserInput.length > 0) {
                let isCorrect = this.UserInput.toLowerCase() === this.Solution;
                this.SolutionStatus = isCorrect;
                this.changeQuizEntryStatus({ Kana: this.Kana, Status: isCorrect });
                if (!isCorrect) {
                    this.increaseQuizEntryFaults(this.Kana);
                }
            }
        }
    },
    computed: {
        BackgroundColor() {
            if (this.SolutionStatus === "unsolved") return 'bg-indigo-500'
            else if (this.SolutionStatus === true) return 'bg-green-500'
            else if (this.SolutionStatus === false) return 'bg-red-500'
        },
        TextColor() {
            if (this.SolutionStatus === "unsolved") return 'text-indigo-500'
            else if (this.SolutionStatus === true) return 'text-gray-50'
            else if (this.SolutionStatus === false) return 'text-red-500'
        },
    },
    created: function() {
        this.addQuizEntry({ Kana: this.Kana, Solution: this.Solution })
    }
}
</script>

<style scoped>
.KanaField {
    max-width: 6em;
}
</style>