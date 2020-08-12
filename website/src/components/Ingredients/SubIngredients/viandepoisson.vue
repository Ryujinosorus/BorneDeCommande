<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { viandepoisson } from '../../../Data/viandepoisson.js';
    export default {
        name: 'viandepoisson',
        data() {
            return {
                title: 'viandes et poissons',
                localData: viandepoisson
            }
        }
    }
</script>

<style>
</style>
