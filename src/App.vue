<template>
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <div id="app">
    <div class="bg-img">
        <router-view/>
    </div>
  </div>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Mono, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bg-img{
  background-size:  cover;
  background: #000 url('./assets/bladerunner-full.png') no-repeat fixed center center;
}

body{
    background-image: url('./assets/bladerunner-full.png');
}
</style>
