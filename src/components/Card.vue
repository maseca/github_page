<template>
    <div class="column ">
        <div class="box" :style="'font-size:7vw;height:25vw;'+color" @click="toggleHeld">
            <div style="font-size: 5vw">{{this.held ? "HELD" : ""}}</div>
            {{this.info.charAt(0)}}{{suit}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        data: function () {
            return {
                held: false,
            }
        },
        props: ['info'],
        computed: {
            suit () {
                switch(this.info.charAt(1)){
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
                switch(this.info.charAt(1)){
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
                this.held = !this.held;
            }
        }
    }
</script>

<style scoped>
    .box {
        margin: 0
    }
</style>
