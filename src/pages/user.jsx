import { useState, useEffect } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.services";
import UpdateUserModal from "../components/user/update.user.modal";

const UsersPage = () => {
    //lift-up state
    const [dataUsers, setDataUsers] = useState([
        {
            _id: "Dong",
            fullName: 21,
            email: "Ha Noi"
        },
    ]);
    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
    }

    useEffect(() => {
        loadUser();
    },
        []
    );
    return (
        <div style={{ padding: "20px" }}>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
            />
        </div>
    );
}
export default UsersPage;