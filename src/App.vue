<template>
    <div id="app">
        <Navbar/>
        <router-view></router-view>
      <div style="width: 100%">
        <b-jumbotron bg-variant="dark" text-variant="light" style="margin-bottom: 0; margin-top: 40px" fluid size="">
          <p style="text-align: center">Spatium AR application</p>
        </b-jumbotron>
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
</style>
