import React from 'react';

import Layout from '../layouts/BasicLayout';

class List extends React.Component {
    render(){
        return (
            <Layout>{this.props.children}</Layout>
        )
    }
}

export default List;
