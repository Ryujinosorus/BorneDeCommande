<template>
    <v-container fluid>
        <h1 class="iconTitle apply-font-iconTitlleFont" :style="{fontSize : settings.icon.titleModeDePaiement.fontSize + 'px',
                                                                color : '#'+settings.icon.titleModeDePaiement.fontColor,
                                                                marginTop : settings.icon.titleModeDePaiement.marginTop + 'px' }">AAA</h1>
        <v-row class="full">
            <div class="leftSide" :style="{backgroundColor : settings.icon.iconLiquide.bgColor}">
                <div class="pictureLeft" :style="{marginTop :  parseInt(settings.icon.iconLiquide.marginTop)  + parseInt(settings.icon.iconLiquide.marginTop) + 'px'}">
                    <v-img :src="settings.icon.iconLiquide.url"></v-img>
                </div>
                <p v-if="settings.icon.iconLiquide.withText" class="text apply-font-OUT" :style="{ fontSize: settings.icon.iconLiquide.fontSize + 'px',
                                            color : settings.icon.iconLiquide.fontColor,
                                            marginTop : settings.icon.iconLiquide.marginTop +'px'
                    }">
                    {{settings.icon.iconLiquide.text}}
                </p>
            </div>
            <div class="rightSide" :style="{backgroundColor : settings.icon.iconCB.bgColor}">
                <div class="pictureLeft" :style="{marginTop : parseInt(settings.icon.titleModeDePaiement.marginTop)  + parseInt(settings.icon.iconCB.marginTop) + 'px'}">
                    <v-img :src="settings.icon.iconCB.url"></v-img>
                    </div>
                <p v-if="settings.icon.iconCB.withText" class="text apply-font-IN" :style="{ fontSize : settings.icon.iconCB.fontSize +'px',
                                        color : settings.icon.iconCB.fontColor,
                                        marginTop : settings.icon.iconCB.marginTop +'px'
                }">
                    {{settings.icon.iconCB.text}}
                </p>
            </div>
        </v-row>
    </v-container> 
</template>
    
<script>
export default {
    props : ['settings'],
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
.rightSide{
width: 50%;
}
.pictureLeft{
    margin: 10% 10% 0% 10%;
    height: 70%;
    width: 80%;
    background-position: center center;
    background-size: cover;
}
.text{
    text-align: center;
}
</style>