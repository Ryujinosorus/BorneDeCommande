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
      <h1 class="apply-font-title" :style="{
        textAlign :'center',
        fontSize : settings.list.recap.fontSizeTitle +'px',
        color : settings.list.recap.colorTitle,
      }">{{settings.list.recap.text}}</h1>
    </div>

    <!-- DETAIL COMMANDE -->
      <div style="overflow-y: scroll;" :style="{
        backgroundColor : settings.list.recap.backgroundColorRecap,
        height : '80%'
        }">
        <div :style="{
          borderBottom : settings.list.recap.borderCommandeSize +'px solid ' + settings.list.recap.borderCommandeColor,
        }">
          <h2 class="apply-font-commandeTitle" :style="{
          fontSize : settings.list.recap.commandeTitleSize +'px',
          color : settings.list.recap.commandeTitleColor,
        }">
        Burger XXL</h2>
          <p class="apply-font-commandeDetail" :style="{
          fontSize : settings.list.recap.commandeDetailSize +'px',
          color : settings.list.recap.commandeDetailColor,
        }">Accompagnements : frite</p>
          <p class="apply-font-commandePrix" :style="{
          fontSize : settings.list.recap.commandePrixlSize +'px',
          color : settings.list.recap.commandePrixColor,
        }"> Prix : 6.50 </p>
        </div>
      </div>
      <div :style="{
        height : '12.8vh', 
        backgroundColor : settings.list.recap.backgroundColorBouttonCommander,
        color : settings.list.recap.fontColorBouttonCommander,
        fontSize : settings.list.recap.fontSizeBouttonCommander + 'px'
        }">
        <p class="apply-font-commandeBoutton center">{{settings.list.recap.textBouttonCommander}} </p>
      </div>
    </div>
</div>
</template>
<script>
export default {
    props:['settings']
}
</script>