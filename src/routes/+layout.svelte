<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import '../app.css';
	type MyType = {
		y: any;
		innerHeight?: number; // Add this property
		innerWidth?: number;
		tabs?: { name: string; link: string }[];
	};

	let obj: MyType = {
		y: 0,
		innerWidth: 0,
		innerHeight: 0, // Now allowed
		tabs: [{ name: 'Home', link: '/' }]
	};
	let y: number;
	let innerWidth = 0;
	let innerHeight = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class="container relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"
>
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200 ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<button
			on:click={goTop}
			class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-violet-400 hover:bg-slate-800 sm:px-4"
			aria-label="Scroll to top"
		>
			<i class="fa-solid fa-arrow-up"></i>
		</button>
	</div>
	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
