import axios from "axios";

import { UserLogin } from "../types/User";

export const AuthLogin = async(credentials:UserLogin) => {
	const credentialCopy = {...credentials}
	credentialCopy.email = credentialCopy.email.trim()
	credentialCopy.password = credentialCopy.password.trim()
	try {
	  const response = await axios.post('http://localhost:3001/users/authLogin',{
		email:credentialCopy.email,
		password:credentialCopy.password
	  })
	  console.log(response);
	} catch (error) {
	  console.error(error);
	}
  }
