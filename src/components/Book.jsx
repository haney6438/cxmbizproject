import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../css/Book.css';
import { samples } from '../components/ImgSample';

const Book = forwardRef((props,ref) => {
  const sample = samples.find((s) => s.id === 1);

  if (!sample) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
  <div className="book-wrapper">
    <HTMLFlipBook
      width={260}
      height={360}
      minWidth={260}
      maxWidth={300}
      minHeight={360}
      maxHeight={400}
      showCover={true}
      mobileScrollSupport={false}
      ref={ref}
      className="book"
    >
      <div className="page cover">표지</div>
      <div className="page">
        <img
          src={sample.img}
          alt={sample.name}
        />
      </div>
      <div className="page">페이지 1</div>
      <div className="page">페이지 2</div>
      <div className="page">페이지 3</div>
      <div className="page cover">뒷표지</div>
    </HTMLFlipBook>
    </div>
  );
});

export default Book;
