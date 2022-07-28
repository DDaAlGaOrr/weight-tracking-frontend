export interface Weight {
	date:Date,
	weight:number
	userId: string
}

export interface GeneralTable{
	initialWeight:number
	actualWeight:number
	targetWeight:number
	remainingWeight: number
}
export interface DetailedTable{
	date: string
    weight: number
    loseWeight: number
}

export const DEFAULT_WEIGHT:Weight={
	date: new Date(Date.now()),
	weight:0,
	userId:''
}