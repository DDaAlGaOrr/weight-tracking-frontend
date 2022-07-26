export interface Weight {
	date:Date,
	weight:number
}

export const DEFAULT_WEIGHT:Weight={
	date: new Date(Date.now()),
	weight:0
}