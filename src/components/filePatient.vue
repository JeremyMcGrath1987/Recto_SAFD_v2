<template>
  <div class="filePatient">
    <div
      class="img-container border border-recto-dark w-56 h-64 overflow-hidden"
    >
      <img
        class="object-cover w-full h-full opacity-50"
        :src="fileImage"
        :alt="singleFile.name"
      />
    </div>
    <div class="img-container w-56 overflow-hidden">
      <ul class="file-details mt-4">
        <li>
          <span class="font-bold">Nombre:</span>
          {{ singleFile.name }}
        </li>
        <li>
          <span class="font-bold">ID:</span>
          {{ singleFile.id }}
        </li>
        <li>
          <span class="font-bold">Condado:</span>
          {{ singleFile.stateCountry }}
        </li>
        <li>
          <span class="font-bold">Contacto:</span>
          {{ singleFile.telefono }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import singleFile from "../mixins/singleFile";
export default {
  name: "singleFile",
  mixins: [singleFile],
  computed: {
    fileImage: function() {
      return (
        this.singleFile.photo || require("../assets/images/file_bg_pattern.png")
      );
    }
  }
};
</script>

