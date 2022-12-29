/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { IUserAccount } from 'core/models/user-account';
import { useState } from 'react';
import { checkCardNumber, transfer } from 'store/auth/api';

interface IUserTransferProps {
    account: IUserAccount | null;
    updateAccount: (account: IUserAccount) => void;
}

function Transfer(props: IUserTransferProps) {
    const { account, updateAccount } = props;

    const [cardNumber, setCardNumber] = useState<string>('');
    const [sum, setSum] = useState<number>(0);
    const [cardInfo, setCardInfo] = useState<{
        id: number,
        cardNumber: string,
        kind: string,
        fee: number
    }>({
        id: 0,
        cardNumber: '',
        kind: '',
        fee: 0,
    });

    const [isCardNumberValid, setIsCardNumberValid] = useState<boolean>(false);

    const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanCardNumber = e.target.value.replace(/\D/g, '');
        if (cleanCardNumber.length > 16) return;
        setCardNumber(cleanCardNumber);
        const isValid = cleanCardNumber.match(/^[0-9]{16}$/) !== null;
        if (!isValid) {
            return setIsCardNumberValid(isValid);
        }

        // luhn algorithm
        let sum = 0;
        for (let i = 0; i < cleanCardNumber.length; i++) {
            let intVal = parseInt(cleanCardNumber.substr(i, 1));
            if (i % 2 === 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        setIsCardNumberValid(sum % 10 === 0);
    };

    const onChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target?.value?.match(/[^0-9.,]/g)) return;
        // check if already has dot
        // @ts-expect-error
        if (e.target?.value?.match(/[.,]/g) && e.target?.value?.match(/[.,]/g)?.length > 1) return;
        let cleanSum = parseFloat(e.target?.value?.replace(/[0-9].,/g, '') || '0');
        if (cleanSum < 0) cleanSum = 0;
        cleanSum = Math.min(account?.sum ?? 0, cleanSum);
        setSum(cleanSum);
    };

    const onTransfer = async () => {
        if (!isCardNumberValid || sum <= 0) return;
        const response = await transfer(sum, cardNumber);
        updateAccount(response);
    }


    const onCheckCardNumber = async () => {
        try {
            const cardInfo = await checkCardNumber(cardNumber);
            setCardInfo(cardInfo);
        } catch (error) {
            return setIsCardNumberValid(false);
        }
    };

    return (
        <div className='flex gap-5 bg-white rounded-3xl p-3 mt-6' style={{
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            {/* form to input card number, with button check card number */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-black font-bold text-4xl mt-6'>Перевод</h2>
                <div className='flex flex-col gap-2'>
                    <span className='text-gray-500'>Номер карты</span>

                    <input
                        type='text'
                        style={{
                            backgroundColor: isCardNumberValid ? '#F0FFF4' : '#FFF5F5',
                        }}
                        className='border-2 border-gray-300 rounded-md p-2'
                        value={cardNumber}
                        onChange={onChangeCardNumber}
                    />

                    <button
                        className='text-white text-base w-full rounded-full bg-orange'
                        disabled={!isCardNumberValid}
                        onClick={() => {
                            onCheckCardNumber();
                        }}
                    > Проверить карту </button>

                    {cardInfo?.id !== 0 && (
                        <div className='flex flex-col gap-2'>
                            <span className='text-gray-500'>Тип карты</span>
                            <span className='text-black font-bold'>{cardInfo.kind}</span>
                        </div>
                    )}

                    <span className='text-gray-500'>Сумма</span>
                    <input
                        type='number'
                        className='border-2 border-gray-300 rounded-md p-2'
                        value={sum}
                        onChange={onChangeSum}
                    />

                    {/* вывод комиисии и суммы к зачислению */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-500'>Комиссия</span>
                        <span className='text-black font-bold'>{cardInfo?.fee * 100} % | {cardInfo.fee * sum} ₸</span>

                        <span className='text-gray-500'>Сумма к зачислению</span>
                        <span className='text-black font-bold'>{sum - cardInfo.fee * sum} ₸</span>
                    </div>

                    <button
                        className='text-white text-base w-full  rounded-full bg-orange'
                        disabled={sum === 0 || !isCardNumberValid}
                        onClick={() => {
                            onTransfer();
                        }}
                    > Перевести </button>

                </div>
            </div>
        </div>
    );
}

export default Transfer;
