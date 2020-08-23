<template>
    <div class="files flex flex-col flex-no-wrap">
        <topbar />
        <div class="files-wrapper flex flex-wrap p-4">
            <file
                class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1"
                v-for="(file, index) in files"
                :key="index"
                :file="file"
                @click.native="gotofile"
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
    data: () => {
        return {
            files: [
                {
                    name: "Frank Castle",                    
                    identification: "X4388998899",
                    
                },
                {
                    name: "Natasha Romanoff",
                    identification: "N48569951",
                    
                },
                {
                    name: "harley Quinn",                    
                    identification: "Z478451262",
                    
                }
            ]
        };
    },
    mounted() {
        this.$store.dispatch("loadingScreen/ISLOADING", false);
    },
    methods: {
        gotofile: async function() {
            await this.$store.dispatch("loadingScreen/ISLOADING", true);
            await this.$router.push({ name: "File"});
        }
    }
};
</script>
