import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme,Steps,Col, Divider, Row,Card,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './App.css'
import  StreamingResults  from './StreamingResults'
import SelectFiles from './SelectFiles';

const { Header, Sider, Content } = Layout;
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const { Meta } = Card;
const Welcome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        <Row>
          <Col span={8}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              
            }}
            
          />
          </Col>
          <Col span={5} offset={11}>
        <Menu
          theme="light"
          mode="horizontal"
         
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
        </Col>
        </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 800,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
          <Steps
    size="small"
    current={0}
    items={[
      {
        title: 'Upload Files',
      },
      {
        title: 'Define Module Logic',
      },
      {
        title: 'Output',
      },
    ]}
  />

<h2 className='test1'>It looks like the following files containing information about 'Apple'</h2>
<SelectFiles />

<Row className='next-row'>
      <Col span={3} offset={13}>
      <Button type="primary">Upload my own files</Button>
      </Col>
      <Col span={5} >
        <Link to="/create_module">
      <Button type="primary">Next step</Button>
      </Link>
      </Col>
    </Row>

        </Content>
      </Layout>
    </Layout>
  );
};


export default Welcome;