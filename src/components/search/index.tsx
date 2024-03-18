'use client';
import React from 'react';
import { useStyles } from './styles/styles';
import searchIcon from '../../../public/assets/searching-bar.png';
import Image from 'next/image';
import Link from 'next/link';

const Search: React.FC = () => {
   const {styles} = useStyles();
   const icon = <Image src={searchIcon} alt="lib" className={styles.imageStyle}/>
  return (
    <div className={styles.container}>   
        <Link href="/search">
            <li className={styles.textStyle}>
                <h2 className={styles.textStyleText}>Search our Catalogue here</h2>
            </li>
            <li className={styles.textStyle}>
                <span>{icon} </span>
            </li>
         </Link>
    </div>
  )
}

export default Search
