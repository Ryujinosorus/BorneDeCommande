<template>
    <div>
        <div v-for="(content) in selectable.content" :key="content.nom">
        <h1 class="apply-font-nomPlatFont" :style="{
            color : settings.custom.nomPlat.fontColor,
            marginTop : settings.custom.nomPlat.marginT + 'px',
            marginLeft : settings.custom.nomPlat.marginL + 'px',
            fontSize : settings.custom.nomPlat.fontSize + 'px'
            }">{{content.nom}}</h1>
        <!-- CONTENT -->
        <div>
            <!--
            <h3 class="apply-font-nomDetailFont" :style="{
            color : settings.custom.nomDetail.fontColor,
            marginTop : settings.custom.nomDetail.marginT + 'px',
            marginLeft : settings.custom.nomDetail.marginL + 'px',
            fontSize : settings.custom.nomDetail.fontSize + 'px'
            }">Sauce {{content.modifiable.sauce[1].length + '/' + content.maxSauce}}</h3>-->
            <div>
            <v-row>
                <v-card
                v-for="(detail) in content.data"
                @click="addDetail(detail)"
                :key="indexS + ' ' + detail.nom + ' ' + detail.picture"
                :style="{
                height : settings.custom.cardDetail.hauteur + 'px',
                width : settings.custom.cardDetail.largeur + 'px',
                marginLeft:settings.custom.cardDetail.marginL + 'px',
                marginTop:settings.custom.cardDetail.marginT + 'px',
                backgroundColor : 'blue'
                }"
                >
                <v-img
                :src='detail.url'
                    :height="settings.custom.cardDetail.hauteur - 50"
                ></v-img>
                <div>
                    <p
                    class="apply-font-detailTitreFont"
                    :style="{
                    fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                    color : settings.custom.cardDetail.fontColor,
                    float : 'left'
                }"
                    >{{detail.nom}}</p>
                    <p v-if="content.payable">{{detail.price}} </p>
                    <v-checkbox
                    dark
                    readonly
                    v-model="detail.selected"
                    v-if="reRenderCheckBox"
                    :style="{float : 'right',marginTop: '0px'}"
                    ></v-checkbox>
                    <p>{{detail}}</p>
                </div>
                </v-card>
            </v-row>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['selectable','settings'],
    data(){
        return{
            indexS: 0,
            reRenderCheckBox : true,
            allSelectable : null,
            model: []
        }
    },
    methods : {
        addDetail(detail){
            detail.selected =!detail.selected;
            this.reRenderCheckBox = false;
            this.reRenderCheckBox = true;
        }
    }
}
</script>

<style>

</style>