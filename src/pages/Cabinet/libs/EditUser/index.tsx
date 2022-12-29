/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IUser } from 'core/models/user';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { updateMe, updatePassword } from 'store/auth/api';

interface IEditUserProps {
    user: IUser | null;
    onClose: Function;
    setUser: Function;
}

async function uploadAvatar(avatarFile: File): Promise<string | null> {
    try {
        // Set up form data
        const formData = new FormData();
        formData.append('image', avatarFile);

        // Send POST request to Imgur API to upload image
        const response = await axios.post(
            'https://api.imgur.com/3/image',
            formData,
            {
                headers: {
                    Authorization: 'Client-ID 82a000d086b1f1e',
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        // Return URL of uploaded image
        return response.data.data.link;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function EditUser(props: IEditUserProps) {
    const { user, onClose, setUser } = props;

    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [email, setEmail] = useState(user?.email || '');
    const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files != null) {
            const avatarFile = event.target.files[0];
            console.log(avatarFile);

            const newAvatarUrl = await uploadAvatar(avatarFile);
            if (newAvatarUrl) {
                setAvatarUrl(newAvatarUrl);
            }
        }
    };

    const handleSave = async () => {
        // send PATCH request to API
        const updatedUser = {
            ...user,
            firstName,
            lastName,
            phone: '+' + phone?.replace(/\D/g, ''),
            email,
            avatarUrl,
        };

        if (password.length > 0) {
            updatePassword(password);
        }

        const updatedUserResponse = await updateMe(updatedUser);
        setUser(updatedUserResponse);
        setPassword('');
        // console.log('updatedUser', updatedUserResponse);
        
        onClose();
    };
    const handleCancel = () => {
        onClose();
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">{user?.fullName}</h1>
            <p className="text-gray-500">{user?.email}</p>
            <div className="flex flex-col gap-4 mt-8">
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Имя</span>
                    <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
                        type="text"
                        name="fullName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Фамилия</span>
                    <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
                        type="text"
                        name="fullName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Телефон</span>
                    <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Email</span>
                    <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">New Password</span>
                    <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Аватар</span>
                    <div className="flex items-center mt-2">
                        <input type="file" className="hidden" onChange={handleFileChange} />
                        <button
                            className="px-4 py-2 text-sm font-bold text-orange bg-white rounded-lg focus:outline-none"
                            onClick={() => {
                                (
                                    document.querySelector(
                                        'input[type="file"]'
                                    ) as HTMLInputElement
                                ).click();
                            }}
                        >
                            Выбрать файл
                        </button>
                        {avatarUrl ? (
                            <img
                                src={avatarUrl}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full ml-4"
                            />
                        ) : (
                            <span className="text-sm font-semibold text-gray-600 ml-4">
                                Файл не выбран
                            </span>
                        )}
                    </div>
                </label>
            </div>
            <div className="py-4">
                <a
                    className="mt-8 px-4 py-2 text-sm font-bold text-white bg-orange rounded-full"
                    onClick={handleSave}
                >
                    Сохранить
                </a>
                <a
                    className="px-4 py-2 text-sm font-bold text-orange bg-white rounded-full"
                    onClick={handleCancel}
                >
                    Отмена
                </a>
            </div>
        </div>
    );
}

export default EditUser;
