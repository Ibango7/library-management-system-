'use client'
import React, {useState, useEffect, useContext} from 'react';
import { Card, Row, Col } from 'antd';
import Image from 'next/image';
import book1 from '../../../public/assets/book1.jpg'; 
import book2 from '../../../public/assets/book2.jpg'; 
import book3 from '../../../public/assets/book3.jpg'; 
import styles from './styles/recommendation.module.scss';
import Link from 'next/link';
import { IBook, BookActionContext } from '@/providers/bookProvider/context';

const { Meta } = Card;

  // Sample data for most popular books and recommended books
  const popularBooks = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
    { title: 'Book 4', author: 'Author 4' },
  ];

  const recommendedBooks = [
    { title: 'Recommended Book 1', author: 'Recommended Author 1' },
    { title: 'Recommended Book 2', author: 'Recommended Author 2' },
    { title: 'Recommended Book 3', author: 'Recommended Author 3' },
    { title: 'Recommended Book 4', author: 'Recommended Author 4' },
  ];

  const books = [book1, book2, book3];

const Recommendation: React.FC = () => {
  const[trendingBooks, setTrendingBooks] = useState<IBook[]>();
  const {getRecommended} = useContext(BookActionContext);

  useEffect(() => {
    const handleTrends = async () =>{
      try{
        if(getRecommended){
          const response = await getRecommended();
          console.log("Trends", response.data.result);
          const newArray: IBook[] = [...response.data.result];
          setTrendingBooks(newArray);
        }
       
      }catch(error){
        console.log("Error trying to get book trends");
      }
    }

    handleTrends();
  },[]);

  let i = 0;
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.textAlignLeft}>Trending</h3>
      <Row gutter={[16, 16]}>
        {trendingBooks && trendingBooks.map((book, index) => (
          <Col key={index} span={6}>
            <Link href={`/bookSummary/${index}?categoryId=${book.genre}`}>
              <Card 
              className={styles.card}
              cover= {<img src={book.imageUrl} alt="book" className={styles.imageStyle} />}>
                <Meta title={book.title} description={`By ${book.author}`} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      {/* <h3 className={styles.textAlignLeft}>Most borrowed books</h3>
       <Row gutter={16}>
        {recommendedBooks.map((book, index) => (
          <Col key={index} span={6}>
            <Link href={`/bookSummary/${index}`}>
              <Card style={{ marginBottom: '16px', marginTop:"80px" }}
              cover= {<Image src={ index < 2 ?books[index]: books[index - index]} alt="book" 
              className={styles.cardSytle} />}>
                <Meta title={book.title} description={`By ${book.author}`} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>  */}
    </div>
  )
}

export default Recommendation
