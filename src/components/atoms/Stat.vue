<template>
	<div class='w-1/2 mb-4 pr-2 md:mb-0 sm:w-1/3'>
		<h6 class='text-24 md:text-32 text-bb-secondary-black font-50'>{{ number }} +</h6>
		<p class='text-14 md:font-24 md:w-5/6'>{{ category }}</p>
	</div>
</template>

<script>
export default {
	props: [
		'category',
		'number'
	]
}
</script>