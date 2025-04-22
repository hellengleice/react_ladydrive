import Viagem from "./Viagem";

export default interface Veiculo{
    id: number;
    modelo: string;
    placa: string;
    cor: string;
    motorista: string;
    viagem: Viagem | null;
}