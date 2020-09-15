<template>
 <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="primary" class="white--text" small height="60" max-width="50" 
          v-bind="attrs"
          v-on="on"
          @click="getText()"
          :loading='loader'
        >
          <v-icon>
              mdi-content-save
          </v-icon>
        </v-btn>
      </template>


            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                    Etes vous sur de vouloir enregistre ces plats ?
                </v-card-title>

                <v-card-text>
                    <v-textarea auto-grow outlined rows="1" row-height="10" :value="textToShow" readonly></v-textarea>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="save"
                            outlined
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
    data(){
        return{
            dialog:false,
            textToShow : 'aaa',
            loader : false
        }
    },
    methods:{
        save(){
            this.loader = true;
          this.$store.dispatch('ADD_ALLCUSTOM_FB');
          this.dialog = false;
          this.checkForLoader();
        },
        checkForLoader(){
            let tmp = this.$store.getters.getAllCustom;
            let again = false;
            for(let i=0;i<tmp.length;i++)
                if(tmp[i].pushHimToFb)
                    again = true;
            if(again)
                setTimeout(this.checkForLoader, 1000);
            else this.loader = false;
        },
        getText(){
            let res ='';
            let tmp = this.$store.getters.getAllCustom;
            console.log(tmp);
            for(let i=0;i<tmp.length;i++)
                res += (tmp[i].nom + '\n');
            this.textToShow = res;

        }
    }
}
</script>

<style>

</style>