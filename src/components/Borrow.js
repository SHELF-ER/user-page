import '../css/common.css';
import '../css/borrow.css';
import homeicon from '../img/homeicon.png';
import loginicon from '../img/loginicon.png';
import searchicon from '../img/searchicon.png';

function Borrow() {
  return (
    <div className="Borrow">
      <header>
        <div id="subtitle">
          <h2>전자책</h2>
        </div>
        <div id="topnav">
          <ul>
            <li><img src={homeicon} alt="home icon"/></li>
            <li>&#10217;</li>
            <li><a href="./borrow.html">자료 검색</a></li>
          </ul>
        </div>
        <div id="loginnav">
          <ul>
            <li>○○○님,</li>
            <li><a href="./main.html">로그아웃</a></li>
          </ul>
          <a href="./client.html"><img src={loginicon} alt="login icon"/></a>
        </div>
      </header>

      <section id="main">
        <div id="left">
          <div id="menu_01" class="menu">
            <a href="./borrow.html"><div class="menu_title">자료검색</div></a>
          </div>
          <div id="menu_02" class="menu">
            <a href="#"><div class="menu_title">인기신간</div></a>
            <ul>
              <li><a href="#">&#8226; 가정과 생활</a></li>
              <li><a href="#">&#8226; 경제/비즈니스</a></li>
              <li><a href="#">&#8226; 인문/사회</a></li>
              <li><a href="#">&#8226; 역사</a></li>
              <li><a href="#">&#8226; 자연/과학</a></li>
              <li><a href="#">&#8226; 취미/건강/여행</a></li>
              <li><a href="#">&#8226; 문화예술</a></li>
            </ul>
          </div>
          <div id="menu_03" class="menu">
            <a href="./client.html"><div class="menu_title">나의 도서관</div></a>
            <ul>
              <li><a href="./client.html">&#8226; 내 정보</a></li>
              <li><a href="./myborrow.html">&#8226; 대출 현황</a></li>
            </ul>
          </div>
        </div>
        
        <div id="content">
          <h1>자료검색</h1><hr/>
          
          <div id="findlist">
            <select id="genre">
              <option value="0">장르 전체</option>
              <option value="1">가정과 생활</option>
              <option value="2">경제/비즈니스</option>
              <option value="3">인문/사회</option>
              <option value="4">역사</option>
              <option value="5">자연/과학</option>
              <option value="6">취미/건강/여행</option>
              <option value="7">문화예술</option>
            </select>
            <select id="title">
              <option value="0">제목 검색</option>
              <option value="1">제목만</option>
              <option value="2">저자만</option>
              <option value="3">제목+저자</option>
            </select>
            <div id="searchbar">
              <input type="text"/>
              <button id="searchbtn"><img src={searchicon} alt="searchicon"/></button>
            </div>
          </div>
          
          <div id="result">
            <p>검색된 책이 없습니다.</p>
            <p>키워드를 입력해주세요!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Borrow;
