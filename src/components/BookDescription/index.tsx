'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
// import Image, { StaticImageData } from 'next/image';
// import book from '../../../public/assets/book1.jpg';
// import parenting from '../../../public/assets/family.png';
// import economics from '../../../public/assets/economic.png';
// import science from '../../../public/assets/science.png';
// import entrepreneurship from '../../../public/assets/entrepreneurship.png';
// import psychology from '../../../public/assets/brain.png';
// import money from '../../../public/assets/profit.png';
// import marriage from '../../../public/assets/wedding-couple.png';
// import health from '../../../public/assets/healthcare.png';
// import exercise from '../../../public/assets/workout.png';
// import history from '../../../public/assets/history.png';
// import politics from '../../../public/assets/conference.png';
// import biography from '../../../public/assets/biography.png';
import styles from './styles/bookDescription.module.scss';
import Link from 'next/link';
import Recommendation from '../recommendation';
import { useSearchParams } from 'next/navigation';
import {IbookGenre, IBook, BookStateContext, BookActionContext } from '@/providers/bookProvider/context';



interface Props { bookId: number}
const BookDescription: React.FC<Props> = (Props) => {
  const searchParam = useSearchParams();
  const { books } = useContext(BookStateContext);
  const [ans, setAns] = useState<IBook[]>([]);
  const {getBooksByGenre} = useContext(BookActionContext);

  console.log("Query Value::::::",searchParam.get('categoryId'));

  useEffect(() => {
    /*const handleGetBooks = async () =>{
      const genreInfo: IbookGenre = {genre:Props.categoryId.toString()};
      getBooksByGenre(genreInfo);
    }*/
      if (!localStorage.getItem('book') && books) {
         // store book as an array of object
        const bookList = [books[Props.bookId]];
        localStorage.setItem('book', JSON.stringify(bookList));
      } else {
        const ans = localStorage.getItem('book');
        const newBook: IBook[] = ans ? JSON.parse(ans) : [];
        setAns(newBook);
      }

  }, []);


  const bookInfo = () => {
    const bookRef = Props.bookId;
    let bookData: any = []
    if (books && books[bookRef]) {
      bookData = {
        title: books[bookRef].title,
        author: books[bookRef].author,
        content: books[bookRef].content,
        imageUrl: books[bookRef].imageUrl
      }
    } else if (ans && ans[0]) {
      bookData = {
        title: ans[0].title,
        author: ans[0].author,
        content: ans[0].content,
        imageUrl: ans[0].imageUrl
      }
    }
    return bookData;
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.cover}>
          <img src={bookInfo()?.imageUrl} alt="Book Cover" className={styles.bookCover} />
        </div>
        <div className={styles.details}>
          <h2>Title:{bookInfo()?.title}</h2>
          <p>Author: {bookInfo()?.author}</p>
          <div className={styles.summary}>
            <h2>Key Insights</h2>
            <p>{bookInfo()?.content}</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button type="primary" block> Rent this book </Button>
          </div>
          {/* <Recommendation/> */}
        </div>
      </div>

    </>
  )
}

export default BookDescription
