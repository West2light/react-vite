import { Input, Form, Button, notification, Row, Col } from "antd";
import { registerUserAPI } from "../services/api.services";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (value) => {
        console.log(">>> check value: ", value);
        //call api register

        const res = await registerUserAPI(
            value.fullName,
            value.email,
            value.password,
            value.phone,
        );
        if (res.data) {
            notification.success({
                message: "Register successfully!",
                description: "Đăng ký tài khoản thành công!"
            });
            navigate("/login");
        } else {
            notification.error({
                message: "Register failed!",
                description: JSON.stringify(res.message)
            });
        }
    }

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            form={form}
        >
            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="FullName"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%\-_=+<>])([a-zA-Z0-9!@#$%\-_=+<>]+)$/,
                                message: 'Mật khẩu phải có ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt (!@#$%-_=+<>)'
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: 'Wrong format phone number!' // regx phone number check antd
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <Col xs={24} md={8}>
                    <div>
                        <Button
                            onClick={() => form.submit()}
                            type="primary">Register</Button>
                        {/* 
                    gioi thieu them 2 API getFieldsValue va setFieldsValue
                    1. getFieldsValue: lay toan bo gia tri trong form dua tren name
                    2. setFieldsValue: set gia tri cho tung truong dua tren name
                    2 API nay khong can phai import vi no da duoc antd cung cap san trong form
                    Phân biệt số nhiều với số ít
                    Form co the co nhieu truong (field) nen dung getFieldsValue va setFieldsValue
                    Input chi la 1 truong (field) nen dung getFieldValue va setFieldValue */}
                        {/* <Button
                        onClick={() => {
                            form.setFieldsValue({
                                email: "dong004@gmail.com",
                                fullName: "Dong",
                            })
                            console.log(">>> check form: ", form.getFieldsValue());
                        }}
                    >Test</Button> */}
                    </div>
                </Col>
            </Row>
        </Form >
    );
}
export default RegisterPage;