<!-- eslint-disable -->
<template>
  <div class="more-link">
      <a href="" @click.prevent="moreSongs">+</a>
  </div>
</template>

<!-- eslint-disable -->
<script>
export default {
    props: {
        limitTo: {
            type: Number 
        },
    },
    methods: {
        moreSongs() {
            let newLimit = this.limitTo + this.limitTo;
            this.$emit("more-songs", newLimit);
        }
    },
};
</script>

<!-- eslint-disable -->
<style lang="scss" scoped>

    .more-link{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .more-link a {
        font-size: 22px;
        font-weight: 800;
        padding: 3px 9px;
        color: white;
        border: 3px solid white;
        border-radius: 5px;
        text-decoration: none;
    }

</style>
