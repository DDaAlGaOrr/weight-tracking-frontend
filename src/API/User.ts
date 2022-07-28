import axios from "axios";
import { User, UserLogin } from "../types/User";


export const createNewUser = async(newUserData:User) => {
	try {
	  const newUserDataCopy:any = {...newUserData}
	  newUserDataCopy.firstWeight = parseInt(newUserDataCopy.firstWeight) 
	  newUserDataCopy.age =  parseInt(newUserDataCopy.age) 
	  newUserDataCopy.height = parseFloat(newUserDataCopy.height) 
	  newUserDataCopy.targetWeight = parseInt(newUserDataCopy.targetWeight)

	  const result = await axios.post('http://localhost:3001/users',{
		email:  newUserDataCopy.email,
        firstname:  newUserDataCopy.firstname,
        lastname:  newUserDataCopy.lastname,
        password:  newUserDataCopy.password,
        age:  newUserDataCopy.age,
		firstWeight: newUserDataCopy.firstWeight,
        height:  newUserDataCopy.height,
        targetWeight:  newUserDataCopy.targetWeight,
	  })
	  console.log(result.data.exist)
	  return result.data.exist
	} catch (error) {
	  console.error(error);
	}
  }



export const authLogin = async(credentials:UserLogin) => {
	try{
		const credentialCopy = {...credentials}
		credentialCopy.email = credentialCopy.email.trim()
		credentialCopy.password = credentialCopy.password.trim()
		const response = await axios.post('http://localhost:3001/users/authLogin',{
			email:credentialCopy.email,
			password:credentialCopy.password
		})
		const token = response.data.authResponse.token
		const userId = response.data.authResponse.userId
		token?(sessionStorage.setItem('token',token),
		sessionStorage.setItem('userId',userId))
		:sessionStorage.setItem('token','')
		return token
	}
	catch(error){
		console.log(error)
	}
  }
