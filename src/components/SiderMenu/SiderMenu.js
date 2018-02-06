import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './SiderMenu.css'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const { Sider } = Layout;

const SiderMenu = ({collapsed}) => (
    <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
    >
        <div className="logo"><h1>Hello</h1></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="user"/>
                <span><Link to="/">Home</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="video-camera"/>
                <span><Link to="/about">About</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload"/>
                <span>nav 3</span>
            </Menu.Item>
        </Menu>
    </Sider>

)


export default connect(state => ({collapsed: state.menuReducer.menuCollapsed}))(SiderMenu);


