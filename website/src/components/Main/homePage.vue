<template>
    <div>
        <v-main>
        <section id="hero">
            <v-row no-gutters>
            <v-img
                :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                src="https://image.freepik.com/free-photo/you-wish-continue-indian-man-customer-store-place-orders-pay-through-self-pay-floor-kiosk-fast-food-payment-terminal-his-thinking-choise_151355-4601.jpg"
            >
                <v-theme-provider dark>
                <v-container fill-height>
                    <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                    >
                    <v-col
                        class="white--text text-center"
                        cols="12"
                        tag="h1"
                    >
                        <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                        >
                        Bienvenue chez
                        </span>

                        <br>

                        <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                        >
                        Djanga
                        </span>

                    </v-col>

                    <v-btn
                        class="align-self-end"
                        fab
                        outlined
                        @click="$vuetify.goTo('#about-me')"
                    >
                        <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                    </v-row>
                </v-container>
                </v-theme-provider>
            </v-img>
            </v-row>
        </section>

        <section id="about-me">
            <div class="py-12"></div>

            <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">QUI SOMMES NOUS ?</h2>

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
            Djanga est une entreprise vendant des bornes de commandes, son logiciel flexible permet à tout les restaurateurs de pouvoir s'en servir. Pour créer votre carte il vous suffit juste de vous connecter gratuitement.Ses bornes élégante et robuste trouveront forcement leurs places dans votre restaurant !    
            </v-responsive>

            <v-avatar
                class="elevation-12 mb-12"
                size="128"
            >
                <v-img src="https://media-exp1.licdn.com/dms/image/C4D03AQGbmgpyZqlG1A/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=0vetQnJXt3vIqKCNrSiHD3_omipAH1Z31EQalNk98vk"></v-img>
            </v-avatar>

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
            <h2 class="display-2 font-weight-bold mb-3">NOS AVANTAGES</h2>

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
                >
                <v-card
                    class="py-12 px-4"
                    color="grey lighten-5"
                    flat
                >
                    <v-theme-provider dark>
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        <v-icon
                            large
                            class="fas fa-hourglass-half"
                        ></v-icon>
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Temps</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    > Ecourtez le temps d'attente de vos clients tout en réduisants les filles d'attente</v-card-text>
                </v-card>
                </v-col>
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
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        <v-icon
                            large
                            class="fas fa-money-bill-wave-alt"
                        ></v-icon>
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Gagnez plus</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    > Automatisez les commandes vous permettrons de vous concentrez sur la préparation en cuisine ainsi que le service, vous pouvez donc épargnez du personel</v-card-text>
                </v-card>
                </v-col>

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
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        <v-icon
                            large
                            class="fas fa-times"
                        ></v-icon>
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Adieu les erreurs</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    > Les commandes vous serront retransmise sur votre borne, il n'y aura plus aucune erreur durant les commandes</v-card-text>
                </v-card>
                </v-col>
            </v-row>
            <v-row>
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
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        <v-icon
                            large
                            class="fas fa-microchip"
                        ></v-icon>
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Modernisez vous</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    >Simplement avec une connexion internet dans votre restaurant vous pourrai valoriser l'image de votre marque et réconforter vos clients quant a la qualité de vos produits</v-card-text>
                </v-card>
                </v-col>
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
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        <v-icon
                            small
                            class="fas fa-mobile-alt"
                        ></v-icon>
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Réservation</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    > Toutes nos formules vous offre l'accés a notre application mobiles qui permettront à vos client de commander depuis chez eux, cela réduira leurs attentes et libera de la place chez vous </v-card-text>
                </v-card>
                </v-col>
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
                    <div>
                        <v-avatar
                        color="primary"
                        size="88"
                        >
                        </v-avatar>
                    </div>
                    </v-theme-provider>

                    <v-card-title
                    class="justify-center font-weight-black text-uppercase"> Flexibilitez</v-card-title>
                    <v-card-text
                    class="subtitle-1"
                    > Vous controllez tout !  Vous choisisez le theme de la borne, les images a afficher, bien évidement vous disposerez de l'accès a notre banque d'image pour simplifier votre travail</v-card-text>
                </v-card>
                </v-col>
            </v-row>
            </v-container>

            <div class="py-12"></div>
        </section>

        <section id="stats">
            <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            @click="goToVideo()"
            >
            <v-container fill-height>
                <v-row class="mx-auto">
                <v-col
                    cols="8"
                    md="3"
                >
                    <div class="text-center">
                    <div
                        class="display-3 font-weight-black mb-4"
                    >Présentation en ligne</div>

                    <div
                        class="title font-weight-regular text-uppercase"
                    ></div>
                    </div>
                </v-col>
                </v-row>
            </v-container>
            </v-parallax>
        </section>

                <section id="about-me">
            <div class="py-12"></div>

            <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">POURQUOI NOUS ?</h2>

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
            Djanga stock toutes ses données sur des serveurs Google vous garantisans une sécurité et un service ireprochable !
            De plus, chez Djanga vous pouvez essayer nos bornes gratuitement durant 15 jours !     
            </v-responsive>
            </v-container>

            <div class="py-12"></div>
        </section>

        <v-sheet
            id="contact"
            color="#333333"
            dark
            tag="section"
            tile
        >
            <div class="py-12"></div>

            <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Une question ?</h2>

            <v-responsive
                class="mx-auto mb-12"
                width="56"
            >
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
                <v-row>
                <v-col cols="12">
                    <v-text-field
                    flat
                    label="Name*"
                    solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field
                    flat
                    label="Email*"
                    solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field
                    flat
                    label="Subject*"
                    solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-textarea
                    flat
                    label="Message*"
                    solo
                    ></v-textarea>
                </v-col>

                <v-col
                    class="mx-auto"
                    cols="auto"
                >
                    <v-btn
                    color="accent"
                    x-large
                    >
                    Submit
                    </v-btn>
                </v-col>
                </v-row>
            </v-theme-provider>
            </v-container>

            <div class="py-12"></div>
        </v-sheet>
        </v-main>
    </div>
</template>
<script>
  export default{
      name:'homePage',
    data () {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Home', path: '/home', icon: 'fas fa-address-card' },
          { title: 'Sign Up', path: '/signup', icon: 'fas fa-address-card' },
          { title: 'Sign In', path: '/signin', icon: 'fas fa-address-card' }
        ]
      }
    },
    methods:{
        goToVideo :function(){
            window.open('https://www.w3schools.com');
        }
    }
  }
</script>
<style scoped>
span{
    color:#0378A6;
}
</style>
