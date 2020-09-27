<template>
    <div class="full" :style="{backgroundColor: settings.valid.backgroundColor}">
        <div :style="{height :settings.valid.recap.marginT+'px' }">
        </div>
        <v-card  :height="settings.valid.recap.hauteur" :width="settings.valid.recap.largeur" :style="{
                                                                                                        borderRight : settings.valid.recap.borderR ? settings.valid.recap.borderSize + 'px solid' + settings.valid.recap.borderColor : '',
                                                                                                        borderLeft : settings.valid.recap.borderL ? settings.valid.recap.borderSize + 'px solid' + settings.valid.recap.borderColor : '',
                                                                                                        borderTop: settings.valid.recap.borderT ? settings.valid.recap.borderSize + 'px solid' + settings.valid.recap.borderColor : '',
                                                                                                        borderBottom : settings.valid.recap.borderB ? settings.valid.recap.borderSize + 'px solid' + settings.valid.recap.borderColor : '',
                                                                                                        margin : '0px auto 0px auto'
        }">
        <div :style="{
            backgroundColor : settings.valid.recap.titre.backgroundColor,
            height : settings.valid.recap.titre.height + 'px',
            borderRight : settings.valid.recap.titre.borderR ? settings.valid.recap.titre.borderSize + 'px solid' + settings.valid.recap.titre.borderColor : '',
            borderLeft : settings.valid.recap.titre.borderL ? settings.valid.recap.titre.borderSize + 'px solid' + settings.valid.recap.titre.borderColor : '',
            borderTop: settings.valid.recap.titre.borderT ? settings.valid.recap.titre.borderSize + 'px solid' + settings.valid.recap.titre.borderColor : '',
            borderBottom : settings.valid.recap.titre.borderB ? settings.valid.recap.titre.borderSize + 'px solid' + settings.valid.recap.titre.borderColor : ''
            }">
            <h1 :style="{
                fontSize : settings.valid.recap.titre.fontSize + 'px',
                color : settings.valid.recap.titre.fontColor,
                textAlign : 'center'
                }" class="apply-font-titreRecapFont">{{settings.valid.recap.titre.text}}</h1>
        </div>
        <div :style="{
            height : settings.valid.recap.hauteur - settings.valid.recap.titre.height -settings.valid.recap.titre.borderSize -settings.valid.recap.borderSize  + 'px',
            backgroundColor : settings.valid.recap.backgroundColor,
            marginTop : - settings.valid.recap.detail.titre.marginT + 'px',
        }">
            <div v-for="(com,index) in commande" :key="index">
                <div style="display : inline-block">
                <p 
                :style="{
                fontSize :  settings.valid.recap.detail.titre.fontSize + 'px',
                color : settings.valid.recap.detail.titre.fontColor,
                marginTop : settings.valid.recap.detail.titre.marginT + 'px',
                marginLeft : settings.valid.recap.detail.titre.marginL + 'px'
                }"
                >{{com.nom}}</p>
                <p>x2</p>
                </div>
                <div v-for="content in com.content" :key="content.nom">
                    <p
                    :style="{
                    fontSize :  settings.valid.recap.detail.detailCategorie.fontSize + 'px',
                    color : settings.valid.recap.detail.detailCategorie.fontColor,
                    marginTop : settings.valid.recap.detail.detailCategorie.marginT + 'px',
                    marginLeft : settings.valid.recap.detail.detailCategorie.marginL + 'px'
                    }"
                    >{{content.nom}}</p>
                    <p
                    :style="{
                    fontSize :  settings.valid.recap.detail.categorie.fontSize + 'px',
                    color : settings.valid.recap.detail.categorie.fontColor,
                    marginTop : settings.valid.recap.detail.categorie.marginT + 'px',
                    marginLeft : settings.valid.recap.detail.categorie.marginL + 'px'
                    }"
                    >{{fromArrayToString(content.data)}}</p>
                </div>
                <p
                :style="{
                fontSize :  settings.valid.recap.detail.prix.fontSize + 'px',
                color : settings.valid.recap.detail.prix.fontColor,
                marginTop : settings.valid.recap.detail.prix.marginT + 'px',
                marginLeft : settings.valid.recap.detail.prix.marginL + 'px'
                }"
                >{{(parseFloat(getPrice(com))).toFixed(2)}}</p>
            </div>
        </div>
        </v-card>
        <div>
            <h1 :style="{
                fontSize : settings.valid.fontSize + 'px',
                textAlign : 'center',
                color : settings.valid.fontColor,
                marginTop : settings.valid.marginT + 'px'
            }"
            class="apply-font-textFont"
            > {{settings.valid.text}} </h1>
        </div>
        <div :style="{backgroundColor : settings.valid.backgroundColor,
                    height : settings.valid.backBTN.hauteur + settings.valid.backBTN.marginT  + 'px'
        }">
        <!-- BACK BTN -->
        <router-link to="/desorganise">
        <div :style="{
            height : settings.valid.backBTN.hauteur + 'px',
            width : settings.valid.backBTN.largeur + 'px',
            marginTop : settings.valid.backBTN.marginT + 'px',
            marginLeft : settings.valid.backBTN.marginG + 'px',
            backgroundColor : settings.valid.backBTN.backgroundColor,
            backgroundImage :'url(' +  settings.valid.backBTN.url + ')',
            float :'left',
            backgroundSize : 'cover',
            border : settings.valid.backBTN.borderSize + 'px solid' + settings.valid.backBTN.borderColor
        }">
            <div v-if="settings.valid.backBTN.withText"  :style="{
                height : settings.valid.backBTN.textHeight + 'px',
                backgroundColor : settings.valid.backBTN.backgroundTextColor,
                marginTop : settings.valid.backBTN.hauteur - settings.valid.backBTN.textHeight - 2*settings.valid.backBTN.borderSize + 'px'
            }">
                <h2 :style="{
                    textAlign :'center',
                    fontSize : settings.valid.backBTN.fontSize +'px',
                    color : settings.valid.backBTN.fontColor
                    }" class="apply-font-backFont">{{settings.valid.backBTN.text}}</h2>
            </div>
        </div>
        </router-link>
        
        <!-- NEXT BTN -->
        <router-link to="/howPay">
        <div :style="{
            height : settings.valid.nextBTN.hauteur + 'px',
            width : settings.valid.nextBTN.largeur + 'px',
            marginTop : settings.valid.nextBTN.marginT + 'px',
            marginRight : settings.valid.nextBTN.marginR + 'px',
            backgroundColor : settings.valid.nextBTN.backgroundColor,
            float : 'right',
            backgroundImage :'url(' +  settings.valid.nextBTN.url + ')',
            backgroundSize : 'cover',
            border : settings.valid.nextBTN.borderSize + 'px solid' + settings.valid.nextBTN.borderColor
        }">
            <div v-if="settings.valid.nextBTN.withText"  :style="{
                height : settings.valid.nextBTN.textHeight + 'px',
                backgroundColor : settings.valid.nextBTN.backgroundTextColor,
                marginTop : settings.valid.nextBTN.hauteur - settings.valid.nextBTN.textHeight - 2*settings.valid.nextBTN.borderSize + 'px'
            }">
                <h2 :style="{
                    textAlign :'center',
                    fontSize : settings.valid.nextBTN.fontSize +'px',
                    color : settings.valid.nextBTN.fontColor
                    }" class="apply-font-nextFont">{{settings.valid.nextBTN.text}}</h2>
            </div>
        </div>
        </router-link>
        </div>
        <div class="hidden">
            <div id="font-picker-textFont"></div>
            <div id="font-picker-titreRecapFont"></div>
            <div id="font-picker-backFont"></div>
            <div id="font-picker-nextFont"></div>
        </div>
    </div>
    
