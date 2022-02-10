<!-- eslint-disable --> 
<template>

    <section class="tunes">
        <h1>iTunes</h1>
        <TunesSearchForm/>
        <TunesList :songsLimit="this.songsLimit" />
    </section>

</template>

<!-- eslint-disable --> 
<script>

    import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue';
    import TunesList from '@/components/tunes/TunesList.vue';

    export default {
        data() {
            return {
                songsLimit: 5
            }
        },
        components: {
            TunesSearchForm, TunesList
        }
    }

</script>

<!-- eslint-disable --> 
<style lang="scss" scoped>

</style>