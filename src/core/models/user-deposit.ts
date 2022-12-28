// UserDeposit: # 1% per month
// id: int
// user_id: int
// sum: int

export interface IUserDeposit {
	id?: number;
	userId?: number;
	sum?: number;
}

export function toUserDeposit(data: any): IUserDeposit {
	return {
		id: data.id,
		userId: data.user_id,
		sum: data.sum,
	};
}

export function toUserDepositDTO(userDeposit: IUserDeposit) {
	return {
		id: userDeposit.id,
		user_id: userDeposit.userId,
		sum: userDeposit.sum,
	};
}
