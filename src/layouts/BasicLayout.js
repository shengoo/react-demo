import React from 'react';
import { connect } from 'react-redux';
import './BasicLayout.css';
import { Layout, Icon, message, Menu } from 'antd';
import actions from '../actions/menuActions';
import ActionTypes from '../actions/ActionTypes';
import SiderMenu from '../components/SiderMenu/SiderMenu';
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
    render() {
        return (
            <Layout>
                <SiderMenu />
                <Layout>
                    <Header style={{ background: '#fff', }}>
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.props.dispatch(actions.collapse())}
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


export default connect(state => ({collapsed: state.menuReducer.menuCollapsed}))(BasicLayout);
