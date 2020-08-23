<template>
  <div class="home flex items-center justify-center h-full flex-col">
    <img src="../assets/images/safd_logo.png" alt="lspd logo" />
    <p class="mt-8">
      <span class="font-bold">R</span>egistro
      <span class="font-bold">E</span>statal de
      <span class="font-bold">S</span>an
      <span class="font-bold">A</span>ndreas
      <span class="font-bold">F</span>ire
      <span class="font-bold">D</span>epartment
    </p>
    
    <search class="mt-4 md:w-1/3 w-full" />
  </div>
</template>
<script>
import search from "../components/search";
export default {
  name: "Home",
  components: { search }
};
</script>
