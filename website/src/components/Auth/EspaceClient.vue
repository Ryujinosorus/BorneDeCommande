<template>
    <div v-if="user">
        <section id="about-me" class="white">
            <div class="py-12"></div>

            <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3"> <i class="fas fa-user"></i> ESPACE CLIENT</h2>

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
            Bienvenue dans votre Espace Client, vous y trouverez toutes les options rélative à votre compte et à votre restaurant.
                <br><br>
                <router-link to="/borneSetting">
                    <v-btn outlined color="#0D0D0D--text">Y acceder</v-btn>
                </router-link>
            </v-responsive>


            <div></div>
            </v-container>

            <div class="py-12"></div>
        </section>
            <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">  BORNE</h2>

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
                Fast Order vous permets de modifier à volonté le design de votre borne selon vos goûts et besoin.Vous pouvez modifier toutes les propriétes de votre borne depuis ce site.
                </v-responsive>
                <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
                >
                <br><br>
                <router-link to="/borneSetting">
                    <v-btn outlined color="#0D0D0D--text">Y acceder</v-btn>
                </router-link>
                </v-responsive>

                <div></div>
                </v-container>

                <div class="py-12"></div>
            </section>
    </div>
</template>

<script>
    export default {
        name: 'EspaceClient',
        data() {
            return {
                user : false,
            }
        },
        created(){
            this.user = this.$store.getters.user.loggedIn;
        }
    }
</script>

<style>
</style>
