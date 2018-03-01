<template>
    <div>
        <h1>&alpha; !!! W&epsilon;LC&Omega;M&epsilon; &tau;&Omega; Y&Omega;UR D&Omega;&Omega;M !!! &Omega;</h1>
        <form @submit.prevent="handleSubmit">
            <label>
                Enter thy Name...
                <input type="text" v-model="name"/>
            </label>
        </form>
        <router-link to="">Start This Wild Ride.</router-link>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: "Mr. Big Boy"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
