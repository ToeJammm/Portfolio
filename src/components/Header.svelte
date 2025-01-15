<script>
	export let y;

	export let tabs = [
		{ name: 'Projects', link: '#projects' },
		{ name: 'About Me', link: '#about' },
		{ name: 'LinkedIn', link: 'https://www.linkedin.com/in/jake-marlow-8255a3186/' },
		{ name: 'GitHub', link: 'https://github.com/ToeJammm' }
	];
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border-b border-solid px-6 duration-200 ' +
		(y > 0 ? ' border-violet-950 bg-slate-950 py-4' : ' border-transparent bg-transparent py-6')}
>
	<h1 class="font-medium">
		<b class="poppins font-bold">Jake</b> <span class="">Marlow</span>
	</h1>
	<div class="hidden items-center gap-4 sm:flex">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="flex items-center duration-200 hover:text-violet-400"
				target="_blank"
				rel="noopener noreferrer"
			>
				{#if tab.name === 'GitHub'}
					<img src="github.png" alt="GitHub" class="h-8 w-8" />
				{:else if tab.name === 'LinkedIn'}
					<img src="linkedin.png" alt="LinkedIn" class="h-8 w-8" />
				{:else}
					<p>{tab.name}</p>
				{/if}
			</a>
		{/each}
	</div>
</header>
