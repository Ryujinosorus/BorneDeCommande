<template>
<div>
    <h2 class="display-2 font-weight-bold mb-3 text-center"> Carrousel </h2>
    <div> 
        <app-carrouselSettings></app-carrouselSettings>
    </div>
    </div>
</template>
        
<script>
export default {
}
</script>

<style>
table{
    border-collapse: collapse;
    margin-left:auto; 
    margin-right:auto;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);;
}
table thead tr {
    background-color: blue;
    color : #fff;
    text-align: left;
    font-weight: bold;

}
table th,
table td{
    padding: 12px 15px;

}
table tbody tr{
    border-bottom: 1px solid #dddddd;
}
table tbody tr:nth-last-of-type(even){
    background-color: #f3f3f3;
}
table tbody tr:last-of-type{
    border-bottom: 2px solid #009879;
}

</style>