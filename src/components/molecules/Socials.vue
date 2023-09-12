<script lang='ts'>
import { defineComponent } from 'vue'
import TwitterLink from '@atoms/TwitterLink.vue'
import InstagramLink from '@atoms/InstagramLink.vue'
import FbLink from '@atoms/FbLink.vue'
// import YoutubeLink from '@atoms/YoutubeLink.vue'

export default defineComponent({
	name: 'Socials',
	data() {
		return {
			color: '#ADADAD',
			hover: '#95631B'
		}
	},
	components: {
		// YoutubeLink,
		FbLink,
		InstagramLink,
		TwitterLink

	}
})
</script>

<template>
	<div class='flex gap-[3rem] md:gap-[2rem]'>
		<InstagramLink :color='color' :hover='hover' />
		<TwitterLink :color='color' :hover='hover' />
		<FbLink :color='color' :hover='hover' />
		<!--		<YoutubeLink/> -->
	</div>

</template>

<style>
.social-icon {
	@apply hover:cursor-pointer aspect-square w-[45px] md:w-[35px];
	max-width: fit-content;
}
</style>