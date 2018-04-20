export default {
    dealHand (context) {
        context.commit('DEAL_HAND');
    },

    toggleHeld (context, index) {
        context.commit('TOGGLE_HELD', index);
    }
}
