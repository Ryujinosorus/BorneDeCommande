<template>
    <div>
        <app-menu></app-menu>
        <v-container>
            <v-row>
                <h1 style="font-size: 30px; color : #00335A;font-family: 'Open Sans', sans-serif;">Cr�ez les plats ainsi que les menus disponible dans votre restaurant ! </h1>
            </v-row>
            <v-row>
                <v-col cols="3" v-for="data of myData" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data.url" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{data.name}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <router-link :to="getLink(data.name)" exact>
                                <v-btn depressed center>Visiter</v-btn>
                            </router-link>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>


            </v-row>
        </v-container>
    </div>
</template>

<script>export default {
    name: 'carte',
    data () {
    return {
        title: 'carte',
        myData: [
            { name: "Plat", url: "https://image.freepik.com/photos-gratuite/burger-gros-plan-fond-noir_23-2148234990.jpg" },
            { name: "Menu", url: "https://image.freepik.com/photos-gratuite/gros-sandwich-hamburger-burger-boeuf-juteux-fromage-tomate-oignon-rouge-table-bois_2829-19631.jpg" }
        ]
    }
},
methods: {
    getLink:function(x){
        return "./add/" + x;
    }
}
}</script>

<style>
</style>
