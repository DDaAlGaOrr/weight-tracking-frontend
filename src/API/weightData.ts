import axios from "axios"
import {WeightData} from './../types/WeightData'

export const CreateNewweightData = async(newData:WeightData) => {
	try {
	console.log(newData)
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