<template>
    <v-app>
      <router-view :settings="settings"></router-view>
      <div class="hidden">
        <div id="font-picker-title"></div>
        <div id="font-picker-recap"></div>
        <div id="font-picker-commandeDetail"></div>
        <div id="font-picker-commandeTitle"></div>
        <div id="font-picker-commandePrix"></div>
        <div id="font-picker-commandeBoutton"></div>
        <div id="font-picker-cateTextFont"></div>
      </div>
    </v-app>
    
</template> 

<script>
import FontPicker from "font-picker";
export default {
  name: 'App',

  data() {
      return {
        settings :null
    }
  },
  created(){
    this.settings = this.$store.getters.borneSettings;
  },
 mounted(){
        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontTitle, 
        { 
          pickerId: "title",
          limit: 150 },
        );
        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontRecap, 
        { 
          pickerId: "recap",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandeTitleFont, 
        { 
          pickerId: "commandeTitle",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandeDetailFont, 
        { 
          pickerId: "commandeDetail",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandePrixFont, 
        { 
          pickerId: "commandePrix",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontBouttonCommander, 
        { 
          pickerId: "commandeBoutton",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.cateTextFont, 
        { 
          pickerId: "cateTextFont",
          limit: 150 },
        );
    }
};
</script>