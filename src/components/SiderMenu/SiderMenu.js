import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './SiderMenu.css'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const { Sider } = Layout;

const SiderMenu = ({collapsed,path, dispatch}) => (
    <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
    >
        <div className="logo"><h1>Hello</h1></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[path]} onClick={(e) => {dispatch({type:'@@router/LOCATION_CHANGE',payload:{pathname:e.key}})}}>
            <Menu.Item key="/">
                <Icon type="user"/>
                <span>Home</span>
            </Menu.Item>
            <Menu.Item key="/about">
                <Icon type="video-camera"/>
                <span>About</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload"/>
                <span>nav 3</span>
            </Menu.Item>
        </Menu>
    </Sider>

)


export default connect(state => ({collapsed: state.menuReducer.menuCollapsed, path: state.router.location.pathname}))(SiderMenu);


