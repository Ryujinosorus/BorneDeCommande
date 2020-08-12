<template>
    <div>
        <app-checklist :allData="localData" :parentName="title"></app-checklist>

    </div>
</template>

<script>
    import { extra } from '../../../Data/extra.js';
    export default {
        name: 'extra',
        data() {
            return {
                title: 'extras',
                localData: extra
            }
        }
    }
</script>

<style>
</style>
