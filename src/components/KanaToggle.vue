<template>
    <button
        @click="toggleGroup"
        :class="isGroupToggled ? 'text-white bg-indigo-500': 'ring-4 ring-inset ring-indigo-500'"
        class="rounded-lg py-2 px-1">Group {{ kana }}
    </button>
</template>

<script>
export default {
    name: "KanaToggle",
    props: {
        kana: String
    },
    computed: {
        isGroupToggled() {
            this.$store.getters.isGroupToggled(this.kana);
        }
    },
    methods: {
        toggleGroup() {
            this.$store.commit('toggleGroup', this.kana);
        }
    }
}
</script>

<style scoped>

</style>