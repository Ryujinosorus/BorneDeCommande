<template>
  <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
              mdi-delete
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Etes vous de vouloir supprimer {{nom}} en tant que catégorie ?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Non
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="deleCate()"
          >
            Oui
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props : ['nom'],
    data(){
        return{
            dialog : false
        }
    },
    methods:{
        deleCate(){
            this.$store.commit('DEL_CATEGORIE',this.nom);
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>