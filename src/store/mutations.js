import _ from 'lodash';

export default {

    resetGroup: (state) => {
        state.currentIndex = null;
        state.indexes = [];
        state.cards = [];
    },

    startGroup: (state) => {
        if( state.selectedCollection !== null && state.selectedGroup !== null) {
            let cards = [];
            let indexes = [];

            let col = state.collections[state.selectedCollection];
            let grp = col.groups[state.selectedGroup];
            let amt = state.minNumCorrect;

            grp.terms.forEach( (t,i) => {
               cards.push(
                   {
                       term:t,
                       attempted:0,
                       correct:0
                   }
               )
                _.times( amt, () => indexes.push(i) );
            });

            state.cards = cards;
            state.indexes = _.shuffle(indexes);
            state.currentIndex = 0;
        }
    },

    clearGroup: (state) => {
        state.selectedGroup = null;
        this.resetGroup(state);

    },

    minNumCorrect: (state,val) => {
        state.minNumCorrect = val;
    },

    minPercentCorrect: (state,val) => {
        state.minPercentCorrect = val;
    },

    languageInput: (state,val) => {
        state.languageInput = val;
    },

    updateCardStats: (state, {cardIndex, correct}) => {
        state.cards[cardIndex].attempted++;
        if( correct ) {
            state.cards[cardIndex].correct++;
        }
    },

    nextTerm: (state) => {
        state.currentIndex++;
    }
}