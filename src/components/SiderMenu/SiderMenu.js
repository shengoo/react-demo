import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './SiderMenu.css'
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
const { Sider } = Layout;

class SiderMenu extends React.Component{
    render(){
        const {collapsed,router, dispatch, history} = this.props;
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo"><h1>Hello</h1></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.location.pathname]}
                      onClick={(e) => {
                          history.push(e.key);
                      }}
                >
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
    }
}


//withRouter
export default withRouter(connect(state => ({collapsed: state.menuReducer.menuCollapsed, router: state.router}))(SiderMenu));


