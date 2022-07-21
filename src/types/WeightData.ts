export interface WeightData {
	date:Date,
	weight:number
}

export const DEFAULT_WEIGHT_DATA:WeightData={
	date: new Date(Date.now()),
	weight:0
}