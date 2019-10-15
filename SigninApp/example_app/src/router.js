import Vue from "vue";
import Router from "vue-router";
import LoginComponent from "../src/views/Login.vue";
import Home from "../src/views/Home.vue";
import Report from "../src/views/CSReport.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/report",
            name: "report",
            component: Report
        }
    ]
})