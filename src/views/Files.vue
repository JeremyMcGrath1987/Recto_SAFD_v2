<template>
    <div class="files flex flex-col flex-no-wrap">
        <topbar />
        <div class="items-end md:w-1/3 sm:1/2 lg:1/3 mt-8"><p class="text-xl flex items-center justify-center h-full flex-col">{{this.$store.state.files.data.message}}</p></div>
        <div v-if="!this.$store.state.files.data.message" class="files-wrapper flex flex-wrap p-4">
            <file
                class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1"
                v-for="(file, index) in this.$store.state.files.data"
                :key="index"
                :file="file"
                @click.native="gotofile(file.id)"
            />
        </div>
    </div>
</template>
<script>
import topbar from "../components/topbar";
import file from "../components/file";
export default {
    name: "files",
    components: { topbar, file },
    methods: {
        gotofile: async function(id) {
            /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
            await this.$router.push({ name: "File", params: {id: id}});
            // eslint-disable-next-line no-undef
            mp.trigger("getFileSAFD", id);
            
        }
    }
};
</script>
