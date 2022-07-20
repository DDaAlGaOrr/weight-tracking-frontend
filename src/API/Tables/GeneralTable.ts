import axios from "axios";

export const GetGeneralTable = async() => {
	try {
	  const response = await axios.get('http://localhost:3001/generalTable');
	  console.log(response);
	} catch (error) {
	  console.error(error);
	}
  }