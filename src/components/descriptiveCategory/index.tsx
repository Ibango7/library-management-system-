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
import styles from './styles/descriptivecategories.module.scss';
import Link from 'next/link';
const { Meta } = Card;

interface Category {
    name: string;
    image: StaticImageData; 
    description: string;
    route:string;
  }
  
  // Categories
  const categories:Category[] = [
    { name: 'Parenting', image: parenting, description: 'Learn valuable insights into effective parenting techniques.', route:'/parenting' },
    { name: 'Economics', image: economics, description: 'Explore the principles of economics and their impact on society.', route:'/economics' },
    { name: 'Science', image: science, description: 'Dive into the fascinating world of scientific discoveries and advancements.', route:'/science' },
    { name: 'Entrepreneurship', image: entrepreneurship, description: 'Discover the key traits and strategies for successful entrepreneurship.', route:'/entreprenuership' },
    { name: 'Psychology', image: psychology, description: 'Explore the human mind and behavior with insights from psychology.', route:'/psychology' },
    { name: 'Money', image: money, description: 'Learn essential financial management skills for personal and professional success.', route:'/money' },
    { name: 'Health', image: health, description: 'Explore ways to maintain physical and mental well-being for a fulfilling life.', route:'/health' },
    { name: 'Marriage', image: marriage, description: 'Discover the keys to building and maintaining a strong and loving marriage.', route:'/marriage'},
    { name: 'Exercise', image: exercise, description: 'Explore different forms of exercise and their benefits for overall health.' , route:'/exercise'},
    { name: 'Politics', image: politics, description: 'Gain insights into political systems, ideologies, and their impact on society.', route:'/politics'},
    { name: 'History', image: history, description: 'Explore the events and individuals that shaped our world throughout history.', route:'/history' },
    { name: 'Biography', image: biography, description: "Get a glimpse into what inspired and molded the world's most influential people.", route:'/biography'}
  ]

const DescriptiveCategory: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Categories</h2>
      <Row gutter={[80, 20]}>
        {categories.map((category, index) => (
          <Col key={index} span={6}>
            <Link href={`/categories${category.route}`}>
              <Card className={styles.card}
              cover={<Image src={category.image} alt={category.name} className={styles.imageStyle} />}
              >
                <Meta title={category.name} />
                <p>{category.description}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DescriptiveCategory
