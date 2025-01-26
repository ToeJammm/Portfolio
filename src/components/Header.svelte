<script>
	export let y;

	export let tabs = [
		// { name: 'Projects', link: 'projects' },
		{ name: 'About Me', link: 'about' },
		{ name: 'LinkedIn', link: 'https://www.linkedin.com/in/jake-marlow-8255a3186/' },
		{ name: 'GitHub', link: 'https://github.com/ToeJammm' }
	];

	// State to toggle the mobile menu
	let isMenuOpen = false;
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border-b border-solid px-6 duration-200 ' +
		(y > 0 ? ' border-violet-950 bg-slate-950 py-4' : ' border-transparent bg-transparent py-6')}
>
	<h1
		class="relative transform cursor-pointer overflow-hidden font-medium duration-200 hover:scale-110 hover:text-violet-400"
	>
		<a href="/Portfolio">
			<span class="">Home</span>
		</a>
	</h1>

	<!-- Hamburger Menu for Small Screens -->
	<button
		class="flex items-center justify-center rounded-md p-2 text-white sm:hidden"
		on:click={() => (isMenuOpen = !isMenuOpen)}
		aria-label="Toggle navigation menu"
	>
		<!-- Icon for Hamburger -->
		{#if isMenuOpen}
			<span class="text-2xl">x</span> <!-- Close icon -->
		{:else}
			<span class="text-2xl">☰</span> <!-- Hamburger icon -->
		{/if}
	</button>

	<!-- Tabs for Larger Screens -->
	<div class="hidden items-center gap-4 sm:flex">
		{#each tabs as tab}
			<a
				href={tab.link}
				class="flex items-center duration-200 hover:text-violet-400"
				{...tab.name === 'About Me' ? {} : { target: '_blank', rel: 'noopener noreferrer' }}
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

	<!-- Mobile Menu with Ease-In Animation -->
	<div
		class={`absolute right-0 top-full z-20 flex w-full transform flex-col items-center gap-4 bg-slate-950 p-4 transition-all duration-300 ease-in sm:hidden ${
			isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
		}`}
	>
		{#each tabs as tab}
			<a
				href={tab.link}
				class="flex w-full items-center justify-center duration-200 hover:text-violet-400"
				{...tab.name === 'About Me' ? {} : { target: '_blank', rel: 'noopener noreferrer' }}
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
