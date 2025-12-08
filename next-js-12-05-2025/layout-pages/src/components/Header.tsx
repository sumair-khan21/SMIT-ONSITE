export default function Header() {
    return (
        <header className="relative bg-zinc-950 pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl opacity-50 delay-700 animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400 mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                    Now Available
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    Build something <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        extraordinary
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
                    Create stunning web experiences with our premium component library.
                    Designed for developers who care about design.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start Building
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:-translate-y-1">
                        View Documentation
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Partner Logo Placeholders using Text for Demo */}
                    <div className="flex justify-center items-center">
                        <span className="text-xl font-bold text-white">ACME Corp</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-xl font-bold text-white">GlobalTech</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-xl font-bold text-white">Nebula</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-xl font-bold text-white">Vertex</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
