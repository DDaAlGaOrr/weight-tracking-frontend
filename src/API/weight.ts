import axios from "axios"

import { Weight } from '../types/Weight'


export const CreateNewweight = async(newData:Weight) => {
	try {
	const newDataCopy:any = {...newData}
	newDataCopy.weight = parseInt(newDataCopy.weight)
	console.log(newDataCopy)
	const result = await axios.post('http://localhost:3001/weightTrackingData',{
		date:newDataCopy.date,
		weight: newDataCopy.weight
	 })
	console.log(result)
	} catch (error) {
	  console.error(error);
	}
  }