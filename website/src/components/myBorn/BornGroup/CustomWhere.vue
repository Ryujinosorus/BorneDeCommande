<template>
    <div>
      <h1>Sur place ou a emporter ?</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>A emporter</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsEmporter :borne="borne" :globalSettings="globalSettings"></app-whereSettingsEmporter>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Sur Place</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsSurPlace :borne="borne" :globalSettings="globalSettings"></app-whereSettingsSurPlace>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Where title</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsTitle :borne="borne" :globalSettings="globalSettings"></app-whereSettingsTitle>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
</template>

<script>
export default {
    props : ['borne','globalSettings'],
    methods:{
        refresh(){
            this.$emit("REFRESH");
        }
    }
}
</script>

<style>

</style>