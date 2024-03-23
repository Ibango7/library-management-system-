'use client';
import BookDescription from "@/components/BookDescription"

const summary = "Book Summary Book SummaryBook Summary Book summary";
const BookSummaryPage: React.FC = () => {
    return (
        <BookDescription title="Book Tile" summary={summary}/>
    )
  }
  export default BookSummaryPage