// import toast from "react-hot-toast";
// import type { FormValidationProps } from "../types/FormTypes";
// import useFormValidation from "./useFormValidation";

// // interface useFormSubmitProps {
// //     isLogin?: string
// //     , credential?: string
// //     , password?: string
// //     , username?: string
// //     , email?: string
// //     , confirmPassword?: string
// // }

// export default function useFormSubmit() {

//     const { handleFormValidation } = useFormValidation();

//     const handleSubmitForm = (e: React.FormEvent) => {
//         e.preventDefault()

//         const data: FormValidationProps = isLogin ?
//             { type: 'login', credential, password }
//             :
//             { type: 'register', username, email, password, confirmPassword }

//         const validated = handleFormValidation(data)
//         if (!validated) return;

//         toast.success("Form submitado")
//     }

//     return { handleSubmitForm }
// }