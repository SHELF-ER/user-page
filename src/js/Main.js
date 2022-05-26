import usericon from '../img/usericon.png';
import '../css/main.css';

function Main() {
  return (
    <div className="Main">
      <header>
        <div>
          <ul id="login">
            <li><a href="client.html">로그인</a></li>
            <li><img src={usericon} alt="usericon"/></li>
          </ul>
        </div>
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
