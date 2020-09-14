<template>
    <div>
        <div>
            <h1 :style="{fontSize : settings.custom.nomPlat.fontSize + 'px',
                        color : settings.custom.nomPlat.fontColor,
                        marginTop : settings.custom.nomPlat.marginT + 'px',
                        marginLeft : settings.custom.nomPlat.marginL + 'px',
            }">{{selectable.nom}}</h1>
        </div>
        <div v-for="(content) in selectable.content" :key="content.nom">
        <h1  v-if="reRenderText" class="apply-font-nomPlatFont" :style="{
            color : settings.custom.nomDetail.fontColor,
            marginTop : settings.custom.nomDetail.marginT + 'px',
            marginLeft : settings.custom.nomDetail.marginL + 'px',
            fontSize : settings.custom.nomDetail.fontSize + 'px'
            }">{{content.nom }} {{content.nbSelection !=-1 ? ' : ' + getNbSelected(content)+' / ' + content.nbSelection  : ''}}</h1>
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
                @click="addDetail(detail,content)"
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
            reRenderText : true,
            model: []
        }
    },
    methods : {
        addDetail(detail,content){
            console.log(content.nbSelection);
            if(content.nbSelection =='-1'){
                detail.selected = ! detail.selected;
                this.reRenderCheckBox = false;
                this.reRenderCheckBox = true;
            }
            else {
                let nbSelected = this.getNbSelected(content);
                if(nbSelected == content.nbSelection && !detail.selected)
                    return;
                detail.selected = ! detail.selected;
                this.reRenderCheckBox = false;
                this.reRenderCheckBox = true;

            }
        },
        getNbSelected(content){
            let nbSelected = 0;
            for(let i=0;i<content.data.length;i++)
                if(content.data[i].selected)
                    nbSelected ++
            return nbSelected;
        }
    }
}
</script>

<style>

</style>