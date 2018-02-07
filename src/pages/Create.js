import React from 'react';
import { Button, Icon, Card, Form, Input, Tooltip, InputNumber, Radio, Select, DatePicker } from 'antd';
import {Link, withRouter} from 'react-router-dom';

import Layout from '../layouts/BasicLayout';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

class Create extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

    }

    render(){
        const { history } = this.props;
        return (
            <div>
                <p>
                <Button type="primary" onClick={() => history.goBack()}>
                    <Icon type="left" />返回
                </Button>
                </p>

                <Card bordered={false}>
                    <Form
                        onSubmit={this.handleSubmit}
                        hideRequiredMark
                        style={{ marginTop: 8 }}
                    >
                        <FormItem
                            label="标题"
                        >
                                <Input placeholder="给目标起个名字" />
                        </FormItem>
                        <FormItem
                            label="起止日期"
                        >
                            <RangePicker style={{ width: '100%' }} placeholder={['开始日期', '结束日期']} />

                        </FormItem>
                        <FormItem
                            label="目标描述"
                        >
                                <TextArea style={{ minHeight: 32 }} placeholder="请输入你的阶段性工作目标" rows={4} />

                        </FormItem>
                        <FormItem
                            label="衡量标准"
                        >
                                <TextArea style={{ minHeight: 32 }} placeholder="请输入衡量标准" rows={4} />

                        </FormItem>
                        <FormItem
                            label={
                                <span>
                  客户
                  <em >
                    （选填）
                    <Tooltip title="目标的服务对象">
                      <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                    </Tooltip>
                  </em>
                </span>
                            }
                        >
                                <Input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />

                        </FormItem>
                        <FormItem
                            label={<span>邀评人<em >（选填）</em></span>}
                        >

                                <Input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />

                        </FormItem>
                        <FormItem
                            label={<span>权重<em >（选填）</em></span>}
                        >
                                <InputNumber placeholder="请输入" min={0} max={100} />

                            <span>%</span>
                        </FormItem>
                        <FormItem
                            label="目标公开"
                            help="客户、邀评人默认被分享"
                        >
                            <div>
                                    <Radio.Group>
                                        <Radio value="1">公开</Radio>
                                        <Radio value="2">部分公开</Radio>
                                        <Radio value="3">不公开</Radio>
                                    </Radio.Group>
                                <FormItem style={{ marginBottom: 0 }}>
                                        <Select
                                            mode="multiple"
                                            placeholder="公开给"
                                        >
                                            <Option value="1">同事甲</Option>
                                            <Option value="2">同事乙</Option>
                                            <Option value="3">同事丙</Option>
                                        </Select>
                                </FormItem>
                            </div>
                        </FormItem>
                        <FormItem style={{ marginTop: 32 }}>
                            <Button type="primary" htmlType="submit" >
                                提交
                            </Button>
                            <Button style={{ marginLeft: 8 }}>保存</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default withRouter(Create);
