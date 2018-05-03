import React from 'react';
import {Layout, Avatar, Icon} from 'antd';
import actions from "../../actions/menuActions";
import {connect} from "react-redux";

import './Header.css';

const {Header, Sider, Content} = Layout;

const AppHeader = ({collapsed, user, dispatch}) => (
    <Header style={{background: '#fff', padding: 0, display: 'flex', alignItems: 'center'}}>
        <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => dispatch(actions.collapse())}
        />
        <h1 style={{flex: 1, margin: 0,}}>这是一个后台</h1>
        {user.isAuthed && <div style={{padding: '0 24px'}}>
            <Avatar src={user.avatar} size='large' style={{margin: 10}}/>
            <span>{user.nickname}</span>
        </div>}
    </Header>
)

export default connect(state => ({collapsed: state.menuReducer.menuCollapsed, user: state.user}))(AppHeader);