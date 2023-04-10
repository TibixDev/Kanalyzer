<template>
    <header class="flex flex-col py-3 mx-auto space-y-3 text-2xl text-white align-middle bg-indigo-500 sm:flex-row sm:space-y-0">
        <div class="flex justify-between px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 mr-2 fill-white" viewBox="0 0 24 24"><path d="M4 4v2h14v.09l-3.71 3.7l1.42 1.42L20 6.91V4m-9 5v4c0 2.78-.75 3.89-2.64 5.46L9.64 20c2.11-1.76 3.36-3.78 3.36-7V9Z"/></svg>
            <h1 class="pr-5 mr-3 text-3xl font-semibold sm:border-r-2 border-gray-50">
                <router-link to="/" class="flex-initial select-none">Kanalyzer</router-link>
            </h1>
            <button @click="changeNav" class="flex-none p-2 bg-yellow-500 sm:hidden active:bg-yellow-600 rounded-xl">
                <img src="/img/menu.svg" fill="black" alt="Menu Icon" class="w-6 h-6 fill-current">
            </button>
        </div>
        <div
            :class="!navShown ? 'hidden' : ''"
            class="flex flex-col items-center flex-auto space-y-0 text-center navLinks sm:flex sm:flex-row sm:space-x-5 sm:space-y-0"
        >   
            <router-link to="/practice" :class="currentPath == '/practice' ? 'border-b-white' : 'border-b-transparent'" class="transition-all border-b-2 hover:text-gray-300 sm:py-0">Practice</router-link>
            <router-link to="/about" :class="currentPath == '/about' ? 'border-b-white' : 'border-b-transparent'" class="transition-all border-b-2 hover:text-gray-300 sm:py-0">About</router-link>
        </div>
    </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const $route = useRoute()
let navShown = $ref('false')

let currentPath = computed(() => {
    return $route.path
})

function changeNav() {
    navShown = !navShown
}

</script>

<style scoped>

</style>