import axios from "axios"
import { json } from "stream/consumers"
import {User} from "./../types/User"

export const CreateNewUser = async(newUserData:User) => {
	try {
	  const newUserDataCopy:any = {...newUserData}
	  newUserDataCopy.age =  parseInt(newUserDataCopy.age) 
	  newUserDataCopy.height = parseInt(newUserDataCopy.height) 
	  newUserDataCopy.targetWeight = parseInt(newUserDataCopy.targetWeight)
	  
	  const result = await axios.post('http://localhost:3001/users',{
		email:  newUserDataCopy.email,
        firstname:  newUserDataCopy.firstname,
        lastname:  newUserDataCopy.lastname,
        password:  newUserDataCopy.password,
        age:  newUserDataCopy.age,
        height:  newUserDataCopy.height,
        targetWeight:  newUserDataCopy.targetWeight,
	  })
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }