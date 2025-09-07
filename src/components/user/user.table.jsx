import { Table, Popconfirm, notification } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import DetailUserModal from './detail.user.modal';
import { deleteUserApi } from '../../services/api.services';

const cancel = e => {
    console.log(e);
    notification.error('Không xoá user');
};

const UserTable = (props) => {

    const { dataUsers, loadUser } = props;
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);
    const [setDataDelete] = useState(null);

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
                    <Popconfirm
                        title="Delete user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDeleteButton(record._id)}
                        onCancel={cancel}
                        okText="Delete"
                        cancelText="Cancel"
                        placement='left'
                    >
                        <DeleteOutlined
                            onClick={() => {
                                setDataDelete(record);
                            }}
                            style={{ cursor: 'pointer', color: 'red' }}
                        />
                    </Popconfirm>

                </div>
            ),
        },
    ];
    const handleDeleteButton = async (id) => {
        await deleteUserApi(id).then(async (res) => {
            if (res.data) {
                notification.success({
                    message: "Delete user",
                    description: "Xoá user thành công"
                });
                await loadUser();
            } else {
                notification.error('Error delete user: ' + JSON.stringify(res.message));
            }
        });
    }
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
                loadUser={loadUser}
            />
        </>
    );

}
export default UserTable;