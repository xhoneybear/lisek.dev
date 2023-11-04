<div class="flex overflow-hidden flex-col items-center self-center pb-4 w-[56rem] h-[34rem] rounded-2xl backdrop-blur-3xl bg-white/50">
    <div class="flex gap-2 self-stretch p-2 backdrop-blur-3xl bg-white/50">
        <div class="p-2 bg-red-500 rounded-full hover:bg-red-600 active:bg-red-700" />
        <div class="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 active:bg-yellow-700" />
        <div class="p-2 bg-green-500 rounded-full hover:bg-green-600 active:bg-green-700" />
        <h1 class="text-xs font-bold text-center basis-full">Who am I?</h1>
        <div class="w-16" /> <!-- Normalizer to center the title -->
    </div>
    <nav class="flex self-stretch m-2 rounded-xl bg-white/50">
        <a href="/about" class="p-2 w-1/3 text-center rounded-xl backdrop-blur-3xl">Personal info</a>
        <a href="/about/experience" class="p-2 w-1/3 text-center">Experience</a>
        <a href="/about/contact" class="p-2 w-1/3 text-center">Contact</a>
    </nav>
    <div class="flex self-stretch items-start p-2 h-[28rem] max-md:flex-col">
        <slot />
    </div>
</div>
