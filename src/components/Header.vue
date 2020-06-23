<template>
    <b-navbar class="header-navbar" toggleable="lg" type="dark" style="background-color: #0034ac;">
        <b-navbar-brand href="#"><img src="@/assets/russia.svg" style="height:25px;"/> Russian Flashcards</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown text="Collection" right>
                    <b-dropdown-item>Russian Short Stories for Beginners</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav>
                <b-nav-item-dropdown text="Group" right>
                    <b-dropdown-item>Chapter 1</b-dropdown-item>
                    <b-dropdown-item>Chapter 2</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Load Collection</button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Header'

    }
</script>

<style lang="sass" scoped>
    .navbar-brand
        img
            margin-right: 6px

</style>
