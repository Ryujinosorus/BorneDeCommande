<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Modfier votre logo {{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br>
        <br>
        <br>    
        <v-container>
            <v-row>
              <v-btn-toggle v-model="toggle_exclusive">
                <v-col cols="3" v-for="data of allData" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data.url" height="200px">
                        </v-img>
                        <v-card-actions heigth="10px">
                            <v-card-title class="mx-auto title subtitle-1">{{data.name}} </v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn @change="changeActiveOne(data.url)"  text color="deep-orange">
                              <v-icon :color="data.url ==activeOne ? 'green' : 'red'">mdi-thumb-up</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
              </v-btn-toggle>
            </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name:"iconSelector",
    props:['title','allData','content'],
    data(){
        return{
            dialog: false,
            activeOne : null,
            toggle_exclusive: 2,
        }
    },
    methods:{
      checkOnOffStart(u){
        return u == this.content.url;
      },
      changeActiveOne(u){
        this.content.url = u;
        console.log(this.content.url);
        this.activeOne = u;
      }
    },
    created(){
      this.activeOne = this.content.url;
    }
}
</script>

<style>

</style>