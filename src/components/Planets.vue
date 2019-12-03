<template>
    <div id="planets">
        <div class="planet">
            <b-card @click="getInfo(planet)" v-for="planet in planets" :key="planet.name" :header="planet.name"
                    :img-src="require(`../assets/${planet.img}`)" bg-variant="dark" text-variant="light"
                    style="width: 70%" align="center" img-bottom height="3" width="3"
                    class="planet-card" no-body>

            </b-card>
        </div>
    </div>
</template>

<script>
    import json from "../info/planets_info";

    export default {
        data: function () {
            return {
                planets: json,
            }
        },
        methods: {
            getInfo: function (planet) {
                let name = planet.name;
                this.$router.push({name: "planet", params: {name: name}})
            }
        }
    }
</script>


<style scoped>
    .planet-card {
        margin: 15px auto 5px;
    }
    .planet-card:hover{
        cursor: pointer;
    }

    img {
        height: 50%;
    }
</style>