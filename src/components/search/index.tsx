import React, { useEffect, useState } from 'react';
import { Input, List, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles/search.module.scss';
import Link from 'next/link';
import { makeLLMRequestRetrieval, searchBook} from '@/providers/SearchContext';

const { TabPane } = Tabs;
const { Search } = Input;

const CustomSearch: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("1"); // State to track active tab
  const [searchValue, setSearchValue] = useState<string>(""); // State to track search input value
  const [titleSearchValue, setTitleSearchValue] = useState<string>(""); // State to track title search input value
  const [authorSearchValue, setAuthorSearchValue] = useState<string>(""); // State to track author search input value



  const handleNaturalLanguageSearch = async (value: string) => {
    if (!value) {
      return;
    }
    setLoading(true);
    const userPrompt = value.trim();
    try {
      const response = await makeLLMRequestRetrieval(userPrompt);
      if (response) {
        setSearchResults([response.data.answer]);
      }
    } catch (error) {
      console.log("An error occurred while asking for a suggestion", error)
    }
    setLoading(false);
  };

  const handleTitleAuthorSearch = async (value: string) => {
    console.log("User input", value)
    const userPrompt = value.trim();
    setLoading(true);
    try {
      const response = await searchBook(userPrompt);
      if (response) {
        console.log("Response",response.result)

        const arr = [];
        for (let title in response.result){
          arr.push();
        }

        setSearchResults([response.result]);
      }
    } catch (error) {
      console.log("An error occurred while performing title/author search", error);
    }
    setLoading(false);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key); // Set active tab
    setSearchResults([]); // Clear search results when switching tabs
    setSearchValue(""); // Clear search input value when switching tabs
  };

  return (
    <div className={styles.container}>
      <Link href="/search">
        <h2 className={styles.textStyleText}>Search our Catalogue here</h2>
      </Link>
      <Tabs defaultActiveKey="1" centered onChange={handleTabChange}>
        <TabPane tab="Natural Language Search" key="1">
          <div className={styles.textStyle}>
            <Search
              placeholder="Tell me what do you feel like reading?"
              enterButton="Search"
              size="large"
              value={activeTab === "1" ? searchValue : ""}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleNaturalLanguageSearch}
              className={styles.searchInput}
              prefix={<SearchOutlined />}
              loading={loading}
            />
          </div>
        </TabPane>
        <TabPane tab="Title/Author Search" key="2">
          <div className={styles.textStyle}>
            <Search
              placeholder="Search by title"
              enterButton="Search"
              size="large"
              value={activeTab === "2" ? searchValue : ""}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleTitleAuthorSearch}
              className={styles.searchInput}
              prefix={<SearchOutlined />}
              loading={loading}
            />
          </div>
        </TabPane>
      </Tabs>
      <div className={styles.searchResults}>
        <h3>Search Results:</h3>
        <List
          bordered
          dataSource={searchResults}
          renderItem={(item) => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default CustomSearch;
