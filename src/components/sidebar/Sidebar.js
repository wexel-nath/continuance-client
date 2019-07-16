import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["contacts"]}
        className="sidebar-menu"
      >
        <SubMenu
          key="contacts"
          title={
            <span>
              <Icon type="user" />
              Contacts
            </span>
          }
        >
          <Menu.Item key="contacts-new">
            <Link to="/contacts/new">Add New</Link>
          </Menu.Item>
          <Menu.Item key="contacts-search">
            <Link to="/contacts/search">Search</Link>
          </Menu.Item>
          <Menu.Item key="contacts-all">
            <Link to="/contacts">View All</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
