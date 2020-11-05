<template>
  <div class="busqueda md:w-1/3">
    <div class="flex items-center border-teal-500 py-2">
      <input
        v-model="query"
        class="appearance-none bg-recto-dark border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
        type="text"
        placeholder="NOMBRE O ID"
      />
      <button
        @click="searchForFiles"
        class="flex-shrink-0 bg-recto-light hover:bg-red-500 text-white py-2 px-4 border border-recto-light hover:border-red-500"
        type="button"
      >
        BUSCAR HISTORIAL
      </button>
    </div>
    <div id="app">
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Busqueda incorrecta</h3>
      </modal>
    </div>
  </div>
</template>
<script>
import modal from "./modal";
export default {
  name: "search",
  components: {
    modal
  },
  data: () => {
    return {
      query: "",
      showModal: false
    };
  },
  methods: {
    searchForFiles: async function() {
      let query = this.query.trim();
      let fastsearch = this.$store.state.search;
      let search = {
        query: query,
        type: undefined,
        tag: fastsearch
      };
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      if (
        query !== "" ||
        query.search(/[0-9]/) >= 0 ||
        query.search(/[a-z]/) >= 0
      ) {
        if (query.search(/[0-9]/) >= 0) {
          search.type = "id";
        } else if (query.search(/[a-zA-Z]/) >= 0) {
          search.type = "name";
        } else {
          query = "undefined";
          search.query = undefined;
        }

        if (this.$route.name !== "Files") {
          await this.$router.push({
            name: "Files"
          });
        }
        // eslint-disable-next-line no-undef
        mp.trigger("searchSAFD", JSON.stringify(search));
        await this.$store.dispatch("loadingScreen/ISLOADING", false);
      } else {
        this.showModal = true;
        await this.$store.dispatch("loadingScreen/ISLOADING", false);
      }
    }
  }
};
</script>
