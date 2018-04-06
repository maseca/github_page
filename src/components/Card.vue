<template>
    <div>
        I am {{this.info}}.
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['info']
    }
</script>
