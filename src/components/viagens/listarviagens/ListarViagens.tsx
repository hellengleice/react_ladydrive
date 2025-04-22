import {  useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Viagem from "../../../models/Viagem";
import CardViagens from "../cardviagens/CardViagens";
import { buscar } from "../../../service/Service";



function ListarViagens() {

    const [viagens, setViagens] = useState<Viagem[]>([])
    async function buscarViagens() {
        try {
        await buscar('/viagens', setViagens, {});
        } catch (error: any) {
            alert('Não foi possível encontra sua viagem')
        }
    }


    useEffect(() => {
        buscarViagens()    
    }, [viagens.length])
    
    return (
        <>
        {viagens.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {viagens.map((viagem) => (
                            <CardViagens key={viagem.id} viagem={viagem} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarViagens;