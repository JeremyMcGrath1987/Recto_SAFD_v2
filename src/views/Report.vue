<template>
  <div class="report relative pb-16">
    <div
      class="lista-patologias-aplicados fixed bg-recto-normal z-20 overflow-y-scroll"
      :class="{ desplegada: isDesplegada }"
    >
      <div class="patologias-header flex flex-row py-4 px-4 flex-grow">
        <a
          @click="isDesplegada = !isDesplegada"
          href="#"
          class="self-start mr-8 border border-recto-light py-1 px-2"
          >{{ isDesplegada ? "Plegar" : "Desplegar" }}</a
        >
        <p class="flex-1 flex items-center self-start pt-1">
        </p>
        <ul class="right-0 self-start">
          <li class="inline-block ml-4"></li>
          <li class="inline-block ml-4">
            
          </li>
          <li class="inline-block ml-4"></li>
          <li
            v-if="selected.length > 0"
            @click="selected = []"
            class="inline-block ml-4 text-red-400 hover:text-red-800 cursor-pointer ml-1 border border-red-400 py-1 px-2"
          >
            Cancelar patología
          </li>
          <li
            @click="confirmPatologia"
            v-if="selected.length > 0"
            class="inline-block ml-4 hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
          >
            Confirmar patología
          </li>
        </ul>
      </div>
      <table class="table-auto border-b border-recto-dark w-full">
        <tbody>
          <tr class="border border-recto-dark font-bold bg-recto-dark">
            <td class="px-4 py-2">
              Patología aplicada
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr
            class="border-l border-r border-recto-dark"
            v-for="(patologia, index) in selected"
            :key="index"
          >
            <td class="px-4 py-2">
              {{ patologia.titulo }}
            </td>
            <td></td>
            <td></td>
            <td class="px-4 py-2">
              <a
                @click="removePatologia(index)"
                class="float-right text-red-400 hover:text-red-900 cursor-pointer ml-1 border border-red-400 py-1 px-2"
                >Eliminar</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="file flex flex-col flex-no-wrap">
      <top-bar />
      <div class="file-details-content flex flex-row">
        <div class="flex flex-wrap p-4">
          <file-patient />
        </div>
        <div class="file-content p-4 flex flex-col w-full">
          <file-menu active="" />
          <p class="mb-2 text-lg font-bold">Registro Patologías Comunes</p>
          <input
            v-model="search"
            class="mt-2 mb-4 appearance-none bg-recto-dark border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
            type="text"
            placeholder="Buscar enfermedad"
          />
          <div class="report-tables flex flex-row">
            <table class="table-auto border-b border-recto-dark w-full">
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Patologías
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(patologia, index) in filteredList"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    {{ patologia.titulo }}
                  </td>
                  <td></td>
                  <td></td>
                  <td class="px-4 py-2">
                    <a
                      @click="addPatologia(patologia)"
                      class="float-right hover:text-red-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
                      >Añadir</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "@/components/topbar";
import fileMenu from "@/components/fileMenu";
import filePatient from "@/components/filePatient";
import singleFile from "@/mixins/singleFile";
import moment from "moment";
export default {
  name: "report",
  data: () => {
    return {
      search: "",
      selected: [],
      isDesplegada: false
    };
  },
  components: { topBar, filePatient, fileMenu },
  mixins: [singleFile],
  async mounted() {
    /* // eslint-disable-next-line no-undef
    mp.trigger("getPathologiesList"); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  computed: {
    filteredList() {
      return this.$store.state.pathologies.data.filter(patologia => {
        let d = patologia.titulo.toLowerCase();
        let s = this.search.toLowerCase();
        return d.includes(s);
      });
    }
  },
  methods: {
    addPatologia: function(patologia) {
      this.selected.push(patologia);
    },
    removePatologia: function(index) {
      this.selected.splice(index, 1);
    },
    confirmPatologia: async function() {
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      let fine = {
        arts: [],
        user: undefined,
        fecha: moment()
      };
      this.selected.forEach(patologia => {
        fine.arts.push(`${patologia.titulo}`);
      });
      fine.user = this.$store.state.user.data.name;
      await this.$store.dispatch("ADDFINE", fine);
      await this.$router.push({ name: "File" });
      await this.$store.dispatch("loadingScreen/ISLOADING", false);
    }
  }
};
</script>
<style lang="scss">
tr:nth-child(odd) {
  background: #2f0b0b;
}
.lista-patologias-aplicados {
  transition: all 0.4s ease-in-out;
  height: 65px;
  bottom: 238px;
  width: 1142px;
}
.desplegada {
  height: 640px !important;
}
</style>
