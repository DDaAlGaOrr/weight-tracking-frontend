import axios from "axios"
import { DetailedTable, Weight,ChartData } from '../types/Weight'



export const createNewweight = async(newData:Weight) => {
	try {
	const newDataCopy:any = {...newData}
	newDataCopy.weight = parseInt(newDataCopy.weight)
	const result = await axios.post('http://localhost:3001/weight',{
		date:newDataCopy.date,
		weight: newDataCopy.weight,
		userId:newDataCopy.userId,
	 })
	 return result.data.create
	} catch (error) {
	  console.error(error);
	}
  }
export const getGeneralTable = async(userId:any):Promise<any> => {
		const getGeneralDataTable = await axios.get('http://localhost:3001/weight/generalTable',{
			params:{
				userId
			}
		})
		const actualWeight = getGeneralDataTable.data.actualWeight
		const targetWeight = getGeneralDataTable.data.targetWeight
		const remainingWeight = actualWeight - targetWeight
		return {...getGeneralDataTable.data, remainingWeight}
}
export const getDetailedTable = async(userId:any):Promise<DetailedTable[]> => {
		const getDetailedDataTable = await axios.get('http://localhost:3001/weight/detaliedTable',{
			params:{
				userId
			}
		}) 
		return getDetailedDataTable.data
}
export const getChart = async(userId:any):Promise<ChartData[]> => {
		const getChartData = await axios.get('http://localhost:3001/weight/graph',{
			params:{
				userId
			}
		}) 
		return getChartData.data
}