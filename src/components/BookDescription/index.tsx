'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import Image, { StaticImageData } from 'next/image';
import book from '../../../public/assets/book1.jpg';
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
import styles from './styles/bookDescription.module.scss';
import Link from 'next/link';
import Recommendation from '../recommendation';
import { IBook, BookStateContext } from '@/providers/bookProvider/context';



const dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum orci ut est ultricies eleifend. Vivamus id libero nec enim tincidunt lobortis. Nulla facilisi. Integer in lacus eget turpis euismod convallis. Fusce vehicula ligula vel tempor viverra. Aliquam non nibh ut orci tempor dictum eget a justo. Morbi malesuada justo et purus convallis consequat. Proin euismod fermentum mauris, in ultricies nulla ultricies ac. Quisque vel sapien leo. Vivamus ultricies ligula vel magna consequat, eu ultricies nulla sagittis. Sed auctor libero nec ex eleifend, at ullamcorper ex pulvinar. Curabitur nec dolor sed lacus efficitur fringilla. Ut at quam nec elit lacinia malesuada in sit amet sem. Fusce viverra lorem et velit vehicula, a interdum nulla vestibulum. Donec dapibus, quam in fermentum tincidunt, sem odio ullamcorper lectus, non vulputate nunc nunc ut risus. Donec at ante a nunc auctor vestibulum. Morbi sollicitudin, nisi eu sollicitudin tempus, justo mauris vestibulum est, sed fringilla purus ipsum id risus. Quisque rhoncus vitae nulla vel vehicula. Nam pulvinar fringilla nulla, ac tincidunt purus lacinia ut. Cras posuere velit nec pharetra malesuada. Vivamus feugiat sapien vitae enim cursus, nec auctor felis elementum. Phasellus nec metus in purus accumsan vehicula. Nullam et ligula id ex interdum aliquet"
interface Props { bookId: number }
const BookDescription: React.FC<Props> = (Props) => {
  const { books } = useContext(BookStateContext);
  const [ans, setAns] = useState<IBook[]>([]);

  useEffect(() => {
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
