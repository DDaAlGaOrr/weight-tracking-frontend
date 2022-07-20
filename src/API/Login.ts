import axios from "axios";

export const AuthLogin = async(credentials:any) => {
	// const parseCredentials = JSON.stringify(credentials)
	try {
	  const response = await axios.post('http://localhost:3001/authLogin',{
		credentials
	  })
	  console.log(response);
	} catch (error) {
	  console.error(error);
	}
  }
