'use client';
import React from 'react';
import styles from './styles/styles.module.scss';
import Image from 'next/image';
import summaryImage from '../../../public/assets/ai-knowledge.png';
import searchImage from '../../../public/assets/search.png';
import eventImage from '../../../public/assets/calendar.png';


const AfterHeader: React.FC  = () => {
  return (
     <div className={styles.container}>
                <div className={styles.left}>
                
                  <div className={styles.leftInnerContainer}>
                      <div className='{styles.content}'>
                      {/* <h2>He who reads a  book is never the same person</h2> */}
                          <Image className={styles.imageFormat} src={summaryImage} alt="icon" />
                            <br></br>
                          <strong className={styles.heading}>AI enabled Library system</strong>
                          <p className={styles.text}>Get Book summaries and decide wether you want to rent it</p>
                        </div>
                        <div className='{styles.content}'>
                          <Image className={styles.imageFormat} src={searchImage} alt="icon" /> 
                          <br></br>
                          <strong className={styles.heading}>Optmized recomendation</strong>
                          <p className={styles.text}>Recomendation based on your interests and what others are reading</p>
                        </div>
                        <div className='{styles.content}'>
                          <Image className={styles.imageFormat} src={eventImage} alt="icon" />
                          <br></br>
                          <strong className={styles.heading}>Check out events</strong>
                          <p className={styles.text}> Do not miss events the library is organizing </p>
                        </div>
                  </div>
        
                </div>
                 <div className={styles.right}> 
                  {/* <h3>Read Interesting books!</h3> */}
                </div>
        </div>
  )
}

export default AfterHeader
