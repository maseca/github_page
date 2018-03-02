<template>
    <div class="text">
        <div>
            Early in the 21st Century, <span>THE TYRELL CORPORATION</span> advanced robot evolution into the
            <span>NEXUS</span> phase - a being virtually identical to a human - known as a Replicant. The
            <span>NEXUS 6</span> Replicants were superior in strength and agility, and at least equal in intelligence,
            to the genetic engineers who created them. Replicants were used Off-World as slave labor, in the hazardous
            exploration and colonization of other planets. After a bloody mutiny by a <span>NEXUS 6</span> combat team
            in an Off-World colony, Replicants were declared illegal on earth - under penalty of death. Special police
            squads - <span>BLADE RUNNER UNITS</span> - had orders to shoot to kill, upon detection, any trespassing
            Replicant This was not called execution. It was called retirement.
        </div>
        <br/>
        <div>
            Hello <span>{{username}}</span>, welcome to my website!
        </div>
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

<style>
    body {
        background-image: url('../assets/bladerunner-full.png');
    }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span{
        color: orangered;
    }
    .text {
        color: aliceblue;
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
</style>
