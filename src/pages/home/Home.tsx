function Home() {
    return (
    <>
        <div className="bg-white flex justify-center py-10">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
            {/* Texto */}
            <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-4xl font-bold text-[#6F2473] leading-snug">
                Aplicativo de carona compartilhada para mulheres!
            </h2>
            <p className="text-xl text-[#4B2142]">
                Juntas no caminho, seguras em cada trajeto!
            </p>

            <div className="flex gap-4">
                <button className="rounded-full text-[#6F2473] font-semibold border-2 border-[#6F2473] py-2 px-6 hover:bg-[#F4D8E4] transition-all">
                Motorista
                </button>
                <button className="rounded-full text-white font-semibold bg-[#6F2473] hover:bg-[#4B2142] py-2 px-6 transition-all">
                Passageira
                </button>
            </div>
            </div>

            {/* Imagem */}
            <div className="flex justify-center">
            <img
                src="https://i.postimg.cc/NM000Ng3/ladyyyy-removebg-preview.png"
                alt="Imagem Página Home"
                className="w-3/4 md:w-2/3 max-w-md"
            />
            </div>
        </div>
        </div>
    </>
    );
}

export default Home;

