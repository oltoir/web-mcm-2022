/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IUser } from "core/models/user";
import axios from 'axios';
import { ChangeEvent, useState } from "react";
// import ImgurUploader from "./ImgurUpload";

interface IEditUserProps {
    user: IUser | null;
    onClose: () => void;
}

async function uploadAvatar(avatarFile: File): Promise<string | null> {
    try {
        // Set up form data
        const formData = new FormData();
        formData.append('image', avatarFile);

        // Send POST request to Imgur API to upload image
        const response = await axios.post('https://api.imgur.com/3/image', formData, {
            headers: {
                'Authorization': 'Client-ID 82a000d086b1f1e',
                'Content-Type': 'multipart/form-data'
            }
        });

        // Return URL of uploaded image
        return response.data.data.link;
    } catch (error) {
        console.error(error);
        return null;
    }
}


function EditUser(props: IEditUserProps) {
    const { user, onClose } = props;

    const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl);

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files != null) {
            const avatarFile = event.target.files[0];
            console.log(avatarFile);

            const newAvatarUrl = await uploadAvatar(avatarFile);
            if (newAvatarUrl) {
                setAvatarUrl(newAvatarUrl);
            }
        }
    }

    const handleSave = () => {
        onClose();
    }

    const handleCancel = () => {
        onClose();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">{user?.fullName}</h1>
            <p className="text-gray-500">{user?.email}</p>
            <div className="flex flex-col gap-4 mt-8">
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">ФИО</span>
                    <input className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white" type="text" name="fullName" value={user?.fullName} />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Телефон</span>
                    <input className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white" type="text" name="phone" value={user?.phone} />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Email</span>
                    <input className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:bg-white" type="text" name="email" value={user?.email} />
                </label>
                <label className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600">Аватар</span>
                    <div className="flex items-center mt-2">
                        <input type="file" className="hidden" onChange={handleFileChange} />
                        <button className="px-4 py-2 text-sm font-bold text-orange bg-white rounded-lg focus:outline-none" onClick={() => {
                            (document.querySelector('input[type="file"]') as HTMLInputElement).click();
                        }}>
                            Выбрать файл
                        </button>
                        {avatarUrl ? (
                            <img src={avatarUrl} alt="Avatar" className="w-12 h-12 rounded-full ml-4" />
                        ) : (
                            <span className="text-sm font-semibold text-gray-600 ml-4">Файл не выбран</span>
                        )}
                    </div>
                </label>
            </div>
            <div className="py-4">
                <a className="mt-8 px-4 py-2 text-sm font-bold text-white bg-orange rounded-full" onClick={handleSave}>
                    Сохранить
                </a>
                <a className="px-4 py-2 text-sm font-bold text-orange bg-white rounded-full" onClick={handleCancel}>
                    Отмена
                </a>
            </div>
        </div>
    );
}

export default EditUser;
