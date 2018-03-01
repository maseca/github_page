<template>
    <div>
        Hello <span class="pronoun">{{username}}</span>!
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  props: ['username']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pronoun {
        color: orangered;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    input {
        background: #000;
        color: orangered;
    }
</style>
