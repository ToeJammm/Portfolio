<script>
	export let step;
</script>

<a
	href={step.href}
	target="_blank"
	class="group flex cursor-pointer flex-col gap-4 rounded-lg border border-solid border-violet-700 p-4 text-center duration-200 hover:border-violet-400 sm:p-6 md:p-8"
>
	<div
		class="mx-auto -mt-10 grid place-items-center bg-slate-950 px-4 text-5xl duration-200 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16"
	>
		<i class={step.icon}></i>
	</div>
	<h3 class="mb-5 inline-block bg-slate-950 text-xl font-medium sm:text-2xl md:text-3xl">
		{step.name}
	</h3>
	<slot />
	<div class="justify-betweeen flex flex-1 items-end gap-4">
		<div
			class="relative ml-auto transform cursor-pointer overflow-hidden duration-200 hover:scale-110"
		>
			<p class="z-4">See More &rarr;</p>
		</div>
	</div>
</a>
