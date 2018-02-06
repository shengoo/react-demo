import React from 'react';
//import { Layout, Icon, message } from 'antd';
// import DocumentTitle from 'react-document-title';
// import { ContainerQuery } from 'react-container-query';
import { Link } from 'react-router-dom';
import './BasicLayout.css';
import { Layout, Icon, message, Menu } from 'antd';
import SiderMenu from '../components/SiderMenu/SiderMenu';
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <Header style={{ background: '#fff', }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );        
    }
}

export default BasicLayout;
