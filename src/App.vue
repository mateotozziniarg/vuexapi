<template>
  <div id="app">
    <div id="nav">
      <b-navbar fixed-top shadow	>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                <img
                    src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo2.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>World Is Talking</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    </div>
    <router-view/>
    <div id='footer'>
      Developed by SYSMAC
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
