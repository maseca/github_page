<template>
    <div>
        <card :info="this.card"></card>
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
