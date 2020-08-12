<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="error"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        small
                        height="60"
                        max-width="150"
                        >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">Etes vous sur de vouloir supprimer ce menu ?</v-card-title>
                <v-card-text>
                    <v-textarea auto-grow outlined rows="1" row-height="10" :value="menu.toString()" readonly></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text outlined @click="deleteMenu">Oui</v-btn>
                    <v-btn color="error" text @click="dialog = false">Non</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        props:['menu'],
        data () {
        return {
            dialog: false,
        }
    },
    methods:{
        deleteMenu:function(){
            this.$store.commit('DELETE_MENU',this.menu);
            this.$emit('close');
            this.dialog = false;
        }
    }
    }
</script>   