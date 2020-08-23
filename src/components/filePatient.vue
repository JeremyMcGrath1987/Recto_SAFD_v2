<template>
  <div class="filePatient">
    <div class="img-container w-56 overflow-hidden">
      <ul class="file-details mt-4">
        <li>
          <span class="font-bold">Nombre:</span>
          {{ singleFile.name }}
        </li>
        <li>
          <span class="font-bold">Identificación::</span>
          {{ singleFile.identification }}
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
  }
};
</script>

