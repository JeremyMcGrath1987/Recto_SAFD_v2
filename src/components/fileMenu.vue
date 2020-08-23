<template>
  <ul class="flex mb-4">
    <li class="mr-6">
      <a
        @click="goto('File')"
        class="hover:text-red-800 cursor-pointer"
        :class="{
          'border-b-2 border-recto-light': active === 'historial'
        }"
        >Historial Medico</a
      >
    </li>
    <li class="mr-6">
      <a
        @click="goto('Notes')"
        class="hover:text-red-800 cursor-pointer"
        :class="{ 'border-b-2 border-recto-light': active === 'notas' }"
        >Notas</a
      >
    </li>    
    <li class="ml-auto border border-recto-light py-1 px-2">
      <a class="hover:text-red-800 cursor-pointer" @click="goto('Note')"
        >Añadir nota</a
      >
    </li>    
    <li
      class="ml-1 border border-recto-light bg-recto-light text-white py-1 px-2"
    >
      <a class="hover:text-red-800 cursor-pointer" @click="goto('Report')"
        >Patologías</a
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "fileMenu",
  props: {
    active: {
      type: String,
      required: true
    }
  },
  methods: {
    goto: async function(route) {
      if (route !== this.$route.name) {
        await this.$store.dispatch("loadingScreen/ISLOADING", true);
        await this.$router.push({ name: route });
      }
    }
  }
};
</script>
