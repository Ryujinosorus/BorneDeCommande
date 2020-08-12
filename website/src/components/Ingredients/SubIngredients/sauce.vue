<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { sauce } from '../../../Data/sauce.js';
    export default {
        name: 'sauce',
        data() {
            return {
                title: 'sauces',
                localData: sauce
            }
        }
    }
</script>

<style>
</style>
