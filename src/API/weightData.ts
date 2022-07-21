import axios from "axios"
import {WeightData} from './../types/WeightData'

export const CreateNewweightData = async(newData:WeightData) => {
	try {
	console.log(newData)
	const newDataCopy:any = {...newData}
	newDataCopy.date = new Date(newDataCopy.date )
	newDataCopy.weight = parseInt(newDataCopy.weight)
	console.log(newDataCopy)
	 axios.post('http://localhost:3001/weightTrackingData',{
		date:newDataCopy.date,
		weight: newDataCopy.weight

	 })
	} catch (error) {
	  console.error(error);
	}
  }