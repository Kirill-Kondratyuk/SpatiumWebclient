<template>
    <div id="home">
        <div>
            <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
            >
                <b-carousel-slide
                        :img-src="require('../assets/Earth.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        :img-src="require('../assets/Jupiter.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        :img-src="require('../assets/Mars.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        :img-src="require('../assets/Mercury.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Moon.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Neptune.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Saturn.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Sun.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Uranus.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                        img-height=""
                        :img-src="require('../assets/Venus.jpg')"
                ></b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>


<style scoped>
 #home{
     width: 50%;
     margin: 40px auto 0;
 }
</style>