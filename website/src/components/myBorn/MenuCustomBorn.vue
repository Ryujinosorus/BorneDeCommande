<template>
<v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
         class="myBtn"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <app-safebornesettings :borne="borne"></app-safebornesettings>
          </v-toolbar-items>
        </v-toolbar>
        <component 
        :is="name"
        :borne="borne"
        globalSettings="globalSettings"
        @REFRESH="refresh"
        ></component>
      </v-card>
    </v-dialog>
</template>

<script>
import BorneSetting from "../../Scripts/BorneSetting";
export default {
    props : ['name'],
    data(){
        return{
            dialog : false,
            borne : null,
            globalSettings : null,
            tmpDiapoPicture : [],
            opacity : 1
        }
    },
    created(){
    let tmp = this.$store.getters.bornesettings;
    if (tmp == null) this.borne = new BorneSetting();
    else this.borne = tmp;
    this.tmpDiapoPicture = this.borne.firstPage.picture;
    this.globalSettings = this.$store.getters.globalSettings;
    },
    methods : {
      refresh(){
        this.$emit("REFRESH");
      },
    }
}
 
</script>

<style scoped>
.myBtn{
    position: fixed;
    margin-top: 50px;
    margin-left: 50px;
    z-index: 100000000000000000000000;
}
</style>