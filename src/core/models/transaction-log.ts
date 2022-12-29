/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
// TransactionLog
// id: int
// created_at: datetime
// updated_at: datetime
// sum: int
// kind: enum[TRANSFER, PURCHASE, PAYMENT]
// user_id: int # Юзер совершивший транзакцию
// order_id: Optional[int] # Что купил
// recipient_account_id: Optional[int] # Карта которая получила деньги
// payment_id: Optional[int] # Совершенный платеж

export interface ITransactionLog {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
	sum?: number;
	kind?: string;
	userId?: number;
	orderId?: number;
	recipientAccountId?: number;
	paymentId?: number;
}

export function toTransactionLog(data: any): ITransactionLog {
	return {
		id: data.id,
		createdAt: data.created_at,
		updatedAt: data.updated_at,
		sum: data.sum,
		kind: data.kind,
		userId: data.user_id,
		orderId: data.order_id,
		recipientAccountId: data.recipient_account_id,
		paymentId: data.payment_id,
	};
}

export function toTransactionLogDTO(transactionLog: ITransactionLog) {
	return {
		id: transactionLog.id,
		created_at: transactionLog.createdAt,
		updated_at: transactionLog.updatedAt,
		sum: transactionLog.sum,
		kind: transactionLog.kind,
		user_id: transactionLog.userId,
		order_id: transactionLog.orderId,
		recipient_account_id: transactionLog.recipientAccountId,
		payment_id: transactionLog.paymentId,
	};
}


// export interface ITransactionTransfer {
// 	id: number;
// 	sum: number;
// 	kind: 'TRANSFER';
// 	recipient_account: {
// 		id: number,
// 		card_number: string,
// 	};
// 	payment?: never;
// 	order?: never;
// }

// export interface ITransactionPurchase {
// 	id: number;
// 	sum: number;
// 	kind: 'PURCHASE';
// 	recipient_account?: never;
// 	order: {
// 		id: number,
// 		sum: number,
// 	};
// 	payment?: never;
// }

// export interface ITransactionPayment {
// 	id: number;
// 	sum: number;
// 	kind: 'PAYMENT';
// 	recipient_account?: never;
// 	order?: never;
// 	payment: {
// 		id: number,
// 		title: string,
// 	};
// }

// export type ITransaction = ITransactionTransfer | ITransactionPurchase | ITransactionPayment;

export class Transaction {
	id: number;
	sum: number;
	kind: string;
	recipient_account: any;
	payment: any;
	order: any;

	constructor(data: any) {
		this.id = data.id;
		this.sum = data.sum;
		this.kind = data.kind;
		this.recipient_account = data.recipient_account;
		this.payment = data.payment;
		this.order = data.order;
	}

	getKindText(): string {
		switch (this.kind) {
			case 'TRANSFER':
				return 'Перевод';
			case 'PURCHASE':
				return 'Покупка';
			case 'PAYMENT':
				return 'Оплата';
			default:
				return '';
		}
	}

	getFeatureText(): string {
		switch (this.kind) {
			case 'TRANSFER':
				return 'Перевод на счет: ' + this.recipient_account.card_number;
			case 'PURCHASE':
				return `Покупка №${this.order.id}`;
			case 'PAYMENT':
				return `Оплата услуги: ${this.payment.title}`;
			default:
				return '';
		}
	}
}