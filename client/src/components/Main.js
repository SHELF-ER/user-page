import React  from 'react';
import { Link } from 'react-router-dom';
import maincss from '../css/main.module.css';
import usericon from '../img/usericon.png';

function Main() {
  document.body.style.backgroundColor = '#7196DB';
  return (
    <div className="Main">
      <header className={maincss.mainheader}>
        <ul className={maincss.login}>
          <li><Link to={'/borrow'}>로그인</Link></li>
          <li><Link to={'/managermain'}>관리자 로그인</Link></li>
          <li><Link to={'/borrow'}><img src={usericon} alt="usericon"/></Link></li>
        </ul>
      </header>
      <section className={maincss.main}>
        <h1>&#128366;SHELF-ER</h1>
        <h3>로그인이 필요합니다. <br>ID카드를 태그해주세요.</h3>
        <li class={maincss.selected}><a href="start.html">대  출</a></li>
        <li><a href="find.html">반  납</a></li>
      </section>
    </div>
  );
}

export default Main;
