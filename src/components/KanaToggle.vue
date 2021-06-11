<template>
    <button
        @click="toggleGroup"
        :class="isGroupToggled ? 'text-white bg-indigo-500': 'ring-4 ring-inset ring-indigo-500 text-indigo-500'"
        class="rounded-lg py-2 px-1">{{ Kana }}
    </button>
</template>

<script>
export default {
    name: "KanaToggle",
    props: {
        Kana: String,
    },
    computed: {
        isGroupToggled() {
            return this.$store.getters.isGroupToggled(this.Kana);
        }
    },
    methods: {
        toggleGroup() {
            console.log("Commiting " + this.Kana );
            this.$store.commit('toggleGroup', this.Kana);
            console.log(`Toggled group: ${this.Kana} (${this.isGroupToggled})`);
        }
    }
}
</script>

<style scoped>

</style>