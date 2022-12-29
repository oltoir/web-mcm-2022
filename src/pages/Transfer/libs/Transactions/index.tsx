import { Transaction } from "core/models/transaction-log";
import { IUserAccount } from "core/models/user-account";
import { useEffect, useState } from "react";
import { getMyTransactions } from "store/auth/api";

interface IUserAccountProps {
    account: IUserAccount | null;
}

function Transactions(props: IUserAccountProps) {
    const { account } = props;

    useEffect(() => {
        getMyTransactions().then(transactionsList => {
            setTransactions(transactionsList);
        }).catch(console.error);
    }, [account]);

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    return (
        <>
            <h2 className="text-black font-bold text-4xl mt-12">Ваши транзакции</h2>

            <table className="mt-6 w-full border-collapse" style={{
                tableLayout: 'fixed'
            }}>
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-xl font-bold text-gray-800 uppercase bg-gray-100">№</th>
                        <th className="px-4 py-2 text-left text-xl font-bold text-gray-800 uppercase bg-gray-100">Сумма</th>
                        <th className="px-4 py-2 text-left text-xl font-bold text-gray-800 uppercase bg-gray-100">Вид транзакции</th>
                        <th className="px-4 py-2 text-left text-xl font-bold text-gray-800 uppercase bg-gray-100">Описание транзакции</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td className="px-4 py-2 text-left text-xm font-semibold text-gray-700">{transaction.id}</td>
                            <td className="px-4 py-2 text-left text-xm font-semibold text-gray-700">{transaction.sum} ₸</td>
                            <td className="px-4 py-2 text-left text-xm font-semibold text-gray-700">{transaction.getKindText()}</td>
                            <td className="px-4 py-2 text-left text-xm font-semibold text-gray-700">{transaction.getFeatureText()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Transactions;
