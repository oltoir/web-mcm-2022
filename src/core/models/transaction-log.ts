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
    }
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
    }
}
