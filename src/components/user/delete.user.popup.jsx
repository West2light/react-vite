import React from 'react';
import { Button, message, Popconfirm } from 'antd';
const confirm = e => {
    console.log(e);
    message.success('Click on Yes');
};
const cancel = e => {
    console.log(e);
    message.error('Click on No');
};
const DeleteUserPopup = (props) => {
    console.log('>>> check props delete user popup: ', props);
    const { dataDelete, setDataDelete, loadUser, DeleteOutlined } = props;
    return (
        <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={confirm}
            onCancel={cancel}
        >
            <DeleteOutlined />
        </Popconfirm>
    );
};

export default DeleteUserPopup;