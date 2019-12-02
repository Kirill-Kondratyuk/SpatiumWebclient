<template>
    <div id="description">
        <b-jumbotron header="Spatium" lead="AR приложение Spatium" bg-variant="dark" text-variant="light">
            <p>Приложение Spatium является приложением дополненной реальности. Оно позволяет рассматривать 3d модели
                планет солнечной системы. Для того чтобы появилась модель, необходимо навести камеру на карточку с изображением
                планеты, которую вы хотите увидеть. Данный сайт является дополнением к приложению, которое содержит в себе информацию
                о планетах солнечной системы. Чтобы прочитать информацию о планете, нажмите кнопку "Перейти к планетам" и выберите нужную,
                кликнув один раз по карточке с планетой.
            </p>
            <b-button variant="primary" href="#"><router-link to="/planets">Перейти к планетам</router-link></b-button>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        }
    }
</script>

<style scoped>
 #description{
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