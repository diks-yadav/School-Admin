import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Dashboard from "./Dashboard";
import { Link, Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "white",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "yellow",
  width: "100%",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "100%",
  lineHeight: "100px",
  color: "#fff",
  backgroundColor: "black",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "white",
  minHeight: "700px",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "gray",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: "calc(100% - 8px)",
};
export default function DashboardLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const email = localStorage.getItem("email");
  console.log("login", email);

  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Dashboard />
        </Header>
        <Layout>
          {email ? (
            <Sider width="25%" style={siderStyle}>
              <ul type="none">
                <Link to="/">
                  <li className="hover:bg-blue-800 hover:text-white  rounded mr-2">
                    Home
                  </li>
                </Link>
                <hr />
                <Link to="attendance">
                  <li className="hover:bg-blue-800 hover:text-white rounded mr-2">
                    Attendance
                  </li>
                </Link>
                <hr />

                <Link to="test">
                  <li className="hover:bg-blue-800 hover:text-white rounded mr-2">
                    Test
                  </li>
                </Link>
                <hr />

                <Link to="study-material">
                  <li className="hover:bg-blue-800 hover:text-white rounded mr-2">
                    Study Material
                  </li>
                </Link>
                <hr />

                {/* <li><Link to="sider1">Test</Link></li> */}
              </ul>
            </Sider>
          ) : (
            ""
          )}
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          &#169; All Rigth Reserved By Tech-Hub {new Date().getFullYear()}
        </Footer>
      </Layout>
    </div>
  );
}
