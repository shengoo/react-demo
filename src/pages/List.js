import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../layouts/BasicLayout';

class List extends React.Component {
    render(){
        return (
            <div>
                <Link to='/create'><Button icon="plus" type="primary" >
                    新建
                </Button></Link>
            </div>
        )
    }
}

export default List;
