<template>
    <div>
        <div v-if="showIngredient || true">
            <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3"> <i class="fas fa-utensils"></i> ESPACE CUISINE</h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                {{intro}}
                </v-responsive>


                <div></div>
                </v-container>

                <div class="py-12"></div>
            </section>


                    <section
                id="features"
                class="grey lighten-3"
            >
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">VOS CATEGORIES</h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>
                    <v-row > 
                    </v-row>
                    <v-divider></v-divider>
                    
                </v-responsive>
                <app-listcategories></app-listcategories>
                </v-container>

                <div class="py-12"></div>
            </section>



            <!--
                    <section
                id="features"
                class="grey lighten-3"
            >
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">INGREDIENTS NON DISPONIBLE A LA VENTE</h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    v-for="data of myData" v-bind:key="data['.key']"
                    >
                    <v-card
                        class="py-12 px-4"
                        color="grey lighten-5"
                        flat
                    >
                        <v-theme-provider dark>
                        <v-img :src="data.url" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>
                        </v-theme-provider>

                        <v-card-title
                        class="justify-center font-weight-black text-uppercase"> {{data.name}}</v-card-title>
                        <v-card-text
                        class="subtitle-1"
                        > {{data.bio}}.</v-card-text>
                        <v-card-actions class="justify-center"><v-btn x-large class="center white--text" color="#1976D2" @click="goTo(data.name)">Acceder</v-btn></v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
                
                </v-container>

                <div class="py-12"></div>
            </section>


                    <section
                id="features"
                class="grey lighten-3"
            >
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">INGREDIENTS DISPONIBLE A LA VENTE</h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    v-for="data of myPayData" v-bind:key="data['.key']"
                    >
                    <v-card
                        class="py-12 px-4"
                        color="grey lighten-5"
                        flat
                    >
                        <v-theme-provider dark>
                        <v-img :src="data.url" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>
                        </v-theme-provider>

                        <v-card-title
                        class="justify-center font-weight-black text-uppercase"> {{data.name}}</v-card-title>
                        <v-card-text
                        class="subtitle-1"
                        > {{data.bio}}.</v-card-text>
                        <v-card-actions class="justify-center"><v-btn x-large class="center white--text" color="#1976D2" @click="goTo(data.name)">Acceder</v-btn></v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            -->
            <section
                id="features"
                class="grey lighten-3"
            >
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">PLATS ET MENUS</h2>

                <v-responsive
                    class="mx-auto mb-12"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-row justify="center">
                    <!--
                    <v-col
                    cols="12"
                    md="4"
                    v-for="data of myMPData" v-bind:key="data['.key']"
                    >
                    <v-card
                        class="py-12 px-4"
                        color="grey lighten-5"
                        flat
                    >
                        <v-theme-provider dark>
                        <v-img :src="data.url" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>
                        </v-theme-provider>

                        <v-card-title
                        class="justify-center font-weight-black text-uppercase"> {{data.name}}</v-card-title>
                        <v-card-text
                        class="subtitle-1"
                        > {{data.bio}}.</v-card-text>
                        <v-card-actions class="justify-center"><v-btn x-large class="center white--text" color="#1976D2" @click="goTo(data.name)">Acceder</v-btn></v-card-actions>
                    </v-card>
                    </v-col>
                    -->
                     <v-col
                    cols="12"
                    md="4"
                    >
                    <v-card
                        class="py-12 px-4"
                        color="grey lighten-5"
                        flat
                    >
                        <v-theme-provider dark>
                        <v-img src="https://image.freepik.com/photos-gratuite/burger-gros-plan-fond-noir_23-2148234990.jpg" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>
                        </v-theme-provider>

                        <v-card-title
                        class="justify-center font-weight-black text-uppercase"> Recette </v-card-title>
                        <v-card-text
                        class="subtitle-1"
                        > Les plats et menu qui seront affiché</v-card-text>
                        <v-card-actions class="justify-center"><v-btn x-large class="center white--text" color="#1976D2" @click="goTo('custom')">Acceder</v-btn></v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
                
                </v-container>

                <div class="py-12"></div>
            </section>

                <div class="py-12"></div>

                                    <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3"> <i class="fas fa-utensils"></i> A SAVOIR</h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                Vos ingrédients non disponible à la vente sont stoché sur votre machine, cad que si vous vous connecter sur un autre ordinateur ne vous inquietez pas si elle sont modifier.
                Elle reviendra a la normale lors de votre retour sur votre ordinateur de base !
                </v-responsive>


                <div></div>
                </v-container>

                <div class="py-12"></div>
            </section>
        </div>
        <div v-else>
            <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3"> <i class="fas fa-utensils"></i> ESPACE CUISINE</h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                {{intro}}
                </v-responsive>
                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                <span style="color :#E94C29;">Cependant, vous devez etre connecté pour y acceder !</span>  <br><br>
                <router-link to="/Connexion">
                    <v-btn outlined color="#0D0D0D--text">Se connectez</v-btn>
                </router-link>
                </v-responsive>

                <div></div>
                </v-container>

                <div class="py-12"></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ingredient',
    props : ['showIngredient'],
    data () {
    return {
        title: 'ingredient',
        myData: [
            { name: "Pain", url: "https://image.freepik.com/photos-gratuite/pain-cuit-ingredients-oeufs-farine-tapioca-dans-tasse_1150-22111.jpg",bio:"Les composantes principaux de vos plat, baguette, faluche, pate à pizza, pain hamburger au sésame etc.." },
            { name: "Legume", url: "https://image.freepik.com/photos-gratuite/legumes-panier-table-bois_155003-5607.jpg",bio:"Salade, tomate,oignon, ou bettrave, maïs échallote, choisissez les légumes de votre restaurant" },
            { name: "Viandepoisson", url: "https://image.freepik.com/photos-gratuite/ingredients-alimentaires-sains-tableau-noir_144627-30550.jpg" ,bio:"Les viandes et poissons dont vous disposez, par exemple steack 100g, 150g, boeuf, kefta, mergez"},
            { name: "Sauce", url: "https://image.freepik.com/photos-gratuite/ensemble-sauces-dans-bols-cuilleres_23-2148132081.jpg" ,bio:"Toutes les sauces disponible dans votre restaurant, si c'est une sauce faites maison rajoutez la !"},
            { name: "Fromage", url: "https://image.freepik.com/photos-gratuite/amandes-differents-types-fromage-du-vin-bureau-bois_23-2148161960.jpg" ,bio:"Le fromage que vous utilisez, cruyére, cheddar ... Attention la sauce fromagere n'as pas sa place dans cette catégorie :'D"},
            { name: "Extra", url: "https://img.freepik.com/photos-gratuite/petit-dejeuner-anglais-pain-grille-oeuf-bacon-legumes-dans-style-rustique-table-bois_2829-19802.jpg?size=626&ext=jpg&uid=A",bio:"Tout se qui ne vas pas dans les catégories précedentes, galette de PDT, nuggets, oeuf ..." },
        ],
        myPayData : [
                { name: "Accompagnement Menu", url: "https://image.freepik.com/free-photo/french-fries-with-tomato-ketchup-sauce_74190-6193.jpg",bio:"Un menu est l'addition d'un plat et d'un ou plusieurs accompagnements de menu tels que des frites, potatoes ou salade" },
                { name: "Dessert", url: "https://image.freepik.com/free-photo/tasty-tiramisu-cake-glasses_23-2148531568.jpg" ,bio:"Les desserts, tout simplement les desserts"},
                { name: "Boisson", url: "https://image.freepik.com/photos-gratuite/verre-cola-glace_74190-4704.jpg" ,bio:"Les boissons, pour des raisons de droits à l'image envers les marques les photo sont hs"},
                {name: "suppléments", url :"https://image.freepik.com/photos-gratuite/oeufs-brouilles-au-bacon-au-vert_144627-475.jpg", bio : "Tout les suppléments que vos clients euvent rajouter a vos plats"}
        ],
        myMPData : [
            {name:"Plat",url:'https://image.freepik.com/photos-gratuite/burger-gros-plan-fond-noir_23-2148234990.jpg',bio:"Utilisez les ingrédients sélectionné précedement pour créer vos plat"},
            {name:"Menu",url:'https://image.freepik.com/photos-gratuite/gros-sandwich-hamburger-burger-boeuf-juteux-fromage-tomate-oignon-rouge-table-bois_2829-19631.jpg',bio:"A l'aide de vos plats et des autres inforemation crée vos menu"},
        ],
        user : null,
        intro : "Cette espece vous permet de gerer la carte de votre restaurant.Il sufit simplement de sélectionner les pains, pates, légumes, viandes, désserts que votre restaurant dispose."
    }
},
methods: {
    goTo:function(x){
        this.$router.replace('/add/'+x);
    }
},
computed:{
    getLoggin:function(){
        this.$store.getters.user;
        return this.$store.getters.user.loggedIn;
    }
},
created : function(){
}
}</script>

<style>
</style>
