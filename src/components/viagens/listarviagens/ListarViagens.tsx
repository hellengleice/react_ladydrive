import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Viagem from "../../../models/Viagem";
import CardViagens from "../cardviagens/CardViagens";
import { buscar } from "../../../service/Service";

function ListarViagens() {
  const [viagens, setViagens] = useState<Viagem[]>([]);

  async function buscarViagens() {
    try {
      await buscar("/viagens", setViagens, {});
    } catch (error: any) {
      alert("Não foi possível encontrar sua viagem");
    }
  }

  useEffect(() => {
    buscarViagens();
  }, [viagens.length]);

  return (
    <>
      {viagens.length === 0 && (
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
          <h2 className="text-3xl font-bold text-[#6F2473] mb-6">Minhas Viagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {viagens.map((viagem) => (
              <CardViagens key={viagem.id} viagem={viagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarViagens;
