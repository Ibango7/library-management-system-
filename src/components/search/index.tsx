'use client';
import React from 'react';
import { useStyles } from './styles/styles';
import library from '../../../public/assets/library_2.png';
import Image from 'next/image';
import Link from 'next/link';

const Search = () => {
   const {styles} = useStyles();
   const icon = <Image src={library} alt="lib" style={{width:"50px", height:"40px"}}/>
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
