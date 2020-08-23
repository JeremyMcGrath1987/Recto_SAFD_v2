<template>
  <div class="file flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-patient />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <file-menu active="historial" />
        <table
          v-if="
            Array.isArray(singleFile.historial) &&
              singleFile.historial.length > 0
          "
          class="table-auto border-b border-recto-dark"
        >
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td class="px-4 py-2">Enfermedades</td>
              <td class="px-4 py-2"></td>
              <td class="px-4 py-2">Nº colegiado</td>
              <td class="px-4 py-2">fecha y hora</td>
            </tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(antecedente, index) in singleFile.historial"
              :key="index"
            >
              <td class="px-4 py-2">
                <p v-for="(art, index) in antecedente.arts" :key="index">{{ art }}</p>
              </td>
              <td class="px-4 py-2"></td>
              <td class="px-4 py-2 w-1/6">{{ antecedente.medico }}</td>
              <td class="px-4 py-2 w-1/4">{{ antecedente.fecha }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <p>No hay datos en este apartado.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
import singleFile from "../mixins/singleFile";
import filePatient from "../components/filePatient";
import moment from "moment";
moment.locale("es");

export default {
  name: "file",
  components: { topBar, fileMenu, filePatient },
  mixins: [singleFile],
  async mounted() {    
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
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
</style>
