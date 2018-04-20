export default {
    DEAL_HAND (state) {
        for(let i = 0; i < 5; ++i) {
            if(!state.hand[i].held) {
                let candidate = state.hand[i];
                let index = Math.floor(Math.random() * state.deck.length);

                if(state.deck[index].charAt(0) === '1') {
                    state.hand[i].value = state.deck[index].substr(0,2);
                    state.hand[i].suit = state.deck[index].charAt(2);
                } else {
                    state.hand[i].value = state.deck[index].charAt(0);
                    state.hand[i].suit = state.deck[index].charAt(1);
                }

                state.deck[index] = candidate.value + candidate.suit;
            }
        }
    },

    TOGGLE_HELD (state, index) {
        state.hand[index].held = !state.hand[index].held;
    }
}
