<template>
    <div>
        <div id="font-picker-OUT" style="display : none"></div>
        <div id="font-picker-IN" style="display : none"></div>
        <v-container fluid>
            <v-row class="full">
                <div class="leftSide" :style="{backgroundColor : settings.icon.iconOUT.bgColor}">
                    <div class="pictureLeft" :style="{ backgroundImage: 'url(' + settings.icon.iconOUT.url + '.png)' }">
                    </div>
                    <p class="text apply-font-OUT" :style="{ fontSize: settings.icon.iconOUT.fontSize + 'px',
                                                color : settings.icon.iconOUT.fontColor,
                                                marginTop : settings.icon.iconOUT.marginTop +'px'
                     }">
                        {{settings.icon.iconOUT.text}}
                    </p>
                </div>
                <div class="rightSide" :style="{backgroundColor : settings.icon.iconIN.bgColor}">
                    <div class="pictureLeft" :style="{ backgroundImage: 'url(' + settings.icon.iconIN.url + '.png)' }">
                        </div>
                    <p class="text apply-font-IN" :style="{ fontSize : settings.icon.iconIN.fontSize +'px',
                                            color : settings.icon.iconIN.fontColor,
                                            marginTop : settings.icon.iconIN.marginTop +'px'
                    }">
                        {{settings.icon.iconIN.text}}
                    </p>
                </div>
            </v-row>
        </v-container>
    </div>      
</template>
    
<script>
import FontPicker from "font-picker";
export default {
    name:'Where',
    props : ['settings'],
    data(){
        return{
            fontOUT:null,
            fontIN:null
        }
    },
    mounted(){
        this.fontOUT = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.settings.icon.iconOUT.font, 
            { 
                pickerId : 'OUT',
                limit: 150 
            },
        );
        this.fontIN = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.settings.icon.iconIN.font, 
            { 
                pickerId : 'IN',
                limit: 150 
            },
        );
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