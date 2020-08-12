<template>
  <div>
    <table>
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
              :min="globalSettings.diapo.min"
              :max="globalSettings.diapo.max"
              @chane="getAllIndex"
              v-model="borne.firstPage.nbDiapo"
            ></v-text-field>
          </td>
        </tr>
        <tr v-for="(item,index) in getAllIndex" :key="item + index">
          <td>Image {{index+1}}</td>
          <td>
            <v-img :src="item"></v-img>
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
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
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
            <v-text-field type="number" v-model="borne.firstPage.interval" step="0.1" min="2"></v-text-field>
          </td>
        </tr>
        <tr>
          <td>Font</td>
          <td>
            <div id="font-picker-carousel"></div>
          </td>
        </tr>
        <tr>
          <td>Text carrousel</td>
          <td>
            <v-text-field v-model="borne.firstPage.text" counter="20" class="apply-font-carousel"></v-text-field>
          </td>
        </tr>
        <tr>
          <td>Hauteur bande en %</td>
          <td>
            <v-slider
              v-model="borne.firstPage.panelHeight"
              class="align-center"
              :max="globalSettings.panelHeight.max"
              :min="globalSettings.panelHeight.min"
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
              :max="globalSettings.paddingTop.max"
              :min="globalSettings.paddingTop.min"
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
    };
  },
  methods: {
    changePicture(e) {
      this.$emit("changePicture", [e, this.tmpIndex]);
      this.getAllIndex;
      this.borne.firstPage.nbDiapo++;
      this.borne.firstPage.nbDiapo--;
    },
  },
  computed: {
    getAllIndex() {
      let res = [];
      for (let x = 0; x < this.borne.firstPage.nbDiapo; x++)
        res.push(this.tmpPicture[x]);
      return res;
    },
  },
  created() {
    console.log(this.tmpPicture);
    this.$on("savePicture", () => console.log("save moi sa"));
  },
  mounted: function () {
    let tmp = new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.borne.firstPage.font,
      {
        pickerId: "carousel",
        limit: this.globalSettings.nbFont,
      }
    );
    tmp.setOnChange((font) => (this.borne.firstPage.font = font.family));
  },
};
</script>

<style>
</style>