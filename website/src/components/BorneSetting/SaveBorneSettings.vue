<template>
  <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        <v-icon></v-icon>
          Sauvegarder
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Etes vous sur de vouloir sauvergrder ?</v-card-title>
        <v-card-text>En sauvegardant vous allez modfier le theme de vos bornes, attention si celles ci sont allumé un redemerage sera necessaire pour que les modfication soit effectives</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="save">Oui</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Non</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            'dialog':false
        }
    },
    methods:{
        save:function(){
            this.$emit('save');
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>