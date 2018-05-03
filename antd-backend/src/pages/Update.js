import React from 'react';
import { Button, Icon } from 'antd';
import {Link, withRouter} from 'react-router-dom';

import Layout from '../layouts/BasicLayout';

class Update extends React.Component {
    render(){
        const { history } = this.props;
        return (
            <div>
                <Button type="primary" onClick={() => history.goBack()}>
                    <Icon type="left" />返回
                </Button>
            </div>
        )
    }
}

export default withRouter(Update);
