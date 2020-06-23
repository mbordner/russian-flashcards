<template>
    <b-container class="footer-container" fluid>
        <b-row>
            <b-col cols="12">
                <b-button-group size="sm">
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'А')"
                    >А<br/>(a)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Б')"
                    >Б<br/>(b)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'В')"
                    >В<br/>(v,w)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Г')"
                    >Г<br/>(g)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Д')"
                    >Д<br/>(d)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Е')"
                    >Е<br/>(e)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ё')"
                    >Ё<br/>(yo,jo)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ж')"
                    >Ж<br/>(zh)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'З')"
                    >З<br/>(z)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'И')"
                    >И<br/>(i)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Й')"
                    >Й<br/>(j)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'К')"
                    >К<br/>(k)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Л')"
                    >Л<br/>(l)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'М')"
                    >М<br/>(m)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Н')"
                    >Н<br/>(n)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'О')"
                    >О<br/>(o)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'П')"
                    >П<br/>(p)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Р')"
                    >Р<br/>(r)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'С')"
                    >С<br/>(s)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Т')"
                    >Т<br/>(t)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'У')"
                    >У<br/>(u)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ф')"
                    >Ф<br/>(f)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Х')"
                    >Х<br/>(h)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ц')"
                    >Ц<br/>(c)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ч')"
                    >Ч<br/>(ch)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ш')"
                    >Ш<br/>(sh)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Щ')"
                    >Щ<br/>(shh,shch)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ъ')"
                    >Ъ<br/>(")
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ы')"
                    >Ы<br/>(y)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ь')"
                    >Ь<br/>(')
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Э')"
                    >Э<br/>(je)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Ю')"
                    >Ю<br/>(yu,ju)
                    </b-button>
                    <b-button variant="outline-light" size="sm"
                              v-on:click="virtualKeyPressed($event,'Я')"
                    >Я<br/>(ya,ja)
                    </b-button>
                </b-button-group>
            </b-col>
        </b-row>
        <b-row class="titles">
            <b-col>Russian Short Stories for Beginners / Chapter 1</b-col>
        </b-row>
        <b-row class="progress-stats" align-h="center">
            <b-col cols="4">
                <b-progress show-value :max="totalQuestions" class="mb-2" variant="dark">
                    <b-progress-bar variant="success" :value="correctAnsweredCount"></b-progress-bar>
                    <b-progress-bar variant="warning" :value="incorrectAnsweredCount"></b-progress-bar>
                </b-progress>
            </b-col>
        </b-row>
        <b-row class="cmd-btns" align-h="center">
            <b-col cols="2">
                <b-btn size="lg" variant="outline-light"
                       :dsiabled="!groupSelected"
                       @click="startGroup"
                >Start
                </b-btn>
            </b-col>
            <b-col cols="2">
                <b-btn size="lg" variant="outline-light"
                       :dsiabled="!groupSelected"
                       @click="resetGroup"
                >Reset
                </b-btn>
            </b-col>
        </b-row>
        <b-row class="config">
            <b-col cols="4">
                <b-form-group
                        id="fieldset-horizontal1"
                        label-cols="7"
                        label="Correct Answers Required"
                        label-for="input-required-correct"
                >
                    <b-form-input id="input-required-correct" size="sm" v-model="minNumCorrect"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group
                        id="fieldset-horizontal2"
                        label-cols="7"
                        label="Percent Correct Required"
                        label-for="input-required-percent-correct"
                >
                    <b-form-input id="input-required-percent-correct" size="sm"
                                  v-model="minPercentCorrect"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group
                        id="fieldset-horizontal3"
                        label-cols="7"
                        label="Language Input"
                        label-for="input-language"
                >
                    <b-button-group>
                        <b-button variant="outline-light" :pressed="languageInput === 'ru'"
                                  @click="setLanguageInput('ru')"
                        >Russian
                        </b-button>
                        <b-button variant="outline-light" :pressed="languageInput === 'en'"
                                  @click="setLanguageInput('en')"
                        >English
                        </b-button>
                    </b-button-group>
                </b-form-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {EventBus} from '@/main';
    import {mapGetters, mapState} from "vuex";

    export default {
        name: 'Footer',
        data() {
            return {}
        },
        methods: {
            virtualKeyPressed(evt, key) {
                EventBus.$emit('virtual-key-pressed', {key: key, shift: evt.shiftKey});
            },
            setLanguageInput(val) {
                if (!this.groupStarted) {
                    this.$store.dispatch('setLanguageInput', {val: val});
                }
            },
            startGroup() {
                this.$store.dispatch('startGroup');
            },
            resetGroup() {
                this.$store.dispatch('resetGroup');
            }
        },
        computed: {
            ...mapState([
                'languageInput',
                'indexes',
                'currentIndex',
                'selectedCollection',
                'selectedGroup'
            ]),
            ...mapGetters([
                'answersAttemptedCount',
                'correctAnsweredCount',
                'incorrectAnsweredCount'
            ]),
            groupSelected() {
                return this.selectedCollection !== null && this.selectedGroup !== null;
            },
            groupStarted() {
                return this.currentIndex !== null;
            },
            totalQuestions() {
                return this.indexes.length;
            },
            minNumCorrect: {
                set(n) {
                    this.$store.dispatch('setMinNumCorrect', {val: n});
                },
                get() {
                    return this.$store.state.minNumCorrect;
                }
            },
            minPercentCorrect: {
                set(n) {
                    if (n > 100) {
                        n = 100
                    } else if (n < 0) {
                        n = 0;
                    }
                    this.$store.dispatch('setMinPercentCorrect', {val: n});
                },
                get() {
                    return this.$store.state.minPercentCorrect;
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .footer-container
        background-color: #e80000
        padding: 20px


        .titles
            margin: 5px
            font-color: #0034ac
            font-weight: 900
            font-size: 1.5em
            text-shadow: 2px 2px 2em white

        .progress-stats
            .progress-bar
                color: #0034ac

        .cmd-btns
            margin: 20px

        .config
            font-weight: 900
            font-size: 1.1em
            text-shadow: 2px 2px 2em white
</style>