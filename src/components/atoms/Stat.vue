<template>
	<div class='w-1/2 mb-4 pr-2 md:mb-0 sm:w-1/3'>
		<h6 :class='size ? largeStyle.header : normalStyle'>{{ number }}+</h6>
		<p class='text-14 md:font-24 ' :class='size ? largeStyle.paragraph : normalStyle.paragraph'>{{ category }}</p>
	</div>
</template>

<script>
export default {
	name: 'Stat',
	props: [
		'category',
		'number',
		'size',
		'color'
	],
	data() {
		return {
			largeStyle: {
				header: 'text-[10rem] font-80 mb-[10px] ' + this.color,
				paragraph: ''
			},
			normalStyle: {
				header: 'text-24 md:text-32  font-50 text-24 md:text-32  font-50',
				paragraph: 'md:w-5/6'
			}
		}
	}
}
</script>