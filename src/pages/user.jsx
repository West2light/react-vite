import { useState, useEffect } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.services";

const UsersPage = () => {
    //lift-up state
    const [dataUsers, setDataUsers] = useState([
        {
            _id: "Dong",
            fullName: 21,
            email: "Ha Noi"
        },
    ]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data) {
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        setDataUsers(res.data.result);
    }
    //empty array => run once
    // not empty array => run when dependency change => next value !== previous value
    useEffect(() => {
        loadUser();
    },
        [current, pageSize] //[] + condition
    );
    console.log(">>> Check Current: ", current)
    console.log(">>> Check pageSize: ", pageSize)
    return (
        <div style={{ padding: "20px" }}>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    );
}
export default UsersPage;