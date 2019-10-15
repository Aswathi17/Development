<template>
    <div class="wrapper">
  <div id="formContent">
    <!-- Tabs Titles -->
    <h2 class="active"> Sign In </h2>
    <h2 class="inactive underlineHover">Sign Up </h2>

    <!-- Icon -->
    <div class="">
      <img src="../assets/logo.jpg" id="icon" alt="Icon" />
    </div>

    <!-- Login Form -->
    <form class="pure-form"> 
      <input type="text" id="login" class="" name="username" v-model="input.username" placeholder="User Name">
      <input type="password" id="password" class="" name="login" v-model="input.password" placeholder="Password">
      <input type="button" class="pure-button pure-button-primary" v-on:click="login()" value="SIGN IN" >
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
</div>
</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" }).catch(err => {});
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>