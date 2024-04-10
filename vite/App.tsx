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

const { Header, Sider, Content } = Layout;
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const { Meta } = Card;
const App: React.FC = () => {
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
  

  <div className="container">
<h1 className='test1'>What would you like to work on today?</h1>
    <Row gutter={16} justify="center">
      <Col className="gutter-row" span={6}>
      <Link to="/welcome">
      <Card hoverable style={{ width: 300, height: 120, marginTop: 16 }} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Company Research"
          description="I'd like to analyze a company."
        />
      </Card>
      </Link>
      </Col>
      <Col className="gutter-row" span={6}>
      <Card hoverable style={{ width: 300, height: 120,marginTop: 16 }} onClick={() => alert("Hello from here")}>
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Study a topic"
          description="Study the U.S. energy industyr."
        />
      </Card>
      </Col>
      <Col className="gutter-row" span={6}>
      <Card hoverable style={{ width: 300, height: 120, marginTop: 16 }} onClick={handleClick} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Process some files"
          description="summarize my highlights in a PDF."
        />
      </Card>
      </Col>

    </Row>
    </div>
        </Content>

      </Layout>
    </Layout>
    
  );
};

export default App;