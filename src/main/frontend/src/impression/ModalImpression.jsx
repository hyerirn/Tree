import BookImage from "./BookImage";
import BookInfo from "./BookInfo";
import ToggleDetail from "./ToggleDetail";

const ModalImpression = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="I-modal">
      <div className="I-modal-content">
        <span className="I-modal-close" onClick={onClose}>&times;</span>

        <div className="I-modal-body">
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <div className="I-book-image">
              <BookImage src={book.bookImageURL} />
            </div>
            <div className="I-book-info">
              <BookInfo
                title={book.bookTitle}
                author={book.bookAuthor}
                description={book.bookCategoryName}
              />
            </div>
          </div>
          <div className="toggle-sections">
            <ToggleDetail detail={book.boardPhrase} />
            <ToggleDetail detail={book.boardReason} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImpression;