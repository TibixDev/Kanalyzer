<template>
    <header class="bg-indigo-500 mx-auto py-3 text-white text-2xl align-middle flex sm:flex-row space-y-3 sm:space-y-0 flex-col">
        <div class="flex justify-between px-3">
            <h1 class="text-3xl font-semibold mr-3 pr-5 sm:border-r-2 border-gray-50">
                <router-link to="/" class="flex-initial">Kanalyzer</router-link>
            </h1>
            <button @click="changeNav" class="sm:hidden flex-none bg-gray-500 bg-yellow-500 active:bg-yellow-600 rounded-xl p-2">
                <img src="/img/menu.svg" fill="black" alt="Menu Icon" class="fill-current w-6 h-6">
            </button>
        </div>
        <div :class="navShown ? '' : 'hidden'" class="navLinks sm:flex text-center flex flex-auto flex-col sm:flex-row sm:space-x-5 space-y-0 sm:space-y-0">
            <router-link to="/practice" class="hover:text-gray-300 sm:py-0 py-2">Practice</router-link>
            <router-link to="/about" class="hover:text-gray-300 sm:py-0 py-2">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: () => {
        return {
            navShown: false,
        }
    },
    methods: {
        changeNav() {
            this.navShown = !this.navShown;
        }
    }
}
</script>

<style scoped>

</style>