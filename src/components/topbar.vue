<template>
  <div class="tob-bar flex flex-row items-center w-100 p-4 bg-recto-dark">
    <img
      @click="$router.push({ name: 'Home' })"
      class="h-12 pr-3 self-start"
      src="../assets/images/safd_logo.png"
      alt="safd logo"
    />
    <img class="safd-text" src="../assets/images/safd-text.png" alt="recto" />
    <search class="ml-4 space" />
  </div>
</template>
<script>
import search from "../components/search";
export default {
  name: "topbar",
  components: { search }
};
</script>
<style lang="scss">
.safd-text {
  height: 20px;
  margin-top: -10px;
}
.space{
  margin-left: 550px;
}
</style>
