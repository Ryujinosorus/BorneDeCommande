<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="500"
                persistent
                >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        :disabled="!canBeSafe"
                        small
                        height="60"
                        max-width="50"
                        @click="updateTxt"
                        >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                    Etes vous sur de vouloir enregistrer les modifications ?
                </v-card-title>

                <v-card-text>
                    <v-textarea auto-grow outlined  row-height="10" :value="updateTxt()" readonly></v-textarea>
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
    </div>
</template>

<script>
    import {fb} from'../../main.js';
    export default {
        name: 'app-safeplat',
        props : ['canBeSafe','parentName'],
        data() {
        return {
            dialog : false,
            textToSave :'',
        }
    },
    methods:{
        save:function(){
        let routeData = fb.storage().ref('dataOfUser/'+ this.$store.getters.user.email+'/'+ this.parentName +'.txt');
            routeData.put(new Blob([this.textToSave], {type: 'text/plain'}));
            this.dialog = false;
        },
        updateTxt:function(){
            let res='';
            let resToSave='';
            let data = this.$store.getters.getFoodByName(this.parentName);
            console.log(data);
            for (let x=0;x<data.length;x++){
                res+=( data[x][0] +"  : " + data[x][1] + "\n");
                resToSave+=( data[x][0] +"  : " + data[x][1] + " : " + data[x][2] + "\n");
            }
            this.textToSave = resToSave;
            console.log('res : ' + res);
            return res;
        }
    }
    }
</script>

<style>
</style>
