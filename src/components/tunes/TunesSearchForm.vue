<!-- eslint-disable -->
<template>
  <form action="#" @submit.prevent="getMusic">
    <input type="text" v-model="query" @input="searchSong" /> <!-- searchSong -->
  </form>
</template>

<!-- eslint-disable --> 
<script>
import axios from "axios";
import {debounce} from 'lodash-es'

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {

	searchSong: debounce(function($event){
		this.getMusic();
	}, 300),

    getMusic() {
      axios
        .get(
          `https://musicbrainz.org/ws/2/release?artist=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab&status=bootleg&type=live`
        )
        .then((response) => {
          let tunesSongs = response.data.releases
            //.filter( song => song.kind === 'song' )
            .map((song) => this.extractData(song));

          //this.$emit("add-new-songs", tunesSongs);
          window.eventBus.emit('add-new-songs', tunesSongs); // event bus
        });
    },
    extractData({ id: songId, date: songDate, title: songTitle }) {
      return { songId, songDate, songTitle };
    },
  },
};
</script>

<!-- eslint-disable --> 
<style lang="scss" scoped>

input {
	width: 100%;
	display: block;

	padding: {
		top: 0.5em;
		bottom: 0.5em;
		left: 2.95em;
		right: 0.75em;
	}

	color: #333;
	font-size: 1.5em;
	font-weight: 700;

	border: none;
	border-radius: 0.5em;
	background: white;
	box-sizing: border-box;

	outline: none;
	appearance: none;

	background: {
		image: url('../../assets/search.svg');
		repeat: no-repeat;
		position-y: 50%;
		position-x: 1em;
		color: white;
		size: 1em;
	}
}

@media screen and (max-width: 520px) {
	input {
		font-size: 1.15em;
	}
}

</style>
