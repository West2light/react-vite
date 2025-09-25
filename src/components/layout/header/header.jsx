import { Link } from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const Header = () => {
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: <Link to="/users">Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to="/books">Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        {
            label: 'Cài đặt',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to="/login">Đăng nhập</Link>,
                    key: 'login'
                },
                {
                    label: <Link to="/register">Đăng ký</Link>,
                    key: 'register'
                }
            ]
        }

    ];
    const [current, setCurrent] = useState('');
    const onClick = e => {
        setCurrent(e.key);
    };
    return <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items} />;
}
export default Header;