import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function LeftNavigation() {
    return(<Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="菜单1">
          <Menu.Item key="1">1-01<Link to='/Component01' /></Menu.Item>
          <Menu.Item key="2">1-02<Link to='/Component02' /></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="菜单2">
            <Menu.Item key="3">1-01<Link to='/Component03' /></Menu.Item>
          <Menu.Item key="4">1-02<Link to='/Component04' /></Menu.Item>
        </SubMenu>
      </Menu>
      );
}

export default LeftNavigation;