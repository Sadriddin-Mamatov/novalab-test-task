import React, { useState } from 'react';
import {
  ExclamationCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMenu } from './useMenu';
import { Wrapper } from './style';
import { clearStorage } from '@/utils/clearStorage';
import { Navbar } from '../navbar';
const { confirm } = Modal;
const { Header, Content, Footer, Sider } = Layout;
import ImgLog from "../../assets/logoa.png"

export const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const { items } = useMenu();
  const { pathname } = useLocation();
  const navigation = useNavigate();

  return (
    <Wrapper>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={320}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo">
            <img src={ImgLog} alt="logo-im" className='icon-logo' />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[pathname?.replace('/admin', '') ?? selectedLink]}
            items={items}
            onClick={({ key }) => {
              if (key === 'logout') {
                confirm({
                  title: 'Do you want to log out?',
                  icon: <ExclamationCircleOutlined />,
                  onOk() {
                    clearStorage();
                    navigation(`/login`);
                  },
                  cancelText: 'Cancel',
                  onCancel() {
                    console.log('Cancel');
                  },
                });
              } else {
                navigation(`/${key}`);
                setSelectedLink(selectedLink);
              }
            }}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: !collapsed ? 320 : 80,
          }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              paddingLeft: 16,
              paddingRight: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Navbar />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 32,
              minHeight: 'calc(100vh - 180px)',
              background:
                pathname !== '/admin/statistics' ? '#fff' : 'transparent',
            }}
          >
            {children}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Created by Sadriddin | Admin - @2023
          </Footer>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};
