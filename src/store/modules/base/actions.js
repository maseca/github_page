export default {
    changeName (context, username) {
        context.commit('CHANGE_NAME', username);
    }
}
