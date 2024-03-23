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
import politcs from '../../../public/assets/conference.png'; 
import biography from '../../../public/assets/biography.png'; 
import styles from './styles/categories.module.scss';
const { Meta } = Card;

interface Category {
    name: string;
    image: StaticImageData; 
  }
  
  // Categories
  const categories:Category[] = [
    { name: 'Parenting', image: parenting },
    { name: 'Economics', image: economics },
    { name: 'Science', image: science },
    { name: 'Entrepreneurship', image: entrepreneurship },
    { name: 'Psychology', image: psychology },
    { name: 'Money', image: money },
    { name: 'Health', image: health },
    { name: 'Marriage', image: marriage },
    { name: 'Exercise', image: exercise },
    { name: 'Politics', image: politcs },
    { name: 'History', image: history },
    { name: 'Biography', image: biography }
  ]

const Categories: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.textAlignLeft}>Categories</h1>
      <p>Find relevant titles for upgrading your mindset!</p>
      <Row gutter={[80, 20]}>
        {categories.map((category, index) => (
          <Col key={index} span={6}>
            <Card className={styles.card}
            cover={<Image src={category.image} alt={category.name} className={styles.imageStyle} />}
            >
              <Meta title={category.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Categories
