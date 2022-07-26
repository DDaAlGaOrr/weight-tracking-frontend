import axios from "axios"

import { User } from "../types/User"

export const CreateNewUser = async(newUserData:User) => {
	try {
	  const newUserDataCopy:any = {...newUserData}
	  newUserDataCopy.firstWeight = parseInt(newUserDataCopy.firstWeight) 
	  newUserDataCopy.age =  parseInt(newUserDataCopy.age) 
	  newUserDataCopy.height = parseInt(newUserDataCopy.height) 
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
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }

  import { UserLogin } from "../types/User";


export const AuthLogin = async(credentials:UserLogin) => {
	try{
		const credentialCopy = {...credentials}
		credentialCopy.email = credentialCopy.email.trim()
		credentialCopy.password = credentialCopy.password.trim()
		const response = await axios.post('http://localhost:3001/users/authLogin',{
			email:credentialCopy.email,
			password:credentialCopy.password
		})
		console.log(response);
	}
	catch(error){
		console.log(error)
	}
  }
