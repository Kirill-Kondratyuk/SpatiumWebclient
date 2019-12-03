<template>
    <div id="app">
        <Navbar/>
        <router-view></router-view>
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
    .footer{
        padding-top: 1rem;
        margin-top: 40px;
        margin-bottom: 0 !important;
        background-color: #343a40;
        color: #f8f9fa !important;
    }
</style>
