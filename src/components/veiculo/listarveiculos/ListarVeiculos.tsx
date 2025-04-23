import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Veiculo from "../../../models/Veiculo";
import CardVeiculos from "../cardveiculos/CardVeiculos";
import { buscar } from "../../../service/Service";

function ListarVeiculos() {
const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

async function buscarVeiculos() {
    try {
    await buscar("/veiculos", setVeiculos, {});
    } catch (error: any) {
        ToastAlerta("Não foi possível encontrar seus veículos", "info");
    }
}

useEffect(() => {
    buscarVeiculos();
}, [veiculos.length]);

return (
    <>
    {veiculos.length === 0 && (
        <div className="flex justify-center items-center mt-20">
        <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
        />
        </div>
    )}

    <div className="flex justify-center w-full my-8 px-4">
        <div className="container flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#6F2473] mb-6">Meus Veículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {veiculos.map((veiculo) => (
            <CardVeiculos key={veiculo.id} veiculo={veiculo} />
            ))}
        </div>
        </div>
    </div>
    </>
);
}

export default ListarVeiculos;