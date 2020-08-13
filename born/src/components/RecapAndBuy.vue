<template>
    <div class="full" :style="{backgroundColor: settings.valid.backgroundColor}">
        <v-card :height="settings.valid.recap.hauteur" :width="settings.valid.recap.largeur" :style="{
                                                                                                        border : settings.valid.recap.borderSize + 'px solid ' + settings.valid.recap.borderColor,
                                                                                                        margin : 'auto 50px 0 auto'
        }">
        </v-card>
        <div>
            <h1 :style="{
                fontSize : settings.valid.fontSize + 'px',
                textAlign : 'center',
                color : settings.valid.fontColor,
                marginTop : settings.valid.marginT + 'px'
            }"
            class="apply-font-textFont"
            > {{settings.valid.text}} </h1>
        </div>

        <div class="btn-1">

        </div>
        <div class="btn-2">
        </div>
        <div>
            <div id="font-picker-textFont"></div>
        </div>
    </div>
    
</template>

<script>
import FontPicker from 'font-picker'
export default {
    props : ['settings'],
    mounted(){
        new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.valid.font,
      {
        pickerId: "textFont",
        limit: 150,
      }
    );
    }
}
</script>

<style>
.full{
    min-height: 100vh;
    width: 100%;
}
.list {
    height: 800px;
    width: 750px;
    margin: 0 auto;
    position: relative;
    background-color: blue;
}
.btn-1{
    height: 200px;
    width: 500px;
    background-color: cyan;
    margin-top: 25px;
    margin-left: 500px;
    float: left;
}
.btn-2{
    height: 200px;
    width: 500px;
    background-color: cyan;
    margin-top: 25px;
    margin-right: 500px;
    float: right;
}
.title{
    text-align: center;
}
.textDiv{
    margin: 0 25px;
    background-color: burlywood;
}
</style>