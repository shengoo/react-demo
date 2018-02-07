import React from 'react';
import { Button, Icon, Spin } from 'antd';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layouts/BasicLayout';
import actions from "../actions/dataActions";

import './Detail.css';

class Detail extends React.Component {

    componentDidMount(){
        if(!this.props.detail){
            const id = this.props.match.params.id;
            this.props.dispatch(actions.fetchDetailRequest(id));
            fetch('http://api.tvmaze.com/shows/' + id)
                .then(response => response.json())
                .then(responseJson => {
                    this.props.dispatch(actions.fetchDetailSuccess(responseJson));
                })
                .catch(e => this.props.dispatch(actions.fetchDetailFailed(id)));
        }
    }

    render(){//console.log(this.props.match.params.id);
        const { history, detail } = this.props;
        return (
            <div>
                <Button type="primary" onClick={() => history.goBack()}>
                    <Icon type="left" />返回
                </Button>
                {
                    !detail &&
                    <div className="example">
                        <Spin />
                    </div>
                }
                {
                    detail &&
                    <div>
                        id: {detail.id}
                        <div><img src={detail.image.original} /></div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(connect((state,ownProps) => ({detail: state.data.details.find(x => x.id == ownProps.match.params.id)}))(Detail));
