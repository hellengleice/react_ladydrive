import axios from "axios" 

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const buscar = async (url: string, setDados: Function, header: Object = {}) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string) => {
    await api.delete(url)
}



