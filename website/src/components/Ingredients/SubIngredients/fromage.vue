<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { fromage } from '../../../Data/fromage.js';
    export default {
        name: 'pain',
        data() {
            return {
                title: 'fromages',
                localData: fromage
            }
        }
    }
</script>

<style>
</style>
