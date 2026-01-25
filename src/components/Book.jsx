import HTMLFlipBook from 'react-pageflip';
import '../css/Book.css';
import { pages } from '../components/ImgPage';

const Book = (props) => {
  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        width={300}
        height={420}
        minWidth={260}
        maxWidth={320}
        minHeight={360}
        maxHeight={480}
        showCover={true}
        mobileScrollSupport={false}
        className="book"
        {...props}
      >
        <div className="cover"><p>HOW TO MAKE</p></div>
        <div className="page">
          <h2>네모 비즈 키링 만드는 방법</h2>
          <ol>
            <li>도안과 그에 맞는 비즈를 준비한다.</li>
            <li>사이즈에 맞는 도안을 키링의 밑에 깐다.</li>
            <li>탑코트나 레진을 키링에 바른다.</li>
            <li>비즈를 얹는다.</li>
            <li>맘에 들면 uv램프로 굽는다.</li>
            <li>끝</li>
          </ol>
          <p>다음장 ➸</p>
        </div>
        {pages.map((page) => (
            <div className="img-page" key={page.id}>
              <img src={page.img} alt={page.name} />
            </div>
        ))}
        <div className="cover"> </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
