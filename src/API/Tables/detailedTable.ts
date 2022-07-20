import axios from "axios";

export const GetdetailedTable = async() => {
	try {
	  const response = await axios.get('http://localhost:3001/detaliedTable');
	  console.log(response);
	} catch (error) {
	  console.error(error);
	}
  }