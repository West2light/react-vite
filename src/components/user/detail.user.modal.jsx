import React from 'react';
import { Drawer, Button, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile } from '../../services/api.services';
import { updateUserAvatarAPI } from '../../services/api.services';
const DetailUserModal = (props) => {
    const { isModalDetailOpen, setIsModalDetailOpen, dataDetail, setDataDetail, loadUser } = props;
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const onClose = () => {
        setDataDetail(null);
        setIsModalDetailOpen(false)
    };
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
        // I've kept this example simple by using the first image instead of multiple
        // setSelectedFile(event.target.files[0])
    }
    const handleUpdateUserAvater = async () => {
        //step 1: upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        console.log(">>> check res upload file: ", resUpload);
        //step 2: update user
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
            if (resUpdateAvatar.data) {
                setIsModalDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Update avatar",
                    description: "Cập nhật avatar thành công"
                })
                //update dataDetail
            } else {
                notification.error({
                    message: "Error update avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
            // scuccess
            notification.success({
                message: "Upload file",
                description: "Upload file thành công"
            });

        } else {
            //failed
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message)
            })
        }
    }
    return (
        <Drawer
            title={`Detail User: ${dataDetail?.fullName}`}
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={isModalDetailOpen}
            width={"25vw"}
        >
            {
                dataDetail ?
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p>Id: {dataDetail?._id}</p>
                        <p>Full Name: {dataDetail?.fullName}</p>
                        <p>Email: {dataDetail?.email}</p>
                        <p>Phone: {dataDetail?.phone}</p>
                        <p>Avatar:</p>
                        <div
                            style={{
                                marginTop: '10px',
                                height: '200px',
                                width: '200px',
                                border: '1px solid gray',
                            }}>
                            <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`} alt="" />

                            <div>
                                <label
                                    style={{ display: 'block', marginTop: '15px', width: 'fit-content', borderRadius: '5px', padding: '5px 10px', backgroundColor: 'orange', cursor: 'pointer' }}
                                    htmlFor="avatar-upload">Upload Avatar</label>
                                <input
                                    type="file" hidden id="avatar-upload"
                                    onChange={(event) => handleOnChangeFile(event)} />
                            </div>
                            {preview
                                &&
                                <>
                                    <div
                                        style={{
                                            marginTop: '10px',
                                            height: '200px',
                                            width: '200px',
                                            marginBottom: '10px',
                                        }}>
                                        <img
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            src={preview} alt="" />

                                        <Button
                                            type='primary'
                                            onClick={() => handleUpdateUserAvater()}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </>
                            }
                        </div>
                    </span>
                    : <p>No user details available</p>
            }
        </Drawer >
    );
};
export default DetailUserModal;