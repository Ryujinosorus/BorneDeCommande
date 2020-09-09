<template>
    <v-app>
      <router-view :settings="settings"></router-view>
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
      console.log(this.$store.getters.borneSettings);
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


         new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.list.showFood.menuTextFont,
      {
        pickerId: "menuTextFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.title.font,
      {
        pickerId: "titleFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.cardDetail.font,
      {
        pickerId: "detailTitreFont",
        limit: 150,
      }
    );
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomDetail.font,
      {
        pickerId: "nomDetailFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomPlat.font,
      {
        pickerId: "nomPlatFont",
        limit: 150,
      }
    );

    new FontPicker(
      'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
      this.settings.icon.iconOUT.font, 
      { 
          pickerId : 'OUT',
          limit: 150 
      },
  );
    new FontPicker(
      'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
      this.settings.icon.iconIN.font, 
      { 
          pickerId : 'IN',
          limit: 150 
      },
    );

    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.firstPage.font, 
        { 
          limit: 150,
          pickerId : 'diapoFont'
        },
    );
    }
};
</script>