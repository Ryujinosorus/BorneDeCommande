<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { legumes } from '../../../Data/legumes.js';
    export default {
        name: 'fromage',
        data() {
            return {
                title: 'legumes',
                localData: legumes
            }
        }
    }
</script>

<style>
</style>
