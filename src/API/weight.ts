import axios from "axios"

import { Weight,GeneralTable } from '../types/Weight'


export const createNewweight = async(newData:Weight) => {
	try {
	const newDataCopy:any = {...newData}
	newDataCopy.weight = parseInt(newDataCopy.weight)
	const result = await axios.post('http://localhost:3001/weight',{
		date:newDataCopy.date,
		weight: newDataCopy.weight,
		userId:newDataCopy.userId,
	 })
	 return result
	} catch (error) {
	  console.error(error);
	}
  }
export const getGeneralTable = async(userId:any):Promise<any> => {
		const getGeneralTable = await axios.get('http://localhost:3001/weight/generalTable',{
			params:{
				userId
			}
		})
		const actualWeight = getGeneralTable.data.actualWeight
		const targetWeight = getGeneralTable.data.targetWeight
		const remainingWeight = actualWeight - targetWeight
		return {...getGeneralTable.data, remainingWeight}
}