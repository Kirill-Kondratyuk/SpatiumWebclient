<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Spatium</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/planets">
                            Планеты
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/description">
                            Для пользователя
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/authors">
                            Авторы
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>


<style scoped>
    a {
        text-decoration: none;
        color: #8d8d8d;
    }
    a:hover{
        text-decoration: none;
        color: #7a7a7a;
    }

</style>