<template>
    <button
        @click="toggleGroup"
        :class="isGroupToggled ? 'text-white bg-indigo-500': 'ring-4 ring-inset ring-indigo-500 text-indigo-500'"
        class="rounded-lg py-2 px-1">{{ Kana }}
    </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
const $store = useStore();
const props = defineProps(["Kana"]);

const isGroupToggled = computed(() => $store.getters.isGroupToggled(props.Kana));

function toggleGroup() {
    console.log("Commiting " + props.Kana );
    $store.commit('toggleGroup', props.Kana);
    console.log(`Toggled group: ${props.Kana} (${props.isGroupToggled})`);
}
</script>