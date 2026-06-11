<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Blog</h1>
<p>No posts available for the moment !</p>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
