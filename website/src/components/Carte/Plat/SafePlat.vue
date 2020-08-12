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
                        max-width="150"
                        >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                    Etes vous sur de vouloir {{action}} ce plat ?
                </v-card-title>

                <v-card-text>
                    <v-textarea auto-grow outlined rows="1" row-height="10" :value="plat.toString()" readonly></v-textarea>
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
    export default {
        name: 'app-safeplat',
        props : ['plat','canBeSafe','action'],
        data() {
        return {
        dialog : false,
        }
    },
    methods:{
        save:function(){
            this.dialog=false;
            this.$emit('save');
        }
    }
    }
</script>

<style>
</style>
