<template>
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Supprimer
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Etes vous sur de vouloir supprimer ?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="deleteCustom()"
          >
            Oui
          </v-btn>
        <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            Non
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props : ['custom','action'],
    data(){
        return{
            dialog : false
        }
    },
    methods : {
        deleteCustom(){
            this.$store.commit('DELETE_CUSTOM',this.custom);
            this.$emit('CLOSE');
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>