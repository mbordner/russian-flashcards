export default {

    setMinNumCorrect(context, {val}) {
        context.commit('minNumCorrect', val);
    },

    setMinPercentCorrect(context, {val}) {
        context.commit('minPercentCorrect', val);
    },

    setLanguageInput(context, {val}) {
        if (val === 'ru' || val === 'en') {
            context.commit('languageInput', val);
        }
    },

    updateCardStats(context, payload) {
        context.commit('updateCardStats',payload);
    },

    nextTerm(context) {
        context.commit('nextTerm');
    },

    startGroup(context) {
        context.commit('startGroup');
    },

    resetGroup(context) {
        context.commit('resetGroup');
    }

}