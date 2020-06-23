<template>
    <b-container fluid>
        <b-row align-h="center">
            <b-col cols="12">
                <div class="cards-container">
                    <transition-group name="cardslide" tag="div">
                        <Card v-for="(cardIndex,index) in indexes" :key="index" v-show="index === currentIndex"
                              :card="cards[cardIndex]"
                              :index="index"
                              :cardIndex="cardIndex"
                              :showing="index === currentIndex"
                        />
                    </transition-group>
                </div>
            </b-col>
        </b-row>

    </b-container>


</template>

<script>
    import {mapState} from 'vuex'
    import Card from './Card.vue'

    export default {
        name: 'Cards',
        components: {
            Card
        },
        computed: {
            ...mapState([
                'cards',
                'indexes',
                'currentIndex'
            ])
        }
    }
</script>

<style lang="sass" scoped>
    .cards-container
        margin-top: 150px
        position: relative
        margin-bottom: 200px
        width: 100%

        .outer-card-container
            position: absolute

        .cardslide-enter-active
            animation: cardslide-in .5s

        .cardslide-leave-active
            animation: cardslide-out .5s

        @keyframes cardslide-in
            0%
                transform: translateX(600px)
                opacity: 0
            80%
                transform: translateX(-20px)
            100%
                transform: translateX(0)
                opacity: 1

        @keyframes cardslide-out
            0%
                transform: translateX(0)
                opacity: 1
            100%
                transform: translateX(-800px)
                opacity: 0

</style>