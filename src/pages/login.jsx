import { ArrowRightOutlined } from '@ant-design/icons';
import { Input, Form, Button, Row, Col, Divider, message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/api.services';
import { useState } from 'react';
const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async (value) => {
        setLoading(true);
        const res = await loginAPI(
            value.email,
            value.password
        );
        if (res.data) {
            message.success("Đăng nhập thành công!");
            navigate("/");
        }
        else {
            notification.error({
                message: "Login failed!",
                description: JSON.stringify(res.message)
            });
        }
        setLoading(false);
    }

    return (

        <Row style={{ marginTop: "30px" }} justify={"center"}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", margin: "5px" }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}  
                        form={form}
                    >

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true, message: "Please input your email!"
                                },
                                {
                                    type: 'email', message: 'Email không đúng định dạng!'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <Button
                                    loading={loading}
                                    onClick={() => form.submit()}
                                    type="primary"> Đăng nhập</Button>
                            </div>
                            <div style={{ marginTop: 5, cursor: "pointer", color: "blue" }} onClick={() => navigate("/")}>
                                <p>Go to homepage <ArrowRightOutlined /></p>

                            </div>
                        </Row>
                    </Form >
                    <Divider />
                    <div style={{ textAlign: "center", width: "100%" }}>
                        Chưa có tài khoản? <a style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/register")}>Đăng ký tại đây</a>
                    </div>
                </fieldset>
            </Col>
        </Row >

    );
}
export default LoginPage;