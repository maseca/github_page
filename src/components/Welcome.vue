<template>
    <div>
        <h1>&alpha; !!! W&epsilon;LC&Omega;M&epsilon; &tau;&Omega; Y&Omega;UR D&Omega;&Omega;M !!! &Omega;</h1>
        <form @submit.prevent>
            <label>
                Enter thy Name...
                <br/>
                <input class="input" type="text" :value="username" @input="updateUserName"/>
            </label>
        </form>
        <router-link to="home">Start This Wild Ride.</router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Welcome',

        computed: {
            ...mapState({
                username: state => state.username
            })
        },

        methods: {
            updateUserName (e) {
                this.$store.dispatch('changeName', e.target.value)
            }
        }
    }
</script>

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
        width: 25vw;
        background: #000;
        color: orangered;
        border-color: #2c3e50;
    }
</style>
