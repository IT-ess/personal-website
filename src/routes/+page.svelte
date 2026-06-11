<script>
	import { siteTitle } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<data.Homepage />
