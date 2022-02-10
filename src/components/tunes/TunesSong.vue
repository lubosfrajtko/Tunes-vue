<!-- eslint-disable --> 
<template>
  <transition name="fade">
		<article v-cloak class="tunes-song">
			<div class="inside">
				<h2>{{ shorten(song.songTitle) }}</h2>

				<div class="player-wrapper">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="cover image" />
					<audio controls />
				</div>
			</div>

			<footer class="meta">
				{{ song.songDate }}
				<div class="switch-wrapper">
					<small v-for="color in switchColors" :data-background="color" :key="color.index" @click="changeColor($event)"></small>
				</div>
			</footer>
		</article>
	</transition>
</template>

<!-- eslint-disable --> 
<script>

import { truncate } from 'lodash-es';

  export default {
    props: {
       song : {
         type: Object
       }
    },
	data() {
		return {
			switchColors: {
				'bg-1': '#e4405f',
				'bg-2': '#cc73e1',
				'bg-3': '#3cba54',
				'bg-4': '#2e294e',
				'bg-5': '#262626',
			},
		}
	},
	methods: {
		shorten(str) {
			return truncate(str, { length:30 });
		},
		changeColor: function(e){
			let el = e.target,
				changeColor = el.dataset.background,
				songWrapper = document.querySelector('.tunes-song')
			
			songWrapper.style.backgroundColor = changeColor;
		}
	},
  };

</script>

<!-- eslint-disable --> 
<style lang="scss" scoped>

.tunes-song {
	color: $color;
	text-align: left;

	max-width: 25.5em;
	margin: 0 auto 2em;
	position: relative;

	box-sizing: border-box;
	background-color: #262626;
	border-radius: 0.75em;
}

.inside {
	padding: 1.35em 1.75em 1.75em;
}

h2 {
	font-size: inherit;
	line-height: 1.5em;
	margin: 0;
}

.player-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5em;
}

img {
	width: 5em;
	border: 3px solid white;
	border-radius: 0.5em;
}

audio {
	outline: none;
	max-width: 14em;
}

audio::-webkit-media-controls-panel {
	background: #fff;
}

.meta {
	display: flex;
	justify-content: space-between;

	font-size: 0.75em;
	font-weight: 800;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.6);

	padding: 1.5em 2.25em;
	background: rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
}

.meta .switch-wrapper small{
	padding: 0px 5.5px;
	margin-right: 4px;
	cursor: pointer;
}

.meta .switch-wrapper small:first-child{
	background: $bg-1;
	border: 1px solid darken($bg-1, 15%);
}

.meta .switch-wrapper small:nth-child(2){
	background: $bg-2;
	border: 1px solid darken($bg-2, 15%);
}

.meta .switch-wrapper small:nth-child(3){
	background: $bg-3;
	border: 1px solid darken($bg-3, 15%);
}

.meta .switch-wrapper small:nth-child(4){
	background: $bg-4;
	border: 2px solid darken($bg-4, 10%);
}

.meta .switch-wrapper small:last-child{
	background: $bg-5;
	border: 2px solid darken($bg-5, 7%);
	margin-right: 0px;
}

// animation
[v-cloak] {
	display: none;
}

.fade-enter-active {
	transition: all 0.2s ease;
}

.fade-enter {
	transform: scale(0.9);
}

// responsive
@media screen and (max-width: 520px) {
	.player-wrapper {
		audio {
			margin-top: 1.5em;
		}

		flex-direction: column;
	}
}
</style>
