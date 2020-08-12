<template>
  <div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            allFonts : null
        }
    },
    methods: {

    },
    created(){
        this.allFonts = this.$store.getters.font;
        console.log(this.allFonts);
    }
}
</script>

<style>

</style>