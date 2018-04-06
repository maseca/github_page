<template>
    <div class="columns is-mobile">
        <card :info="this.deck[13]"></card>
        <card :info="this.deck[0]"></card>
        <card :info="this.deck[26]"></card>
        <card :info="this.deck[39]"></card>
        <card :info="this.deck[17]"></card>
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
                'card'
            ])
        }
    }
</script>
