<template>
    <div id="app">
        <div id="content-wrap">
            <Navbar/>
            <router-view></router-view>
        </div>

        <div style="width: 100%; margin-bottom: 0">
            <b-row class="footer" bg-variant="dark" text-variant="light" fluid size="md">
                <p style="text-align: center; width: 100%">Spatium AR application</p>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: 'app',
        components: {
            Navbar
        }
    }
</script>

<style>
    body {
        background-color: #a2a2a2;
    }

    .footer {
        position: absolute;
        bottom: 0;
        padding-top: 1rem;
        width: 100%;
        margin-bottom: 0 !important;
        background-color: #343a40;
        color: #f8f9fa !important;
        height: 4rem;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    #app {
        position: relative;
        min-height: 100vh;
    }
    #content-wrap {
        padding-bottom: 5rem;    /* Footer height */
    }
</style>