</template>

<script>
import FontPicker from 'font-picker'
export default {
    props : ['settings'],
    data(){
        return{
            commande : null
        }
    },
    created(){
        this.commande = this.$store.getters.commande;
    },
    methods:{
      fromArrayToString(data){
        let res='';
        for(let i=0;i<data.length;i++)
            if(data[i].selected)
                res += data[i].nom + ', ';
        if(res =='')
            return 'Rien';
        return res.slice(0,res.length-2);
      },
      getPrice(data){
        let prix = parseFloat(data.prix);
        for(let i=0;i<data.content.length;i++)
          if(data.content[i].payable)
            for(let j=0;j<data.content[i].data.length;j++)
              if(data.content[i].data[j].selected)
                prix += parseFloat(data.content[i].data[j].price);
        return (prix);
      }
    },
    mounted(){
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.valid.font,
      {
        pickerId: "textFont",
        limit: 150,
      }
    );
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.valid.recap.titre.font,
      {
        pickerId: "titreRecapFont",
        limit: 150,
      }
    );
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.valid.backBTN.font,
      {
        pickerId: "backFont",
        limit: 150,
      }
    );
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.valid.nextBTN.font,
      {
        pickerId: "nextFont",
        limit: 150,
      }
    );
    }
}
</script>

<style scoped>
.full{
    min-height: 100vh;
    width: 100%;
}
.list {
    height: 800px;
    width: 750px;
    margin: 0 auto;
    position: relative;
    background-color: blue;
}
.btn-1{
    height: 200px;
    width: 500px;
    background-color: cyan;
    margin-top: 25px;
    margin-left: 500px;
    float: left;
}
.btn-2{
    height: 200px;
    width: 500px;
    background-color: cyan;
    margin-top: 25px;
    margin-right: 500px;
    float: right;
}
.title{
    text-align: center;
}
.textDiv{
    margin: 0 25px;
    background-color: burlywood;
}
</style>