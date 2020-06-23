export default {

    correctAnsweredCount(state) {
        let count = 0;
        state.cards.forEach((c) => count += c.correct);
        return count;
    },

    answersAttemptedCount(state) {
        let count = 0;
        state.cards.forEach((c) => count += c.attempted);
        return count;
    },

    incorrectAnsweredCount(state,getters) {
        let count = getters.answersAttemptedCount - getters.correctAnsweredCount
        return count;
    }

}