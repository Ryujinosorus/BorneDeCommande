<template>
    <div>
        <div id="font-picker-OUT" style="display : none"></div>
        <div id="font-picker-IN" style="display : none"></div>
        <v-container fluid>
            <v-row class="full">
                <div class="leftSide" :style="{backgroundColor : settings.icon.iconOUT.bgColor}" @click="changeWhere('OUT')">
                    <div class="pictureLeft">
                        <v-img :src="settings.icon.iconOUT.url"></v-img>
                    </div>
                    <p class="text apply-font-OUT" :style="{ fontSize: settings.icon.iconOUT.fontSize + 'px',
                                                color : settings.icon.iconOUT.fontColor,
                                                marginTop : settings.icon.iconOUT.marginTop +'px'
                     }">
                        {{settings.icon.iconOUT.text}}
                    </p>
                </div>
                <div class="rightSide" :style="{backgroundColor : settings.icon.iconIN.bgColor}" @click="changeWhere('IN')">
                    <div class="pictureLeft">
                        <v-img :src="settings.icon.iconIN.url"></v-img>
                        </div>
                    <p class="text apply-font-IN" :style="{ fontSize : settings.icon.iconIN.fontSize +'px',
                                            color : settings.icon.iconIN.fontColor,
                                            marginTop : settings.icon.iconIN.marginTop +'px'
                    }">
                        {{settings.icon.iconIN.text}}
                    </p>
                </div>
            </v-row>
            <p>{{settings.icon}}</p>
        </v-container>
    </div>      
</template>
    
<script>
export default {
    name:'Where',
    props : ['settings'],
    methods : {
        changeWhere : function(wh){
            this.$store.commit('SET_WHERE',wh);
            this.$router.replace('/desorganise');
        }
    },
    mounted(){
    }
};
</script>  
<style scoped>
*{
    margin: 0;
    padding: 0;
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
    background-size: cover; /* Resize the background image to cover the entire container */
}
.text{
    text-align: center;
}
</style>