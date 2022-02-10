<!-- eslint-disable -->
<template>
  <ul class="tunes-list">
    <li v-for="song in songs.slice(this.limitFrom, this.limitTo)" :key="song.songId">
      <TunesSong :song="song" />
    </li>
  </ul>

  <TunesMoreLink v-if="this.songs.length > this.limitTo" :limitTo="this.limitTo" @moreSongs="this.limitTo = $event "/>
</template>

<!-- eslint-disable --> 
<script>
import TunesSong from "@/components/tunes/TunesSong.vue";
import TunesMoreLink from "@/components/tunes/TunesMoreLink.vue";

export default {
  //props: ["songs"], // we dont need when we use event bus
  components: {
    TunesSong,
    TunesMoreLink,
  },
  props: {
    songsLimit: {
      type: Number,
    },
  },
  data() {
    return {
      songs: [],
      limitFrom: 0,
      limitTo: this.songsLimit,
    };
  },
  created() {
    window.eventBus.on("add-new-songs", (event) => (this.songs = event));
  },
};
</script>
<!-- eslint-disable --> 
<style lang="scss" scoped>
.tunes-list {
  margin-top: 100px;
  padding-left: 0;
  list-style: none;
}

.tunes-list li {
  margin-top: 70px;
}

figure h3 {
  margin-top: 35px;
  margin-bottom: 25px;
}
</style>
