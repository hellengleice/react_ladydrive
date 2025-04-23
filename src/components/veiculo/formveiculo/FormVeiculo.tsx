import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Veiculo from "../../../models/Veiculo";
import Viagem from "../../../models/Viagem";
import { ToastAlerta } from "../../../ utils/ToastAlerta";

function FormVeiculo() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [viagens, setViagens] = useState<Viagem[]>([])

  const [viagem, setViagem] = useState<Viagem>({
    id: 0,
    origem: '',
    destino: '',
    veiculo: null
  })

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const [usuario, setUsuario] = useState<Usuario>({
    id: null,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    sexo: '',
    veiculo: null,
  })

  const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/veiculos/${id}`, setVeiculo);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar o seu veículo.", "erro");
    }
  }

  async function buscarViagemPorId(id: string) {
    try {
      await buscar(`/viagens/${id}`, setViagem)
    } catch (error: any) {
      console.log(error.toString().includes('403'))
    }
  }

  async function buscarViagems() {
    try {
      await buscar('/viagens', setViagens)
    } catch (error: any) {
      console.log(error.toString().includes('403'))
    }
  }

  async function buscarUsuarioPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario)
    } catch (error: any) {
      console.log(error.toString().includes('403'))
    }
  }

  

  async function buscarUsuarios() {
    try {
      await buscar('/usuarios/all', setUsuarios)
    } catch (error: any) {
      console.log(error.toString().includes('403'))
    }
  }


  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);


  useEffect(() => {
    buscarViagems()

    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  useEffect(() => {
    setVeiculo({
      ...veiculo,
      viagem: viagem,
    })
  }, [viagem])

  useEffect(() => {
    setVeiculo({
      ...veiculo,
      usuario: usuario,
    })
  }, [usuario])

  useEffect(() => {
    buscarUsuarios();
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value,
      viagem: viagem,
      usuario: usuario
    });
  }

  function retornar() {
    navigate("/veiculos");
  }

  async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    

    if (id !== undefined) {
      try {
        await atualizar(`/veiculos`, veiculo, setVeiculo);
        ToastAlerta("O veículo foi atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao salvar o veículo.", "erro");
      }
    } else {
      try {
        await cadastrar(`/veiculos`, veiculo, setVeiculo)

        ToastAlerta('Veículo cadastrada com sucesso', "sucesso");

      } catch (error: any) {
        
        ToastAlerta('Erro ao cadastrar a Veículo', "erro");
      }
    }
    setIsLoading(false)
    retornar()
  }

  const carregandoVeiculo = veiculo.placa === '';

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-10">
      <h1 className="text-4xl text-center mb-8 text-[#6F2473] font-bold">
        {id === undefined ? "Cadastrar Veículo" : "Editar Veículo"}
      </h1>

      <form
        className="w-11/12 md:w-1/2 flex flex-col gap-6 bg-white border border-[#EDEDED] rounded-2xl p-6 shadow-md"
        onSubmit={gerarNovoVeiculo}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="placa" className="text-[#4B2142] font-semibold">
            Placa do veículo
          </label>
          <input
            type="text"
            placeholder="Digite a placa do veículo"
            name="placa"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.placa}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label htmlFor="modelo" className="text-[#4B2142] font-semibold">
            Modelo do Veículo
          </label>
          <input
            type="text"
            placeholder="Qual é o modelo do veículo"
            name="modelo"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.modelo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label htmlFor="cor" className="text-[#4B2142] font-semibold">
            Cor do Veículo
          </label>
          <input
            type="text"
            placeholder="Qual é a cor do veículo"
            name="cor"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.cor}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />

          <label htmlFor="motorista" className="text-[#4B2142] font-semibold">
            Motorista do Veículo
          </label>
          <input
            type="text"
            placeholder="Nome do motorista do veículo"
            name="motorista"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.motorista}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>



        <div className="flex flex-col gap-2">
          <p>Origem da Viagem</p>
          <select name="viagem" id="viagem" className='border p-2 border-slate-800 rounded'
            onChange={(e) => buscarViagemPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>Selecione uma origem</option>

            {viagens.map((viagem) => (
              <>
                <option value={viagem.id!} >{viagem.origem}</option>
              </>
            ))}

          </select>
        </div>



        <div className="flex flex-col gap-2">
          <p>Usuário</p>
          <select
            name="usuario"
            id="usuario"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
            >
            <option value="" disabled selected>Selecione um usuário</option>
            {usuarios.map((usuario) => (
              <>
              {/* <option value={usuario.id!} > {usuario.nome} </option> */}
              <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>

              </>
            ))}
          </select>
        </div>






        <button
          className="rounded text-white bg-[#6F2473] hover:bg-[#4B2142] w-1/2 py-2 mx-auto flex justify-center transition-all"
          type="submit"
          disabled={carregandoVeiculo}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormVeiculo;