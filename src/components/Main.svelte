<script>
	import Step from './Step.svelte';

	let steps = [
		{
			name: 'ClassMate Webapp',
			icon: 'classMateLogo.png',
			description:
				'A SERN stack application designed to make choosing college courses easier by allowing students to rate their courses (and not JUST their professors)'
		},
		{
			name: 'Autentrics.ai Visual Tool',
			icon: '',
			description:
				'A visula tool made with Plotly and D3.JS designed to aid in tuning neural network training by keeping track of parameters and graphing their shifts over time'
		},
		{
			name: 'C++ Feedforward Neural Network',
			icon: '',
			description:
				'Simple neural network built from scratch in C++. Accepts CSV files for training and is capable of both data processing, training, and valdidating itself for simple regression problems.'
		}
	];

	let benefits = [
		{
			metric: 'Bachelors Degree in Computer Science',
			name: 'Thorough Computer Science Education',
			description:
				'Having earned a degree in computer science and maintained a 3.6+ GPA all four years, I am dedicated and passionate about learning and progressing in the field. '
		},
		{
			name: 'Creastive Mind',
			description:
				'With a background in graphic design and the fine arts, I bring creative qualities much farther than just a canvas. My critical thinking skills mesh well with my creative side to produce unique and strong solutions when programming.'
		},
		{
			name: 'an excellent communicator',
			description:
				"Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
		}
	];
</script>

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		<div
			class="align-center flex flex-col gap-6 text-center md:gap-8 lg:ml-20 lg:justify-center lg:gap-10 lg:text-center"
		>
			<h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
				I'm <span class="poppins text-violet-400">Jake</span> Marlow,
				<br />Software
				<span class="poppins text-violet-400">Engineer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-violet-400">strengths</span> include Full Stack Web Development and Machine/Deep
				Learning
			</p>
			<button
				class="blueShadow poppins group relative mx-auto overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl"
			>
				<div
					class="absolute right-full top-0 z-0 h-full w-full bg-violet-400 opacity-20 duration-200 group-hover:translate-x-full"
				></div>
				<h4 class="z-9 relative">Get in touch &rarr;</h4>
			</button>
		</div>
		<div class="relative grid place-items-center shadow-2xl">
			<img src={'jake4.png'} alt="Jake Marlow" class="z-[2] max-h-[70vh] object-cover" />
		</div>
	</section>
	<section class="flex flex-col gap-24 py-20 lg:py-32" id="projects">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-violet-400">see</span> my work?
			</h3>
		</div>
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
			{#each steps as step}
				<Step {step}>
					<p>{step.description}</p>
				</Step>
			{/each}
		</div>
	</section>
</main>
