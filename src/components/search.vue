<template>
  <div class="busqueda md:w-1/3">
    <div class="flex items-center border-teal-500 py-2">
      <input
        v-model="query"
        class="appearance-none bg-recto-dark border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
        type="text"
        placeholder="NOMBRE PACIENTE"
      />
      <button
        @click="searchForFiles"
        class="flex-shrink-0 bg-recto-light hover:bg-red-500 text-white py-2 px-4 border border-recto-light hover:border-red-500"
        type="button"
      >
        BUSCAR HISTORIAL
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data: () => {
    return {
      query: undefined
    };
  },
  methods: {
    searchForFiles: async function() {
      let query = this.query;
      await this.$router.push({ name: "Files", params: { query } });
    }
  }
};
</script>
