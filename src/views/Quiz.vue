<template>
    <div class="container text-lg mt-5 mx-auto px-4 text-center">
        <h1 class="text-5xl text-center mb-12">Kanalyzer Quiz</h1>
        <div class="content-center mb-10 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            <KanaField v-for="Kana, IdxK of KanaList" :key="IdxK" :Kana="Kana.japanese" :Solution="Kana.original"></KanaField>
        </div>
        <button @click="$router.push('Finalize')" class="bg-indigo-500 mt-5 px-6 py-4 my-10 rounded-xl hover:bg-indigo-600 transition duration-300">Finish Quiz</button>
    </div>
</template>

<script>
import KanaField from "@components/KanaField.vue";
import KanaList from "@assets/KanaList.json";

/**
 * 
 * @param kanaList Object
 * @param alphabetType string
 * @param chosenGroups string[]
 * @returns {original: string, japanese: string, type: string, groupType: string, alphabetType: string}[]
 */
const loadKanaList = function(kanaList, alphabetType, chosenGroups) {
  if(Array.isArray(kanaList) || !(kanaList instanceof Object)) {
    console.error("Failed to load kana list: not an object.");
    return;
  }
  const output = [];

  const alphabetTypeObj = kanaList[alphabetType];
  if(!alphabetTypeObj) return [];

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

export default {
    name: "Quiz",
    components: {
        KanaField
    },
    data: () => ({
        KanaList: KanaList
    }),
    created() {
        this.KanaList = loadKanaList(this.KanaList, this.$store.state.mode, this.$store.state.groups);
    }
}
</script>

<style scoped>

</style>