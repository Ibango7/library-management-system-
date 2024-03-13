'use client'
import React from 'react'
import { Carousel } from 'antd';
import { useStyles } from './styles/styles';

const EventOverview = () => {
    const {styles} = useStyles();
  return (
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
  )
}

export default EventOverview
