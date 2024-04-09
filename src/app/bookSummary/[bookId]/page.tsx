'use client';
import BookDescription from "@/components/BookDescription"

const summary = "Book Summary Book SummaryBook Summary Book summary";
const BookSummaryPage: React.FC<{params: {bookId:number}}> = ({params}) => {
    return (
        <BookDescription bookId={params.bookId}/>
    )
  }
  export default BookSummaryPage


