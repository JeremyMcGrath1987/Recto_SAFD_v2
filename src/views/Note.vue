<template>
  <div class="note flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-patient />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <file-menu active="" />
        <p class="mb-2 text-lg font-bold">AÑADE UNA NOTA</p>
        <div class="note-form flex flex-row pt-2">
          <textarea
            v-model="texto"
            placeholder="Introduce una nota"
            class="w-full appearance-none bg-recto-dark border w-full border-recto-light p-2 uppercase focus:outline-none placeholder-gray-700 h-64"
          ></textarea>
        </div>
        <button
          @click="addNote"
          class="mt-2 w-1/4 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
          type="button"
        >
          AÑADIR NOTA
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
import filePatient from "../components/filePatient";
export default {
  name: "note",
  data: () => {
    return {
      texto: undefined
    };
  },
  components: { topBar, fileMenu, filePatient },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    addNote: async function() {
      let noteAdded = await this.$store.dispatch("ADDNOTE", {
        user: this.$store.state.user.data.name,
        texto: this.texto
      });
      if (!noteAdded) {
        console.log("note error");
      } else {
        this.medico = undefined;
        this.texto = undefined;
        await this.$store.dispatch("loadingScreen/ISLOADING", true);
        this.$router.push({ name: "Notes" });
      }
    }
  }
};
</script>
