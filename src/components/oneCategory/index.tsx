'use client'
import React from 'react';
import { Card, Row, Col } from 'antd';
import book1 from '../../../public/assets/book1.jpg'; 
import book2 from '../../../public/assets/book2.jpg'; 
import book3 from '../../../public/assets/book3.jpg';
import Image, { StaticImageData } from 'next/image';
import parenting from '../../../public/assets/family.png'; 
import economics from '../../../public/assets/economic.png';
import science from '../../../public/assets/science.png';
import entrepreneurship from '../../../public/assets/entrepreneurship.png';
import psychology from '../../../public/assets/brain.png';
import money from '../../../public/assets/profit.png';
import marriage from '../../../public/assets/wedding-couple.png'; 
import health from '../../../public/assets/healthcare.png'; 
import exercise from '../../../public/assets/workout.png'; 
import history from '../../../public/assets/history.png'; 
import politics from '../../../public/assets/conference.png';
import biography from '../../../public/assets/biography.png';  
import styles from './styles/oneCategory.module.scss';
import Link from 'next/link';
const { Meta } = Card;


// Category description
interface Descrip {[key: string]:string}
const categoryDescription:Descrip = {
  parenting: 'Learn valuable insights into effective parenting techniques.',
  economics: 'Explore the principles of economics and their impact on society.',
  science: 'Dive into the fascinating world of scientific discoveries and advancements.',
  entrepreneurship: 'Discover the key traits and strategies for successful entrepreneurship.',
  psychology:  'Explore the human mind and behavior with insights from psychology.',
  money: 'Learn essential financial management skills for personal and professional success.',
  marriage: 'Explore ways to maintain physical and mental well-being for a fulfilling life.',
  health: 'Discover the keys to building and maintaining a strong and loving marriage.',
  exercise: 'Explore different forms of exercise and their benefits for overall health.',
  history: 'Gain insights into political systems, ideologies, and their impact on society.', 
  politics: 'Explore the events and individuals that shaped our world throughout history.',
  biography: "Get a glimpse into what inspired and molded the world's most influential people."
  
}

// Icons per category
interface Icons {[key: string]: StaticImageData}
const icons: Icons = {
  parenting: parenting,
  economics: economics,
  science: science,
  entrepreneurship: entrepreneurship,
  psychology: psychology,
  money: money,
  marriage: marriage,
  health: health,
  exercise: exercise,
  history: history, 
  politics: politics,
  biography: biography
}


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
        <div className={styles.categoryTitle}>
          <div>
            <p>{Props.categoryId}</p>
            <p>{categoryDescription[Props.categoryId]}</p>
          </div>
          <Image src={icons[Props.categoryId]} className={styles.iconStyle} alt="icon"/>
        </div>
      <Row gutter={16}>
        {popularBooks.map((book, index) => (
          <Col key={index} span={6}>
            <Link href={`/bookSummary/${index}`}>
              <Card 
              cover= {<Image src={ index < 2 ?books[index]: books[index - index]} alt="book" className={styles.imageStyle} />}>
                <Meta title={book.title} description={`By ${book.author}`} />
              </Card>
            </Link> 
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default OneCategory
