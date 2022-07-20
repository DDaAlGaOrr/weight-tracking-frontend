import axios from "axios"

export const AuthLogin = async(newUserData:any) => {
	try {
	  const result = await axios.post('http://localhost:3001/users',{
		newUserData
	  })
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }