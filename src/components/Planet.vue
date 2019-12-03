<template>
    <div id="planet">
        <b-card :img-src="require(`../assets/${this.planet.img}`)" :title="this.planet.name" img-height="300">
            <b-card-text>{{this.planet.stats}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
    import json from "../info/planets_info"
    export default {
        data: function () {
            return {
                planet: ''
            }
        },
        mounted() {
            for (let key in json) {
                if (json.hasOwnProperty(key)) {
                    if(json[key].name === this.$route.params.name){
                        this.planet = json[key]
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #planet{
        width: 100%;
        margin: 10px auto 0;
        font-size: 16px;
    }
</style>