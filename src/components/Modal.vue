<template>
    <div :class="'modal'+active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box bg-hack">
                <slot></slot>
            </div>
        </div>
        <button @click="active=''" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        data () {
            return {
                active: ' is-active',
            }
        }
    }
</script>

<style scoped>
    .bg-hack {
        background: black;
    }
</style>
