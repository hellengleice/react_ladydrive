import Veiculo from "./Veiculo";

export default interface Viagem {
    id: number;
    origem: string;
    destino: string;
    veiculo: Veiculo[] | null;
}