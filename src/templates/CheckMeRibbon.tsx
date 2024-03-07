const CheckMeRibbon = () => (
	<div className="absolute pointer-events-none overflow-hidden w-[125px] h-[125px] z-10 right-0 top-0">
		<a
			className="w-[210px] rotate-45 absolute overflow-hidden top-[30px] right-[-60px] text-xs no-underline bg-slate-800 px-0 py-1 pointer-events-auto shadow-[0_0.15em_0.23em_0_rgba(0,0,0,.5)]"
			href="https://github.com/nishidemasami/nishidemasami.github.io"
			title="Check me on GitHub"
			target="_blank"
		>
			<span className="w-auto block border-slate-100 border-dotted border-y-2 indent-0 text-center no-underline leading-6 text-white break-keep whitespace-nowrap">
			Check me on GitHub
			</span>
		</a>
	</div>
);

export { CheckMeRibbon };
