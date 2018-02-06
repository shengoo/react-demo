import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SiderMenu.css'
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

class SiderMenu extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        return (
        <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
        >
            <div className="logo" ><h1>Hello</h1></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span><Link to="/">Home</Link></span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span><Link to="/about">About</Link></span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        </Sider>

        )
    }

}

export default SiderMenu;

/*const menu = (props) => (
        <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
        >
            <div className="logo" ><h1>Hello</h1></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span><Link to="/">Home</Link></span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span><Link to="/about">About</Link></span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        </Sider>
);*/

//export default menu;
