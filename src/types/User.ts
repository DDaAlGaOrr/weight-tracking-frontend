export interface User {
    email: string
    password: string
    firstname: string
    lastname: string
    age: number
    height: number
    targetWeigth: number
}

export const DEFAULT_USER:User={
email:'',
password:'',
firstname:'',
lastname:'',
age:0,
height:0,
targetWeigth:0


}