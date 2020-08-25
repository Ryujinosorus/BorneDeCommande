export default class BorneSetting{
    constructor(){
        this.firstPage = {
            "nbDiapo":"3",
            'picture' : [
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg',
                        'https://image.freepik.com/vecteurs-libre/ensemble-cadres-photo_98292-7012.jpg'
            ],
            "fontColor":"#00FFF0FF",
            "panelColor":"#00AE55BA",
            "fontSize":15,
            "interval":"5",
            "font":"Open Sans",
            "text":"Commander",
            "panelHeight":100,
            "marginTop":50
            },
        this.icon = {
            "iconOUT":{
            "url":"https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2FiconOUT%2Fkisspng-take-out-cafe-restaurant-computer-icons-hotel-takeaway-5add9fe12cd801.5172356015244738251837.jpg?alt=media&token=993d5cf8-bdbf-45ad-9290-633bdf625890",
            "withText":false,
            "text":"A emporter",
            "font":"Open Sans",
            "fontSize":"50",
            "fontColor":"#00FFF",
            "marginTop":"50",
            "bgColor":"#00FFF"
            },
            "iconIN":{
            "url":"https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2FiconIN%2F615BycIO7gL._AC_SX450_.jpg?alt=media&token=05bba819-b6a7-4da5-8e25-43721b9ad9b2",
            "withText":false,
            "text":"Sur place",
            "font":"Open Sans",
            "fontSize":"50",
            "fontColor":"#00FFF",
            "marginTop":"50",
            "bgColor":"#00FFF"
            }
            },
            this.categorie = [
            [
            "Pain",
            "https://image.freepik.com/photos-gratuite/vue-cote-poulet-doner-poulet-grille-concombre-tomates-vertes-oignon-rouge-sauce-dans-pain_141793-4822.jpg"
            ],
            [
            "Gallette",
            "https://image.freepik.com/photos-gratuite/tortilla-au-poulet-poivrons_2829-11093.jpg"
            ],
            [
            "Pizza",
            "https://image.freepik.com/photos-gratuite/savoureuse-pizza-au-poulet-aux-champignons-epices_114579-10420.jpg"
            ],
            [
            "Dessert",
            "https://image.freepik.com/photos-gratuite/dessert-tiramisu_2829-8554.jpg"
            ],
            [
            "Accompagnement",
            "https://image.freepik.com/photos-gratuite/vue-cote-frites-assaisonnement_141793-4899.jpg"
            ],
            [
            "Boissons",
            "https://image.freepik.com/photos-gratuite/boites-boisson-froide_144627-21423.jpg"
            ]
            ],
            this.list = {
            "DÃ©sorganisÃ©":{
            "Pain":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            },
            "Pizza":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            },
            "Gallette":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            },
            "Dessert":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            },
            "Accompagnement":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            },
            "Boissons":{
            "largeur":null,
            "hauteur":null,
            "espacement":null
            }
            },
            "Organisé":{
            "hauteur":350,
            "largeur":300,
            "espacementT":100,
            "espacementG":100
            },
            "Menu dÃ©roulant":{
            "largeur":50,
            "hauteur":50,
            "margin":50,
            "hauteurMenu":1000,
            "withText":false,
            "fontSize":15,
            "fontColor":"#00FFF",
            "font":"Open Sans"
            },
            "recap":{
            "largeur":411,
            "text":"Votre commande",
            "fontTitle":"Open Sans",
            "fontRecap":"Open Sans",
            "fontSizeTitle":25,
            "colorTitle":"#EEEEEEFF",
            "borderColor":"#FFD000FF",
            "borderT":false,
            "borderG":true,
            "borderD":false,
            "borderB":true,
            "borderSize":5,
            "borderTCSize":3,
            "borderTCColor":"#FFFFFFFF",
            "borderCommandeSize":2,
            "borderCommandeColor":"#EEEEEEFF",
            "backgroundColorTitle":"#FF8A5DFF",
            "backgroundColorRecap":"#F1CD92FF",
            "heightTitle":120,
            "commandeTitleSize":34,
            "commandeTitleColor":"#FFB400FF",
            "commandeTitleFont":"Open sans",
            "commandeDetailSize":25,
            "commandeDetailColor":"#EEEEEEFF",
            "commandeDetailFont":"Open sans",
            "commandePrixlSize":30,
            "commandePrixColor":"#908383FF",
            "commandePrixFont":"Open sans",
            "textBouttonCommander":"Passer commande",
            "fontSizeBouttonCommander":20,
            "fontBouttonCommander":"Open Sans",
            "fontColorBouttonCommander":"#FFFFFFFF",
            "backgroundColorBouttonCommander":"#FF6B00FF",
            "backgroundColorCate":"#E37605FF",
            "rounded":3,
            "textCate":true,
            "cateTextHeight":75,
            "cateTextFont":"Abril Fatface",
            "cateTextFontSize":29,
            "cateTextColor":"#EEEEEEFF",
            "cateElevation":5,
            "cateBorderSize":3,
            "cateBorderColor":"#CFC9C9FF",
            "cateBackgroundColor":"#F79E55FF"
            },
            "showFood":{
            "withText":true,
            "fontColor":"#eee",
            "backgroundColorMenu":"#F9BD25FF",
            "rounded":10,
            "textMenu":true,
            "cateTextHeight":350,
            "menuTextColor":"#FF8D00FF",
            "menuTextFont":"Open Sans",
            "menuBackgroundColor":"#F4D0ADFF",
            "menuTextFontSize":32,
            "cateElevation":10,
            "menuBorderSize":2,
            "menuBorderColor":"#FFF100FF",
            "menuTextHeight":100,
            "menuElevation":10,
            "back":{
            "hauteur":350,
            "largeur":300,
            "withText":true,
            "textHauteur":86,
            "textFont":"Open Sans",
            "textColor":"#E40707FF",
            "backgroundColorText":"#00F569FF",
            "fontSize":36,
            "borderSize":14,
            "borderColor":"#006CFFFF",
            "text":"Retour negro",
            "picture":"https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/dataOfUser%2Fundefined%2FBorneSetting%2Fpicure%2FbackPicture.png?alt=media&token=d62bde10-cdc9-49f0-a2a4-322f104eb4c4"
            },
            "hauteur":350,
            "largeur":300,
            "espacementT":100,
            "espacementG":100
            }
            },
            this.custom = {
                /*
                'toolbar' :{
                    'height' : 150,
                    'backgroundColor' : '#eee',
                    'text' : 'Customisation',
                    'textColor' :'#eee',
                    'textSize' : 25,
                    'font' :'Open Sans',
                    'btnColor' : '#eee',
                    'btnSize' : 15,
                    'marginL' : 25
                },
                */
                'backgroundColor' : '#eee',
                'transition' : 'scroll-y',

                'selectDiv' : {
                    'marginT' : 55,
                    'hauteur' : 750,
                    'largeur' : 750,
                    'backgroundColor' : '#eee',
                    'borderSize' : 5,
                    'borderColor' : '#eee',
                    'borderR' : true,
                    'borderL' : true,
                    'borderT' : true,
                    'borderB' : true,
                },
                'title' : {
                    'font' : 'Open sans',
                    'fontSize' : '50',
                    'fontColor' : '#eee',
                    'marginT' : 10,
                    'text' : 'Customiser votre plat'
                },
                'nomPlat' : {
                    'fontSize' : '50',
                    'fontColor' : '#eee',
                    'font': 'Open Sans',
                    'marginT' : 25,
                    'marginL' : 10
                },
                'nomDetail' : {
                    'font' : 'Open sans',
                    'fontSize' : '50',
                    'fontColor' : '#eee',
                    'marginT' : 10,
                    'marginL' : 10
                },

                'cardDetail' : {
                    'hauteur' : 250,
                    'largeur' : 250,
                    'marginL' : 50,
                    'marginT' : 50,
                    'imgHeight' : 200,
                    'backgroundColor' : '#eee',
                    'fontSize' : 20,
                    'fontColor' : '#eee',
                    'font' : 'Open Sans'
                },
                'addBTN' : {
                    'largeur' : 250,
                    'hauteur' : 250,
                    'backgroundColor' : '#eee',
                    'backgroundTextColor' : '#eee',
                    'url' : 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2Fadd%2Fcadit.png?alt=media&token=115ec7fb-be07-4fd0-a2c8-61568645f246',
                    'withText' : false,
                    'text' :'Ajouter',
                    'textHeight' : 100,
                    'fontSize' : 30,
                    'font' : 'Open Sans',
                    'fontColor' : '#eee',
                    'marginT' : 50,
                    'marginG' : 150,
                    'borderSize' : 10,
                    'borderColor' : '#eee' 
                },
                'cancelBTN' : {
                    'largeur' : 250,
                    'hauteur' : 250,
                    'backgroundColor' : '#eee',
                    'backgroundTextColor' : '#eee',
                    'url' : 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2Fcancel%2FcroixNoirRond.png?alt=media&token=af970bf7-fcb7-4576-bb75-fa3efb713087',
                    'withText' : false,
                    'text' :'Retour',
                    'textHeight' : 100,
                    'fontSize' : 30,
                    'font' : 'Open Sans',
                    'fontColor' : '#eee',
                    'marginT' : 50,
                    'marginG' : 150,
                    'borderSize' : 10,
                    'borderColor' : '#eee' 
                }
            }
            this.valid = {
                'backgroundColor' : '#B82626FF',
                'text' : 'Que voulez vous faire ? ',
                'fontColor' : '#EEEEEEFF',
                'font' : 'Open Sans',
                'fontSize' : 20,
                'marginT' : 0,
                'recap' : {
                    'largeur' : 802,
                    'hauteur' : 913,
                    'backgroundColor' : '#EEEEEEFF',
                    'marginT' : 25,
                    'borderSize' : 17,
                    'borderColor' : '#00FF3AFF',
                    'borderT' : true,
                    'borderB' : true,
                    'borderL' : true,
                    'borderR' : true,
                    'titre' : {
                        'height' : 150,
                        'backgroundColor' : '#eee',
                        'font' : 'Open Sans',
                        'fontSize' : 50,
                        'fontColor' : '#E5Q2A5',
                        'text' : 'Récapitulatif de la commande',
                        'borderSize' : 5,
                        'borderColor' : '#AEDC52',
                        'borderT' : true,
                        'borderB' : true,
                        'borderL' : true,
                        'borderR' : true,
                    }
                },
                'backBTN' : {
                    'largeur' : 250,
                    'hauteur' : 250,
                    'backgroundColor' : '#eee',
                    'backgroundTextColor' : '#eee',
                    'url' : 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2Fback%2Fquitter-signboard-lumiere-fleche-forme_1095-13.jpg?alt=media&token=85f18060-4584-4c75-a9e3-e1527534618b',
                    'withText' : false,
                    'text' :'Annuler',
                    'textHeight' : 100,
                    'fontSize' : 30,
                    'font' : 'Open Sans',
                    'fontColor' : '#eee',
                    'marginT' : 50,
                    'marginG' : 150,
                    'borderSize' : 10,
                    'borderColor' : '#eee'
                },
                'nextBTN' : {
                    'largeur' : 250,
                    'hauteur' : 250,
                    'backgroundColor' : '#eee',
                    'backgroundTextColor' : '#eee',
                    'url' : 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2Fnext%2Faccelerer-emoji_53876-25526.jpg?alt=media&token=940b601e-2328-4788-9191-5107eff6bedf',
                    'withText' : false,
                    'text' :'Annuler',
                    'textHeight' : 100,
                    'fontSize' : 30,
                    'font' : 'Open Sans',
                    'fontColor' : '#eee',
                    'marginT' : 50,
                    'marginR' : 150,
                    'borderSize' : 10,
                    'borderColor' : '#eee'
                }
            }
            this.type="OrganisÃ©"
    }    
}