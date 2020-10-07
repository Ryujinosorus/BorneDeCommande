<template>
    <div style="z-index : 100;background-color : white;">
      <app-menuCustomBorn name="app-customWhere" @REFRESH="refresh()"></app-menuCustomBorn>
            <h1 class="iconTitle apply-font-iconTitlleFont" :style="{fontSize : settings.icon.titleWhere.fontSize + 'px',
                                                                    color : '#'+settings.icon.titleWhere.fontColor,
                                                                    marginTop : settings.icon.titleWhere.marginTop + 'px' }">AAA</h1>
            <v-row>
                <div class="leftSide" :style="{backgroundColor : settings.icon.iconOUT.bgColor}" @click="changeWhere('OUT')">
                    <div class="pictureLeft" :style="{marginTop :  parseInt(settings.icon.titleWhere.marginTop)  + parseInt(settings.icon.iconOUT.marginTop) + 'px'}">
                        <v-img :src="settings.icon.iconOUT.url"></v-img>
                    </div>
                    <p v-if="settings.icon.iconOUT.withText" class="text apply-font-fontOUT" :style="{ fontSize: settings.icon.iconOUT.fontSize + 'px',
                                                color : settings.icon.iconOUT.fontColor,
                                                marginTop : settings.icon.iconOUT.marginTop +'px'
                     }">
                        {{settings.icon.iconOUT.text}}
                    </p>
                </div>
                <div class="rightSidee" :style="{backgroundColor : settings.icon.iconIN.bgColor}" @click="changeWhere('IN')">
                    <div class="pictureLeft" :style="{marginTop : parseInt(settings.icon.titleWhere.marginTop)  + parseInt(settings.icon.iconIN.marginTop) + 'px'}">
                        <v-img :src="settings.icon.iconIN.url"></v-img>
                        </div>
                    <p v-if="settings.icon.iconIN.withText" class="text apply-font-fontIN" :style="{ fontSize : settings.icon.iconIN.fontSize +'px',
                                            color : settings.icon.iconIN.fontColor,
                                            marginTop : settings.icon.iconIN.marginTop +'px'
                    }">
                        {{settings.icon.iconIN.text}}
                    </p>
                </div>
            </v-row>
    </div>      
</template>
    
<script>
export default {
    name:'Where',
    data(){
      return{
        settings : null
      }
    },
    methods : {
        changeWhere : function(wh){
            this.$store.commit('SET_WHERE',wh);
            this.$router.replace('/desorganise');
        }
    },
    created(){
      this.settings = this.$store.getters.bornesettings;
    }
};
</script>  
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.iconTitle{
    width: 100%;
    text-align: center;
    position: absolute;
}
.leftSide{
    width: 50%;
    height: 100vh;
}
.rightSidee{
width: 50%;
}
.pictureLeft{
    margin: 10% 10% 0% 10%;
    width: 80%;
    background-position: center center;
    background-size: cover;
}
.text{
    text-align: center;
}
</style>