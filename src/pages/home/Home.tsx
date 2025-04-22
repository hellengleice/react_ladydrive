
function Home() {
    return (
        <>
            <div className="bg-pink-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-4xl font-bold text-center text-[#6F2473]'>
                            Aplicativo de carona compartilhada para mulheres!
                        </h2>
                        <p className='text-xl text-[#6F2473]'>
                        Juntas no caminho, seguras em cada trajeto!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-[#6F2473] 
                                            border-[#6F2473] border-solid border-2 py-2 px-4 '
                                >
                                Motorista
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.postimg.cc/NM000Ng3/ladyyyy-removebg-preview.png "
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home