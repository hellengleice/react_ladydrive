import Veiculo from "./Veiculo";


export default interface Usuario{
    id?: number|null;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    sexo:string;
    veiculo: Veiculo | null;
}