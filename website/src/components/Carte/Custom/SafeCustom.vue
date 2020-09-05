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
        {{action == 'ADD_CUSTOM' ? 'Ajouter' : 'Modifier'}}
          <v-icon>mdi-safe</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Etes vous sur de vouloir sauvegarder ?
        </v-card-title>

        <v-card-text>
            <v-col cols="12" sm="12">
              <v-textarea label="Plat qui va etre ajouté" auto-grow outlined rows="1" row-height="10" :value="custom.toString()" readonly></v-textarea>
           </v-col>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="save()"
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
        save(){
            console.log('EN TRAIN D AJOUTER');
            this.$store.commit(this.action,[
                this.custom,
                this.index
            ]);
            this.$emit('CLOSE');
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>