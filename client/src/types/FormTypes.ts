export interface LoginValidationProps {
    type: "login",
    credential: string,
    password: string,
}

export interface RegisterValidationProps {
    type: "register",
    username: string,
    email?: string,
    password: string,
    confirmPassword: string,
}

export type FormValidationProps = LoginValidationProps | RegisterValidationProps;