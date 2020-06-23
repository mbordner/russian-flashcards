<template>
    <b-container class="outer-card-container" fluid>
        <b-row align-h="center">
            <b-col cols="8">
                <div class="card-container">
                    <div class="flipcard" :class="cardState">
                        <b-card
                                :header="term"
                                class="card-front"
                        >
                            <b-card-body>
                                <b-form-textarea
                                        class="card-answer-area"
                                        id="textarea"
                                        v-model="answer"
                                        placeholder="Type Answer here"
                                        rows="4"
                                        max-rows="6"
                                        v-on:keydown="taKeyPressed"
                                        v-on:click="taClicked"
                                ></b-form-textarea>
                                <b-button href="#" variant="primary" :disabled="answer.length === 0 || submitted"
                                          v-on:click.prevent="submit"
                                >Submit
                                </b-button>
                            </b-card-body>
                        </b-card>
                        <b-card
                                :header="term"
                                class="card-back"
                                :border-variant="correct ? 'success' : 'danger'"
                                :header-bg-variant="correct ? 'success' : 'danger'"
                        >
                            <b-card-body>
                                <div :class="correct ? 'callout callout-success' : 'callout callout-danger'">
                                    {{ answer }}
                                </div>
                                <div class="callout callout-success" v-if="!correct">
                                    {{ correctAnswer }}
                                </div>
                                <b-button href="#" variant="primary" :disabled="!(showing && submitted)"
                                          v-on:click.prevent="next"
                                >Next
                                </b-button>
                            </b-card-body>

                        </b-card>
                    </div>

                </div>

            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col cols="2">
                {{ currentCardCorrectCount }} / {{ currentCardAttemptedCount }}
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import {EventBus} from '../main';
    import {mapState, mapGetters} from "vuex";

    let ruAlphabet = {
        "А": "а",
        "Б": "б",
        "В": "в",
        "Г": "г",
        "Д": "д",
        "Е": "е",
        "Ё": "ё",
        "Ж": "ж",
        "З": "з",
        "И": "и",
        "Й": "й",
        "К": "к",
        "Л": "л",
        "М": "м",
        "Н": "н",
        "О": "о",
        "П": "п",
        "Р": "р",
        "С": "с",
        "Т": "т",
        "У": "у",
        "Ф": "ф",
        "Х": "х",
        "Ц": "ц",
        "Ч": "ч",
        "Ш": "ш",
        "Щ": "щ",
        "Ъ": "ъ",
        "Ы": "ы",
        "Ь": "ь",
        "Э": "э",
        "Ю": "ю",
        "Я": "я"
    };
    let transLitSoloMap = {
        "a": "А",
        "b": "Б",
        "c": "Ц",
        "d": "Д",
        "e": "Е",
        "f": "Ф",
        "g": "Г",
        "h": "Х",
        "i": "И",
        "j": "Й",
        "k": "К",
        "l": "Л",
        "m": "М",
        "n": "Н",
        "o": "О",
        "p": "П",
        "q": "Я",
        "r": "Р",
        "s": "С",
        "t": "Т",
        "u": "У",
        "v": "В",
        "w": "В",
        "x": "Х",
        "y": "Ы",
        "z": "З",
        "'": "Ь",
        "\"": "Ъ"
    };
    let transLitCombos = {
        "c": {"h": ["Ч", 1]},
        "j": {"o": ["Ё", 1], "u": ["Ю", 1], "a": ["Я", 1], "e": ["Э", 1]},
        "y": {"o": ["Ё", 1], "u": ["Ю", 1], "a": ["Я", 1]},
        "z": {"h": ["Ж", 1]},
        "s": {"h": ["Ш", 1]},
        "sh": {"h": ["Щ", 1]},
        "shc": {"h": ["Щ", 2]}
    };

    export default {
        name: 'Card',
        props: {
            card: Object,
            showing: Boolean,
            index: Number,
            cardIndex: Number
        },
        data() {
            return {
                answer: '',
                buffer: '',
                pos: 0,
                submitted: false
            }
        },
        computed: {
            ...mapState([
                'languageInput',
                'cards'
            ]),
            ...mapGetters([
                'answersAttemptedCount',
                'correctAnsweredCount',
                'incorrectAnsweredCount'
            ]),
            currentCardCorrectCount() {
                return this.cards[this.cardIndex].correct;
            },
            currentCardAttemptedCount() {
                return this.cards[this.cardIndex].attempted;
            },
            active() {
                return this.showing && !this.submitted
            },
            term() {
                if (this.languageInput === 'ru') {
                    return this.card.term['en']
                } else {
                    return this.card.term['ru']
                }
            },
            correct() {
                return this.submitted && this.answer.trim() === this.correctAnswer;
            },
            correctAnswer() {
                if (this.languageInput === 'ru') {
                    return this.card.term['ru']
                } else {
                    return this.card.term['en']
                }
            },
            cardState() {
                if (this.submitted === true) {
                    return "submitted";
                }
                return "";
            }
        },
        watch: {
            active: {
                immediate: true,
                handler(newVal) {
                    if (newVal) {
                        EventBus.$on('virtual-key-pressed', this.virtualKeyPressed)
                    } else {
                        EventBus.$off('virtual-key-pressed', this.virtualKeyPressed)
                    }
                }
            }
        },
        methods: {
            taClicked(evt) {
                if (this.active) {
                    this.pos = evt.target.selectionEnd;
                }
            },
            taKeyPressed(evt) {
                if (this.active) {
                    if (evt.key === 'Enter') {
                        this.submit()
                    } else if (evt.key === 'Backspace') {
                        evt.preventDefault();
                        if (this.pos > 0) {
                            this.answer = this.answer.slice(0, this.pos - 1) + this.answer.slice(this.pos);
                            this.pos--
                            this.buffer = "";
                        }
                    } else if (evt.key === 'ArrowLeft') {
                        if (this.pos > 0) {
                            this.pos--
                            this.buffer = "";
                        }
                    } else if (evt.key === 'ArrowRight') {
                        if (this.pos < this.answer.length) {
                            this.pos++
                            this.buffer = "";
                        }
                    } else if (this.languageInput == 'ru' && `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'"`.indexOf(evt.key) !== -1) {
                        evt.preventDefault();
                        let key = evt.key.toLowerCase();
                        let ruCapLet = transLitSoloMap[key]; // mapped is russian capital char


                        // if buffer is not 0 length, see if this key, makes a combo
                        if (this.buffer.length > 0) {
                            if (transLitCombos[this.buffer][key] !== undefined) {
                                // replace char with combo
                                ruCapLet = transLitCombos[this.buffer][key][0];
                                // remove chars
                                let rmChars = transLitCombos[this.buffer][key][1];
                                this.answer = this.answer.slice(0, this.pos - rmChars) + this.answer.slice(this.pos);
                                this.pos -= rmChars;
                            }
                        }

                        let char = evt.shiftKey ? ruCapLet : ruAlphabet[ruCapLet]; // convert it to lower case if not shift selected

                        if (this.pos === this.answer.length) {
                            this.answer += char;
                            this.pos++
                        } else {
                            this.answer = this.answer.slice(0, this.pos) + char + this.answer.slice(this.pos);
                            this.pos++
                        }

                        evt.target.value = this.answer
                        evt.target.setSelectionRange(this.pos, this.pos);

                        let comboTest = this.buffer + key;
                        if (transLitCombos[comboTest] !== undefined) {
                            this.buffer += key;
                        } else {
                            this.buffer = "";
                        }

                    } else {
                        if (evt.key.length === 1) {
                            this.pos++
                        }
                    }
                } else {
                    evt.preventDefault();
                }

            },
            virtualKeyPressed(evt) {
                if (this.active) {
                    let char = evt.shift ? evt.key : ruAlphabet[evt.key];
                    if (this.pos === this.answer.length) {
                        this.answer += char;
                        this.pos++
                    } else {
                        this.answer = this.answer.slice(0, this.pos) + char + this.answer.slice(this.pos);
                        this.pos++

                    }
                }
            },
            submit() {
                this.submitted = true;

                this.$store.dispatch('updateCardStats', {cardIndex: this.cardIndex, correct: this.correct});
            },
            next() {
                this.$store.dispatch('nextTerm');
            }
        }
    }

</script>

<style lang="sass" scoped>
    .outer-card-container
        min-height: 450px
        min-width: 400px
        max-height: 550px

        .row
            height: 100%


            .card-container
                position: relative
                width: 100%
                height: 350px
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)

                .flipcard.submitted
                    transform: rotateY(180deg)

                .flipcard
                    position: absolute
                    width: 100%
                    height: 100%
                    transform-style: preserve-3d
                    transition: all 0.3s ease


                    .card-body
                        background-color: white

                    .card-front
                        position: absolute
                        top: 0
                        left: 0
                        width: 100%
                        height: 100%
                        backface-visibility: hidden
                        overflow: hidden
                        z-index: 2

                        .card-answer-area
                            margin-bottom: 20px

                    .card-back
                        position: absolute
                        top: 0
                        left: 0
                        width: 100%
                        height: 100%
                        backface-visibility: hidden
                        overflow: hidden
                        transform: rotateY(180deg)
                        z-index: 1


</style>