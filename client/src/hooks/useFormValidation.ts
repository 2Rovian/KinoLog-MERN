import toast from "react-hot-toast"
import type { FormValidationProps } from "../types/FormTypes"

export default function useFormValidation() {

    const handleFormValidation = ({ isLogin, credential, username, email, password, confirmPassword }: FormValidationProps) => {

        if (isLogin) {
            if (!credential || !password) {
                toast.error("Preencha todos os campos")
                return null
            }

            const cleanCredential = credential.trim();
            return cleanCredential;

        } else {
            if (!username || !password || !confirmPassword) {
                toast.error("Preencha todos os campos")
                return null
            }
            if (password !== confirmPassword) {
                toast.error("As senhas não coincidem")
                return null
            }

            const cleanEmail = email?.trim();
            const cleanUsername = username.trim();

            return { cleanEmail, cleanUsername }
        }

    }

    return { handleFormValidation }
}