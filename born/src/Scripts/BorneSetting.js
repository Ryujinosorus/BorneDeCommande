export default class BorneSetting{
    constructor(){
        this.firstPage = {
            'nbDiapo' : '3',
            'fontColor' : '#00FFF',
            'panelColor' : '#00AE55BA',
            'fontSize' : 15,
            'interval' : '5',
            'font' : 'Open Sans',
            'text' : 'Commander',
            'panelHeight' : '30',
            'marginTop' :'50',
        },
        this.icon = {
            'iconOUT' :{
                'url' :'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2FiconOUT%2Fkisspng-take-out-cafe-restaurant-computer-icons-hotel-takeaway-5add9fe12cd801.5172356015244738251837.jpg?alt=media&token=993d5cf8-bdbf-45ad-9290-633bdf625890',
                'withText' : false,
                'text' : 'A emporter',
                'font' :'Open Sans',
                'fontSize' :'50',
                'fontColor' :'#00FFF',
                'marginTop' :'50',
                'bgColor' : '#00FFF'
            },
            'iconIN' : {
                'url' :'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/picture%2FiconSelector%2FiconIN%2F615BycIO7gL._AC_SX450_.jpg?alt=media&token=05bba819-b6a7-4da5-8e25-43721b9ad9b2',
                'withText' : false,
                'text' : 'Sur place',
                'font' :'Open Sans',
                'fontSize' :'50',
                'fontColor' :'#00FFF',
                'marginTop' :'50',
                'bgColor' : '#00FFF'
            }
        }
        this.categorie =  [
            ['Pain','https://image.freepik.com/photos-gratuite/vue-cote-poulet-doner-poulet-grille-concombre-tomates-vertes-oignon-rouge-sauce-dans-pain_141793-4822.jpg'],
            ['Gallette','https://image.freepik.com/photos-gratuite/tortilla-au-poulet-poivrons_2829-11093.jpg'],
            ['Pizza','https://image.freepik.com/photos-gratuite/savoureuse-pizza-au-poulet-aux-champignons-epices_114579-10420.jpg'],
            ['Dessert','https://image.freepik.com/photos-gratuite/dessert-tiramisu_2829-8554.jpg'],
            ['Accompagnement','https://image.freepik.com/photos-gratuite/vue-cote-frites-assaisonnement_141793-4899.jpg'],
            ['Boissons','https://image.freepik.com/photos-gratuite/boites-boisson-froide_144627-21423.jpg']

        ];
        this.list ={
            'Désorganisé' : {
                'Pain':{
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },
                'Pizza':{
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },
                'Gallette':{
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },
                'Dessert' : {
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },
                'Accompagnement':{
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },
                'Boissons':{
                    'largeur': null,
                    'hauteur' : null,
                    'espacement' : null
                },

            },
            'Organisé' : {
            },
            'Menu déroulant' : {
                'largeur' :50,
                'hauteur' : 50,
                'margin' : 50,
                'hauteurMenu' : 1000,
                'withText' : false,
                'fontSize' : 15,
                'fontColor' : "#00FFF",
                'font' :'Open Sans'

            },
            'recap':{
                'largeur' : 250,  
                'text' :'Votre commande', 
                'fontTitle' :'Open Sans', 
                'fontRecap' :'Open Sans', 
                'fontSizeTitle' : 25, 
                'colorTitle' : '#eee',

                'borderColor' :'#fff',
                'borderT' : true,
                'borderG' : true,
                'borderD' : true,
                'borderB' : true,
                'borderSize' : 5,

                'borderTCSize' : '2', 
                'borderTCColor' : '#eee', 
                'borderCommandeSize' :'2',
                'borderCommandeColor' :'#eee',

                'backgroundColorTitle' : '#fff',  
                'backgroundColorRecap' : '#eee', 
                
                'heightTitle' : 150,
                
                'commandeTitleSize' :20,
                'commandeTitleColor' :'#eee',
                'commandeTitleFont' : 'Open sans',

                'commandeDetailSize' : 20,
                'commandeDetailColor' : '#eee',
                'commandeDetailFont' :'Open sans',

                'commandePrixlSize' : 20,
                'commandePrixColor' : '#eee',
                'commandePrixFont' :'Open sans',
            
                'textBouttonCommander' : 'Passer commande',
                'fontSizeBouttonCommander' :'20',
                'fontBouttonCommander' :'Open Sans',
                'fontColorBouttonCommander' :'#eee',
                'backgroundColorBouttonCommander' :'#fff',

                'backgroundColorCate' : '#eee',
                'rounded' :0,
                'textCate' : true,
                'cateTextHeight' : 25,
                'cateTextFont' : 'Open Sans',
                'cateTextFontSize' :'15',
                'cateTextColor' : '#eee',
                
                'cateElevation' : 5,
                'cateBorderSize' :'1',
                'cateBorderColor' :'#fff',
                'cateBackgroundColor' :'#fff'

            }
        }
        this.type='';
    }
}