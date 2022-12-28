import { IUser } from "core/models/user";

interface IUserCardProps {
    user: IUser | null;
}

function UserCard(props: IUserCardProps) {
    const { user } = props;
    
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img className="w-32 h-32 rounded-full" src={user?.avatarUrl} alt="avatar" />
                <h1 className="mt-4 text-2xl font-bold">{user?.fullName}</h1>
                <p className="text-gray-500">{user?.email}</p>
            </div>
        </div>
    );
}

export default UserCard;
