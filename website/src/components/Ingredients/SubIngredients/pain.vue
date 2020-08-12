<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { pain } from '../../../Data/pain.js';
    export default {
        name: 'pain',
        data() {
            return {
                title: 'pains',
                localData: pain
            }
        }
    }
</script>

<style>
</style>
