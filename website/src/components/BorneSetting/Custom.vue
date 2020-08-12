<template>
  <table>
      <tbody>
          <tr>
              <td>Couleur de fond</td>
              <td>
                <v-color-picker
                mode="hexa"
                hide-mode-switch
                @update:color="changeBackgroundColor"
                :value="borne.custom.backgroundColor"
                class="ma-2"
                ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Slide transition</td>
              <td >
                <v-overflow-btn 
                v-model="borne.custom.transition"
                :items="dropdown_transition" 
                filled
                    >
                    
                </v-overflow-btn>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    props : ['borne','globalSettings'],
    data(){
        return{
            dropdown_transition : [
                'fab',
                'fade',
                'expand',
                'scale',
                'scroll-x',
                'scroll-x-reverse',
                'scroll-y',
                'scroll-y-reverse'
            ]
        }
    },
    methods:{
        changeBackgroundColor(e){
            this.borne.custom.backgroundColor = e.hexa;
        }
    }
}
</script>

<style>

</style>