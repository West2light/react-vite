import React from 'react';
import { Drawer } from 'antd';
const DetailUserModal = (props) => {
    const { isModalDetailOpen, setIsModalDetailOpen, dataDetail, setDataDetail } = props;

    // const showDrawer = () => {
    //     setIsModalDetailOpen(true);
    // };
    const onClose = () => {
        setDataDetail(null);
        setIsModalDetailOpen(false);
    };
    return (
        <Drawer
            title={`Detail User: ${dataDetail?.fullName}`}
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={isModalDetailOpen}

        >
            {
                dataDetail ?
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p>Id: {dataDetail?._id}</p>
                        <p>Full Name: {dataDetail?.fullName}</p>
                        <p>Email: {dataDetail?.email}</p>
                        <p>Phone: {dataDetail?.phone}</p>
                    </span>
                    :
                    <p>No user details available</p>
            }
        </Drawer >
    );
};
export default DetailUserModal;