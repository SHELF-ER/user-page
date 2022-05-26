import { Link } from 'react-router-dom';
// import '../css/main.css';
import usericon from '../img/usericon.png';

function Main() {
  return (
    <div className="Main">
      <header>
        <ul id="login">
          <li><Link to={'/borrow'}>로그인</Link></li>
          <li><img src={usericon} alt="usericon"/></li>
        </ul>
      </header>
      <section id="main">
        <h1>&#128366;SHELF-ER</h1>
        <h3>로그인이 필요합니다. ID카드를 태그해주세요.</h3>
        <li class="selected"><a href="start.html">대  출</a></li>
        <li><a href="find.html">반  납</a></li>
      </section>
    </div>
  );
}
export default Main;
