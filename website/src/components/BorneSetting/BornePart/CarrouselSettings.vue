<template>
  <div>
    <table v-if="resetPicture" @click="changeOpacity">
      <thead>
        <tr>
          <th>Instruction</th>
          <th>Valeur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nombre diaporana</td>
          <td>
            <v-text-field
              type="number"
              :value="borne.firstPage.nbDiapo"
              min="1"
              max="10"
              v-model="borne.firstPage.nbDiapo"
            ></v-text-field>
          </td>
        </tr>
        <tr v-for="index in range(borne.firstPage.nbDiapo)" :key="index">
          <td>Image {{index+1}}</td>
          <td>
            <v-img class="reSize" :src="borne.firstPage.picture[index]"></v-img>
            <v-file-input
              @change="changePicture"
              @click="tmpIndex = index"
              label="Changer cette image ?"
            ></v-file-input>
          </td>
        </tr>
        <tr>
          <td>Couleur paneaux</td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              v-model="borne.firstPage.panelColor"
              class="ma-2"
            ></v-color-picker>
          </td>
        </tr>
        <tr>
          <td>Couleur ecriture</td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              v-model="borne.firstPage.fontColor"
              class="ma-2"
            ></v-color-picker>
          </td>
        </tr>
        <tr>
          <td>Taille ecriture</td>
          <td>
            <v-slider
              v-model="borne.firstPage.fontSize"
              class="align-center"
              max="100"
              min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.firstPage.fontSize"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
        </tr>
        <tr>
          <td>Interval du carrousel</td>
          <td>
            <v-text-field  @change="emitrefresh" type="number" v-model="borne.firstPage.interval" step="0.1" min="2"></v-text-field>
          </td>
        </tr>
        <tr>
          <td>Font</td>
          <td>
            <div id="font-picker-diapoFont"></div>
          </td>
        </tr>
        <tr>
          <td>Text carrousel</td>
          <td>
            <v-text-field v-model="borne.firstPage.text" counter="20" class="apply-font-diapoFont"></v-text-field>
          </td>
        </tr>
        <tr>
          <td>Hauteur bande en %</td>
          <td>
            <v-slider
              v-model="borne.firstPage.panelHeight"
              class="align-center"
              max="100"
              min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.firstPage.panelHeight"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  step="0.1"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
        </tr>
        <tr>
          <td>Margin en px</td>
          <td>
            <v-slider
              v-model="borne.firstPage.marginTop"
              class="align-center"
              :max="5000"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.firstPage.marginTop"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FontPicker from "font-picker";

export default {
  name: "firstPage",
  props: ["borne", "globalSettings", "tmpPicture"],
  data() {
    return {
      tmpIndex: "null",
      resetPicture : true,
    };
  },
  methods: {
    changePicture(e) {
      console.log(this.tmpIndex);
      console.log(e);
      this.borne.firstPage.picture[this.tmpIndex] = URL.createObjectURL(new Blob([e], { type: "image/bmp" }));
      this.resetPicture = false;
      this.resetPicture = true;
      this.emitrefresh();
    },
    range(e){
      let res=[];
      for(let i=0;i<e;i++)
        res.push(i);
      return res;
    },
    emitrefresh(){
      this.$emit("REFRESH");
    },
    changeOpacity(){
      this.$emit("changeOpacity");
    }
  },
  created() {
    console.log("CREATED");
    console.log(this.tmpPicture);
    this.$on("savePicture", () => console.log("save moi sa"));
  },
  mounted: function () {
    let tmp = new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.borne.firstPage.font,
      {
        pickerId: "diapoFont",
        limit: this.globalSettings.nbFont,
      }
    );
    tmp.setOnChange((font) => (this.borne.firstPage.font = font.family));
  },
};
</script>

<style>
.reSize{
  width : 45%;
}
</style>