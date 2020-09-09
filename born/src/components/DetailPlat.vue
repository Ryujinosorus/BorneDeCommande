<template>
    <div>
        <h2 class="apply-font-commandeTitle" :style="{
          fontSize : settings.list.recap.commandeTitleSize +'px',
          color : settings.list.recap.commandeTitleColor,
        }">
        {{data.nom}}</h2>
    <div v-for="(content,index) in data.content" :key="index">
    <div>
        <h1>{{content.nom}}</h1>
        <p class="apply-font-commandeDetail" :style="{
        fontSize : settings.list.recap.commandeDetailSize +'px',
        color : settings.list.recap.commandeDetailColor,
    }">  {{content.selected.length == 0 ? "Pas de "+ content.nom : fromArrayToString(content.selected) }}</p>
    </div>
    </div>
    <div v-for="otherCustom in data.otherCustom" :key="otherCustom.nom">
        <app-detailPlat :data="otherCustom" :settings="settings"></app-detailPlat>
    </div>
    </div>
</template>

<script>
export default {
    props : ['data','settings'],
    methods : {
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
    }
}
</script>

<style>

</style>