<template>
    <div class="bg-img">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <div id="app"><router-view/></div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style scoped>
    #app {
        font-family: Mono, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 60px;
        position: relative;
        min-height: 100vh;
    }

    .bg-img{
        background-size:  cover;
        background: #000 url('./assets/bladerunner-full.png') no-repeat fixed center center;
    }
</style>
