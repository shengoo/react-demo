import React from 'react';
import { connect } from 'react-redux';
import './BasicLayout.css';
import { Layout, Icon, message, Menu, Avatar } from 'antd';
import actions from '../actions/menuActions';
import ActionTypes from '../actions/ActionTypes';
import SiderMenu from '../components/SiderMenu/SiderMenu';
import AppHeader from '../components/Header/Header';
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
    render() {
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <AppHeader />
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );        
    }
}


export default connect(state => ({collapsed: state.menuReducer.menuCollapsed}))(BasicLayout);
