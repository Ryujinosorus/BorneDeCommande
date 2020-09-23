<template>
    <div>
        <h2 class="apply-font-commandeTitle" :style="{
          fontSize : settings.list.recap.commandeTitleSize +'px',
          color : settings.list.recap.commandeTitleColor,
        }">
        {{data.nom}}</h2>
    <div v-for="(content,index) in data.content" :key="index">
    <div>
        <h1 class="apply-font-nomCate" :style="{
            fontSize : settings.list.recap.nomCateTitleSize + 'px',
            color : settings.list.recap.nomCateColor
            }">{{content.nom}}</h1>
        <p class="apply-font-commandeDetail" :style="{
        fontSize : settings.list.recap.commandeDetailSize +'px',
        color : settings.list.recap.commandeDetailColor,
    }">  {{fromArrayToString(content.data) }}</p>
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
            if(data[i].selected)
                res += data[i].nom + ', ';
        if(res =='')
            return 'Rien';
        return res.slice(0,res.length-2);
      },
      
    },
}
</script>

<style>

</style>