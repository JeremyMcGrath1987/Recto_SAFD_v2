<template>
  <div class="file flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-patient />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <file-menu active="notas" />
        <table class="border-b border-recto-dark">
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td></td>
              <td class="px-4 py-2">Notas</td>
              <td class="px-4 py-2">Colegiado</td>
              <td class="px-4 py-2">fecha y hora</td>
            </tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(nota, index) in singleFile.notas"
              :key="index"
            >
              <td class="pl-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="removeNote(index)"
                >X</button>
              </td>
              <td class="px-4 py-2">{{ nota.texto }}</td>
              <td class="px-4 py-2 w-1/6">{{ nota.user }}</td>
              <td class="px-4 py-2 w-1/5">{{ nota.fecha }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
import filePatient from "../components/filePatient";
export default {
  name: "file",
  components: { topBar, fileMenu, filePatient },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    removeNote: function(index) {
      this.$store.dispatch("REMOVENOTE", index);
    }
  },
  computed: {
    singleFile: function() {
      return this.$store.state.file.data;
    }
  }
};
</script>
<style lang="scss">
.file-details {
  li {
    border: none;
    padding: 0;
    display: block;
  }
}
tr:nth-child(odd) {
  background: #2f0b0b;
}
.button-remove-note{
  width: 20px;
  height: 20px;
  border: 1px solid #ff5858;
}
.button-remove-note:focus{
  outline: none;
}
</style>
