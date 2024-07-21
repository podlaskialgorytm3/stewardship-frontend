export interface LoginForm {
    email: string;
    password: string;
}
export interface RegisterForm {
    email: string;
    password: string;
    name: string;
    img: string;
}
export interface UserData {
    id: number,
    email: string,
    img: string,
    name: string
}