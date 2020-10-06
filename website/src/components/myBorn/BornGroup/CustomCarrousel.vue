<template>
    <div>
        <h1> Diaporama</h1>
        <v-expansion-panels focusable>
        <v-expansion-panel>
            <v-expansion-panel-header>Diaporama</v-expansion-panel-header>
            <v-expansion-panel-content>
            <app-carrouselSettings
                :borne="borne"
                :globalSettings="globalSettings"
                @changePicture="changeDiapoPicture($event)"
                @REFRESH="refresh"
            ></app-carrouselSettings>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    props : ['borne','globalSettings'],
    methods:{
        changeDiapoPicture(event) {
        this.tmpDiapoPicture[event[1]] = URL.createObjectURL(
            new Blob([event[0]], { type: "image/bmp" })
        );
        console.log(this.tmpDiapoPicture);
        },
        refresh(){
            this.$emit("REFRESH");
        }
    }
}
</script>

<style>

</style>