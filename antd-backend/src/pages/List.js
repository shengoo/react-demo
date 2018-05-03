import React from 'react';
import {Button, Table, Icon, Divider} from 'antd';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

import Layout from '../layouts/BasicLayout';

import actions from '../actions/dataActions';

const { Column, ColumnGroup } = Table;



const columns = [{
    title: 'id',
    dataIndex: 'show.id',
}, {
    title: 'name',
    dataIndex: 'show.name',
}, {
    title: 'score',
    dataIndex: 'score',
    key: 'score',
}, {
    title: 'status',
    dataIndex: 'show.status',
}, {
    title: 'image',
    dataIndex: 'image',
    render: (text, record) => {
        return <img src={record.show.image.medium} />;
    },
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <Link to={'/detail/' + record.show.id}>详情</Link>
            <Divider type="vertical"/>
            <Link to={'/update/' + record.show.id}>编辑</Link>
            <Divider type="vertical"/>
            <a href="#">删除</a>
        </span>
    ),
}];


class List extends React.Component {

    componentDidMount(){
        if(!this.props.data.items.length) {
            this.props.dispatch(actions.fetchDataRequest());
            fetch('http://api.tvmaze.com/search/shows?q=batman')
                .then(response => response.json())
                .then(responseJson => {
                    this.props.dispatch(actions.fetchDataSuccess(responseJson));
                })
                .catch(e => this.props.dispatch(actions.fetchDataFailed()));
        }
    }

    render() {
        return (
            <div>
                <p>
                    <Link to='/create'>
                        <Button icon="plus" type="primary">
                            新建
                        </Button>
                    </Link>
                </p>
                <Table dataSource={this.props.data.items || []}
                       rowKey={(item) => item.show.id}
                       columns={columns}
                       loading={this.props.data.isFetching}
                       pagination={false}
                />
            </div>
        )
    }
}

export default withRouter(connect((state) => ({data: state.data}))(List));
