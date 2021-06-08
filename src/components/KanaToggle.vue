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
        Type: String
    },
    computed: {
        isGroupToggled() {
            return this.$store.getters.isGroupToggled({Group: this.Kana, Kind: this.Type});
        }
    },
    methods: {
        toggleGroup() {
            console.log("Commiting " + this.Kana + " - " + this.Type);
            this.$store.commit('toggleGroup', {Group: this.Kana, Kind: this.Type});
            console.log(`Toggled group: ${this.Kana} (${this.isGroupToggled})`);
        }
    }
}
</script>

<style scoped>

</style>