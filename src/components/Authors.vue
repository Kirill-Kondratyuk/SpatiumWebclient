<template>
    <div id="authors">
        <b-jumbotron header="Spatium" lead="AR приложение Spatium" bg-variant="dark" text-variant="light">
            <p>Данное приложение разработали студенты 3 курса Карпинский Андрей и Кондратюк Кирилл.
            </p>
            <b-button variant="primary" href="#"><router-link to="/">На главную</router-link></b-button>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {

    }
</script>


<style scoped>
    #authors{
        width: 80%;
        margin: 20px auto 0;
    }
    a {
        text-decoration: none;
        color: #e8e8e8;
    }
    a:hover{
        text-decoration: none;
        color: #e8e8e8;
    }
</style>