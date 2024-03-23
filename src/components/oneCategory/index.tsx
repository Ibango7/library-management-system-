'use client'
import React from 'react';
import { Card, Row, Col } from 'antd';
import Image from 'next/image';
import book1 from '../../../public/assets/book1.jpg'; 
import book2 from '../../../public/assets/book2.jpg'; 
import book3 from '../../../public/assets/book3.jpg'; 
import styles from './styles/oneCategory.module.scss';

const { Meta } = Card;

  // Sample data for most popular books and recommended books
  const popularBooks = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
    { title: 'Book 4', author: 'Author 4' },
  ];

  const recommendedBooks = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
    { title: 'Book 4', author: 'Author 4' },
  ];

  const books = [book1, book2, book3];

interface Props {categoryId:string}
const OneCategory: React.FC<Props> = (Props) => {
  let i = 0;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.categoryTitle}>Category: {Props.categoryId}</div>
      <Row gutter={16}>
        {popularBooks.map((book, index) => (
          <Col key={index} span={6}>
            <Card 
            cover= {<Image src={ index < 2 ?books[index]: books[index - index]} alt="book" className={styles.imageStyle} />}>
              <Meta title={book.title} description={`By ${book.author}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default OneCategory
