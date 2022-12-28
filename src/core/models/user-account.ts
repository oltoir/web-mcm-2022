// UserAccount:
// id: int
// user_id: int
// sum: float
// bonuses: float
// card_number: str
// kind: enum[JUSAN, OTHER]
// expiration_date: date

export interface IUserAccount {
	id?: number;
	userId?: number;
	sum?: number;
	bonuses?: number;
	cardNumber?: string;
	kind?: string;
	expirationDate?: string;
}

export function toUserAccount(data: any): IUserAccount {
	return {
		id: data.id,
		userId: data.user_id,
		sum: data.sum,
		bonuses: data.bonuses,
		cardNumber: data.card_number,
		kind: data.kind,
		expirationDate: data.expiration_date,
	};
}

export function toUserAccountDTO(userAccount: IUserAccount) {
	return {
		id: userAccount.id,
		user_id: userAccount.userId,
		sum: userAccount.sum,
		bonuses: userAccount.bonuses,
		card_number: userAccount.cardNumber,
		kind: userAccount.kind,
		expiration_date: userAccount.expirationDate,
	};
}
