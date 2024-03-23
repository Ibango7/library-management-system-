// Import necessary modules from Ant Design
import React, { useState } from 'react';
import { Input, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles/search.module.scss';
import Link from 'next/link';

const { Search } = Input;

const CustomSearch: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]); // State to store search results

  // Dummy function to simulate search results
  const handleSearch = (value: string) => {
    // Replace this with your actual search logic
    setSearchResults(['Result 1', 'Result 2', 'Result 3']);
  };

  return (
    <div className={styles.container}>
      <Link href="/search">
          <h2 className={styles.textStyleText}>Search our Catalogue here</h2>
      </Link>
      <br></br>
      <span className={styles.textStyle}>
        <Search
          placeholder="Input search text"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          className={styles.searchInput} // Add your custom style here if needed
          prefix={<SearchOutlined />} // Icon before the search input
        />
      </span>
      {/* Section to display search results */}
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
