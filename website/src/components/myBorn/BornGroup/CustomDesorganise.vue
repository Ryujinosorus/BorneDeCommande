<template>
<div>
      <h1>Liste des categories</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>Liste des categories</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-listSettings :borne="borne" :globalSettings="globalSettings"></app-listSettings>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
</div>
</template>

<script>
export default {
    props : ['borne','globalSettings']

}
</script>

<style>

</style>