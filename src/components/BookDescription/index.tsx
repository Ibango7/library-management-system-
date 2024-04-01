'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'antd';
import styles from './styles/bookDescription.module.scss';
import Link from 'next/link';
import Recommendation from '../recommendation';
import { useSearchParams } from 'next/navigation';
import { IbookGenre, IBook, BookStateContext, BookActionContext } from '@/providers/bookProvider/context';
import { error } from 'console';



interface Props { bookId: number }
const BookDescription: React.FC<Props> = (Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [modalText, setModalText] = useState('Click the rent button to rent this book');
  const [availableBooks, setAvailableBooks] = useState<number | null>(null);
  const searchParam = useSearchParams();
  const { books } = useContext(BookStateContext);
  const [ans, setAns] = useState<IBook[]>([]);
  const { getBooksByGenre } = useContext(BookActionContext);
  const { rentBook, getQuantity } = useContext(BookActionContext);


  useEffect(() => {
    const handleGetBooks = async () => {
      const categoryId = searchParam.get('categoryId')
      if (categoryId) {
        const genreInfo: IbookGenre = { genre: categoryId.toString() };
        getBooksByGenre(genreInfo);
      }
    }

    handleGetBooks();

  }, []);


  const showModal = async () => {
    setOpen(true);
    const bookId = bookInfo()?.bookId;
    if (bookId && getQuantity) {
      try {
        const response = await getQuantity(bookId);
        setAvailableBooks(response.result);
        setModalText(`Available books: ${response.result}`);
      } catch (error) {
        console.error("Error fetching quantity:", error);
        setModalText('Failed to fetch book quantity');
      }
    }
  }


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  }

  const handleAddToQueue = () => {
    // handle to queue logic
  }


  const bookInfo = () => {
    const bookRef = Props.bookId;
    let bookData: any = []
    if (books && books[bookRef]) {
      bookData = {
        title: books[bookRef].title,
        author: books[bookRef].author,
        content: books[bookRef].content,
        imageUrl: books[bookRef].imageUrl,
        bookId: books[bookRef].id
      }
    }

    /*else if (ans && ans[0]) {
      bookData = {
        title: ans[0].title,
        author: ans[0].author,
        content: ans[0].content,
        imageUrl: ans[0].imageUrl
      }
    }*/
    return bookData;
  }


  const handleOk = async () => {
    // here is where the borrowing book action will be triggered
    // setModalText('Click the rent button to rent this book');

    // if there are no books available
    if(availableBooks !== null && availableBooks > 0) {
      const bookId = bookInfo()?.bookId;
      let userId = localStorage.getItem('userId');
  
      if (bookId && userId && rentBook) {
        // set loadind state of the button
        setConfirmLoading(true);
        const id: number = parseInt(userId);
         rentBook(bookId, id);
      }

      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    }

  };


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
          <Button type="primary"
            onClick={showModal}
            block> Rent this book </Button>
        </div>

        <Modal
          title={bookInfo()?.title}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="addToQueue" 
            onClick={handleAddToQueue}
            disabled={availableBooks === null || availableBooks > 0}
            >
              Add to wait list
            </Button>,
            <Button key="ok" type="primary" 
            loading={confirmLoading} 
            onClick={handleOk} 
            disabled={availableBooks === null || availableBooks <= 0}
            >
              rent
            </Button>,
          ]}
        >
          {modalText}
        </Modal>

      </div>
    </div>

  </>
)
}

export default BookDescription
