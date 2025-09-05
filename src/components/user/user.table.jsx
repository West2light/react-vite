import { Table, Button } from 'antd';
import { fetchAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import DetailUserModal from './detail.user.modal';
import { deleteUserApi } from '../../services/api.services';
import DeleteUserPopup from './delete.user.popup';
const UserTable = (props) => {

    const { dataUsers, loadUser } = props;
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);
    const [dataDelete, setDataDelete] = useState(null);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => { setIsModalDetailOpen(true); setDataDetail(record); }} >{record._id}</a>
                );
            },
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <EditOutlined
                        onClick={() => {
                            setIsModalUpdateOpen(true);
                            setDataUpdate(record);
                        }}
                        style={{ cursor: 'pointer', color: 'orange' }} />

                    <DeleteOutlined
                        onClick={() => {
                            setDataDelete(record);
                        }}
                        style={{ cursor: 'pointer', color: 'red' }}
                    />

                </div>
            ),
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey="_id"
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <DetailUserModal
                isModalDetailOpen={isModalDetailOpen}
                setIsModalDetailOpen={setIsModalDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />
            <DeleteUserPopup
                dataDelete={dataDelete}
                setDataDelete={setDataDelete}
                loadUser={loadUser}
                DeleteOutlined={DeleteOutlined}
            />
        </>
    );

}
export default UserTable;