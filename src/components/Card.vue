<template>
    <div class="column ">
        <div class="box" :style="'font-size:7vw;height:25vw;'+color" @click="toggleHeld">
            <div style="font-size:5vw">{{this.hand[this.index].held ? "HELD" : ""}}</div>
            {{this.hand[this.index].value}}{{suit}}
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'Card',
        props: ['index'],
        computed: {
            ...mapGetters([
                'hand'
            ]),

            suit () {
                switch(this.hand[this.index].suit){
                    case 'C':
                        return "\u2663";
                    case 'D':
                        return '\u2666';
                    case 'H':
                        return '\u2665';
                    case 'S':
                        return '\u2660';
                }
            },

            color () {
                switch(this.hand[this.index].suit){
                    case 'C':
                    case 'S':
                        return "color:black";
                    case 'D':
                    case 'H':
                        return "color:red"
                }
            }
        },

        methods: {
            toggleHeld () {
                this.$store.dispatch('toggleHeld', this.index);
            }
        }
    }
</script>

<style scoped>
    .box {
        margin: 0
    }
</style>
