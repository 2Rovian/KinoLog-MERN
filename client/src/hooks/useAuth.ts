import Axios from "axios"
import toast from "react-hot-toast";

export default function useAuth() {

    const handleLogin = ({credential, password}: 
        {credential: string, password: string}) => {
    }

    const handleRegister = async ({username, email, password}: 
        {username: string, email?: string, password: string}) => {
            try {
                await Axios.post("http://localhost:5000/api/auth/register", {username, email, password});
        toast.success("Usuário criado com sucesso")
            } catch (error) {
                console.error("Erro ao criar usuário", error)
                toast.error("Erro ao criar usuário")
            }

    }

    return { handleLogin, handleRegister }
}