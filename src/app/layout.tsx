'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, Flex, Menu} from 'antd';
import styles from './layout-style.module.scss';
import NavBar from "@/components/top-navbar";
import AppProviders from "@/providers/appProviders/indext";
import { useState } from "react";
import {usePathname} from 'next/navigation';

const { Header, Footer, Content } = Layout;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // check if route is to the admin and render layout accordingly
  const isCurrentRouteAdmin =  usePathname() === '/admin';
  const [useAdmin, setAdmin] = useState(isCurrentRouteAdmin);


  return (
    <AppProviders>
        <html lang="en">
          <body className={inter.className}>
            <Flex gap="middle" wrap="wrap">
              <Layout className={styles.layoutStyle}>
                {/* <div className={styles.headerSection}> */}
                <Header className={styles.headerStyle}>
                  <NavBar />
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
