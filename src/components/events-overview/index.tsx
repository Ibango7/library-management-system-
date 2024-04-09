'use client'
import React from 'react'
import { Carousel } from 'antd';
import styles from './styles/event.module.scss';

const EventOverview: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Quick look of what is happening</h2>
        <Carousel >
            <div>
            <h3 className={styles.contentStyle}>Event 1</h3>
            </div>
            <div>
            <h3 className={styles.contentStyle}>Event 2</h3>
            </div>
            <div>
            <h3 className={styles.contentStyle}>Event 3</h3>
            </div>
            <div>
            <h3 className={styles.contentStyle}>Event 4</h3>
            </div>
        </Carousel>
      </div>
  )
}

export default EventOverview
