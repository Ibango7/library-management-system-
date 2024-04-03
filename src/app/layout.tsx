'use client';
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Layout, Flex} from 'antd';
import styles from './layout-style.module.scss';
import NavBar from "@/components/top-navbar";
// import { AuthProvider } from "@/providers/authProvider";
import AppProviders from "@/providers/appProviders/indext";

const {Header, Footer, Sider, Content} = Layout;
const inter = Inter({ subsets: ["latin"] });
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AppProviders>
        <html lang="en">
        <body className={inter.className}>
            <Flex gap="middle" wrap="wrap"> 
              <Layout className={styles.layoutStyle}>
                {/* <div className={styles.headerSection}> */}
                <Header className={styles.headerStyle}>
                <NavBar/>
                </Header>
                <Layout>
                  <Content className={styles.contentStyle}>
                    {children}
                  </Content>
                </Layout>
                <Footer className={styles.footerStyle}>Footer</Footer>
              </Layout>
          </Flex>
        </body>
      </html>
    </AppProviders>
  );
}
