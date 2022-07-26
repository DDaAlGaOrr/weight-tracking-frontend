export interface User {
    email: string
    password: string
    firstname: string
    lastname: string
    firstWeight:number
    age: number
    height: number
    targetWeigth: number
}
export interface UserLogin{
	email:string
	password:string
}

export const DEFAULT_USER:User={
email:'',
password:'',
firstname:'',
lastname:'',
firstWeight:0,
age:0,
height:0,
targetWeigth:0
}

export const DEFAULT_LOGIN:UserLogin={
	email:'',
	password:''
}