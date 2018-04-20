<template>
    <div>
        <div class="columns is-mobile">
            <card :index="0"></card>
            <card :index="1"></card>
            <card :index="2"></card>
            <card :index="3"></card>
            <card :index="4"></card>
        </div>
        <button @click="dealCards">DEAL</button>
    </div>
</template>

<script>
    import Card from './Card'
    import { mapGetters } from 'vuex'
    export default {
        name: 'PokerRoom',

        components: {
            Card
        },

        computed: {
            ...mapGetters([
                'deck',
                'hand'
            ])
        },

        methods: {
            dealCards: function () {
                this.$store.dispatch('dealHand');
            }
        },
    }
</script>
