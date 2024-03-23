'use client'
import React from 'react';
import { Card, Row, Col } from 'antd';
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
import styles from './styles/categories.module.scss';
import Link from 'next/link';

const { Meta } = Card;

interface Category {
    name: string;
    image: StaticImageData;
    route: string; 
  }  
  // Categories
  const categories:Category[] = [
    { name: 'Parenting', image: parenting, route:'/parenting' },
    { name: 'Economics', image: economics, route:'/economics' },
    { name: 'Science', image: science, route:'/science' },
    { name: 'Entrepreneurship', image: entrepreneurship,  route:'/entrepreneurship' },
    { name: 'Psychology', image: psychology, route:'/psychology' },
    { name: 'Money', image: money, route:'/money' },
    { name: 'Health', image: health, route:'/health'},
    { name: 'Marriage', image: marriage, route:'/marriage' },
    { name: 'Exercise', image: exercise, route:'/exercise'},
    { name: 'Politics', image: politics, route:'/politics' },
    { name: 'History', image: history, route:'/history'},
    { name: 'Biography', image: biography, route:'/biography'}
  ]

const Categories: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.textAlignLeft}>Categories</h1>
      <p>Find relevant titles for upgrading your mindset!</p>
      <Row gutter={[80, 20]}>
        {categories.map((category, index) => (
          <Col key={index} span={6}>
           <Link href={`/categories${category.route}`}>
            <Card className={styles.card}
            cover={<Image src={category.image} alt={category.name} className={styles.imageStyle} />}
            >
              <Meta title={category.name} />
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Categories
