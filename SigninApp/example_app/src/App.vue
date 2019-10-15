<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
  @import "../node_modules/purecss/build/pure.css";
  @import "../node_modules/purecss/build/forms.css";
  @import "../node_modules/purecss/build/grids-responsive-min.css";
  @import "../node_modules/purecss/build/buttons.css";
  @import "../src/assets/styles.css";
</style>

<template>
    <div id="app">
        <div id="header-banner">
        <div id="header-banner-slot">            
            <router-link v-show="authenticated" to="/home" replace class="home" active-class = "_active">Home</router-link>
            <router-link v-show="authenticated" to="#" replace class="home" active-class = "_active">Dashboard</router-link>
            <router-link v-show="!authenticated" to="/#" v-on:click.native="" replace>Contact Us</router-link>
            <router-link v-show="!authenticated" to="#" v-on:click.native="" replace>Help</router-link>
            <router-link v-if="authenticated" to="/report" replace active-class = "_active">Cs report</router-link>
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            <!--<img v-if="authenticated" src="../src/assets/logo.jpg" alt="Icon" style="float:left; padding-bottom:4px;"/>!-->
            </div>
        </div>
        <router-view @authenticated="setAuthenticated" />
</div>
    
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "admin"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" }).catch(err => {});
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>