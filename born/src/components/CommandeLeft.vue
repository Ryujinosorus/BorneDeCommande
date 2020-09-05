<template>
<div>
<div :style="{width : settings.list.recap.largeur+'px',height:'100vh',float :'right'}"></div>
    <div class="recap" :style="{
      borderBottom :settings.list.recap.borderB ? settings.list.recap.borderSize+'px solid' +settings.list.recap.borderColor : '' ,
      borderTop :settings.list.recap.borderT ? settings.list.recap.borderSize+'px solid' +settings.list.recap.borderColor : '' ,
      borderLeft :settings.list.recap.borderG ? settings.list.recap.borderSize+'px solid' +settings.list.recap.borderColor : '' ,
      borderRight :settings.list.recap.borderD ? settings.list.recap.borderSize+'px solid' +settings.list.recap.borderColor : '' ,
      width : settings.list.recap.largeur+'px'
      }"
    >

    <!-- TITLE -->
    <div :style="{
      backgroundColor : settings.list.recap.backgroundColorTitle,
      height : settings.list.recap.heightTitle +'px',
      borderBottom :settings.list.recap.borderTC ? settings.list.recap.borderTCSize+'px solid' +settings.list.recap.borderTCColor : '' 
    }">
    <div :style="{height : settings.list.recap.heightTitle/2- settings.list.recap.fontSizeTitle + 'px',}"
    ></div>
      <h1 class="apply-font-title" :style="{
        textAlign :'center',
        fontSize : settings.list.recap.fontSizeTitle +'px',
        color : settings.list.recap.colorTitle,
      }">{{settings.list.recap.text}}</h1>
    </div>

    <!-- DETAIL COMMANDE -->

      <div style="overflow-y: scroll;overflow-x:hidden" :style="{
        backgroundColor : settings.list.recap.backgroundColorRecap,
        height : settings.list.recap.detailTitle+ 'px'
        }"
        >
        <!-- PARTIE D'UNE COMMANDE -->
        <div :style="{
          borderBottom : settings.list.recap.borderCommandeSize +'px solid ' + settings.list.recap.borderCommandeColor,
        }" v-for="(data,index) of getCommande" :key="index">
          <!-- TITRE DE LA COMMANDE-->
          <h2 class="apply-font-commandeTitle" :style="{
          fontSize : settings.list.recap.commandeTitleSize +'px',
          color : settings.list.recap.commandeTitleColor,
        }">
        {{data.nom}}</h2>
        <!-- SI PLUSIEURS PLATS -->
        
        <div>
          <div v-for="(content,index) in data.content" :key="index">
            <div>
              <h1>{{content.nom}}</h1>
              <p class="apply-font-commandeDetail" :style="{
              fontSize : settings.list.recap.commandeDetailSize +'px',
              color : settings.list.recap.commandeDetailColor,
            }">  {{content.selected.length == 0 ? "Pas de sauce" : fromArrayToString(content.selected) }}</p>
          </div>
        </div>
        </div>


        <!-- + ET - -->
        <div>
          <v-row>
              <p class="apply-font-commandeDetail" :style="{
              fontSize : settings.list.recap.commandeDetailSize +'px',
              color : settings.list.recap.commandeDetailColor,
            }">Quantité :  </p>
          <v-btn elevation="0" @click="data.nb++" :height="settings.list.recap.btnPlus.hauteur" :style="{minWidth : '0px',width : settings.list.recap.btnPlus.largeur + 'px',
                                                                                                          marginTop : settings.list.recap.btnPlus.marginT + 'px',
                                                                                                          marginLeft : settings.list.recap.btnPlus.marginL + 'px',
                                                                                                          border : settings.list.recap.btnPlus.borderSize + 'px solid ' + settings.list.recap.btnPlus.borderColor,
                                                                                                          borderRadius :settings.list.recap.btnPlus.borderRadius + 'px'
            }" :color="settings.list.recap.btnPlus.backgroundColor">
            <v-icon :color="settings.list.recap.btnPlus.logoColor" :size="settings.list.recap.btnPlus.logoSize">mdi-plus</v-icon>
          </v-btn> 
          <p>{{data.nb}}</p>
          <v-btn elevation="0" @click="minusNB(data)" :height="settings.list.recap.btnMinus.hauteur" :style="{minWidth : '0px',
                                                                                                              width : settings.list.recap.btnMinus.largeur + 'px',
                                                                                                              marginTop : settings.list.recap.btnMinus.marginT + 'px',
                                                                                                              marginLeft : settings.list.recap.btnMinus.marginL + 'px',
                                                                                                              border : settings.list.recap.btnMinus.borderSize + 'px solid '+settings.list.recap.btnMinus.borderColor,
                                                                                                              borderRadius : settings.list.recap.btnMinus.borderRadius + 'px'
          }" :color="settings.list.recap.btnMinus.backgroundColor">
            <v-icon :color="settings.list.recap.btnMinus.logoColor" :size="settings.list.recap.btnMinus.logoSize">mdi-minus</v-icon>
          </v-btn> 
          </v-row>
        </div>

        <!-- PRIX -->
          <p class="apply-font-commandePrix" :style="{
          fontSize : settings.list.recap.commandePrixlSize +'px',
          color : settings.list.recap.commandePrixColor,
        }"> {{(getPrice(data))}} </p>
        </div>
      </div>


      <router-link to="/RecapAndBuy" style="min-height : 0px">
      <div :style="{
        backgroundColor : settings.list.recap.backgroundColorBouttonCommander,
        color : settings.list.recap.fontColorBouttonCommander,
        fontSize : settings.list.recap.fontSizeBouttonCommander + 'px',
        height : '100%'
        }">
        <p class="apply-font-commandeBoutton centreMoiSaY">{{settings.list.recap.textBouttonCommander}} </p>
      </div>
      </router-link>
    </div>
     <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="delCommande"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>
<script>
export default {
    props:['settings'],
    data(){
      return{
        dialog : false,
        data : null,
      }
    },
    methods : {
      getPrice(data){
        let res = parseFloat(data.prix);
        for (let i=0;i<data.content.length;i++)
          if(data.content[i].payable)
            for(let j=0;j<data.content[i].selected.length;j++)
              res+= parseFloat(data.content[i].selected[j].price);
        return res;
      },
      minusNB(data){
        data.nb--;
        if(data.nb ==0){
          this.dialog = true;
          this.data = data;
        }
      },
      delCommande(){
        this.$store.commit('DEL_COMMANDE',this.data);
        this.dialog = false;
      },
      fromArrayToString(data){
        let res='';
        for(let i=0;i<data.length;i++)
          res+= (data[i].nom ) + (i==data.length-1? '' : ', ');
        return res;
      },
      fromArray3ToString(data){
        let res='';
        for(let i=0;i<data.length;i++)
          res+= (data[i][0].toString() + (i==data.length-1? '' : ', '));
        return res;
      }
    },
    computed : {
      getCommande(){
        console.log("refresh");
        let tmp = this.$store.getters.commande;
        return tmp;
      }
    }
}
</script>
<style>
.centreMoiSaY{
   height : 100%;
   width: 100%;
   position: absolute;
   margin-top: 25%;
   text-align: center;
}
</style>