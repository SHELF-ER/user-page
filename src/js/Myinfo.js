import homeicon from '../img/homeicon.png';
import membericon from '../img/membericon.png';
import '../css/mylibrary.css';

function Myinfo() {
  return (
    <div className="Myinfo">
      <header>
        <div id="subtitle">
          <h2>전자책</h2>
        </div>
        <div id="topnav">
          <ul>
            <li><img src={homeicon} alt="homeicon"/></li>
            <li>&#10217;</li>
            <li><a href="client.html">나의 도서관</a></li>
            <li>&#10217;</li>
            <li><a href="client.html">내 정보</a></li>
          </ul>
        </div>
        <div id="util">
          <ul>
            <li>○○○님,</li>
            <li><a href="main.html">로그아웃</a></li>
          </ul>
          <a href="client.html"><img src={membericon} alt="membericon"/></a>
        </div>
      </header>

      <div id="section">
        <div id="left">
          <div class="menu">
            <ul>
              <div class="menu_01">
                <a href="#"><strong>자료검색</strong></a>
              </div>
              <div class="menu_02">
                <a href="#"><strong>인기신간</strong></a>
                <ul>
                  <li>
                    <a href="#">가정과 생활</a>
                  </li>
                  <li>
                    <a href="#">경제/비즈니스</a>
                  </li>
                  <li>
                    <a href="#">인문/사회</a>
                  </li>
                  <li>
                    <a href="#">역사</a>
                  </li>
                  <li>
                    <a href="#">자연/과학</a>
                  </li>
                  <li>
                    <a href="#">취미/건강/여행</a>
                  </li>
                  <li>
                    <a href="#">문화예술</a>
                  </li>
                </ul>
              </div>
              <div class="menu_03">
                <a href="client.html"><strong>나의 도서관</strong></a>
                <ul>
                  <li>
                    <a href="client.html">내 정보</a>
                  </li>
                  <li>
                    <a href="myborrow.html">대출 현황</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <div id="content">
          <h2><strong>내 정보</strong></h2>
          <div id="profile01">
            <ul class="mop">
              <li>
              <p>프로필 사진</p>
              </li>
              <li>
              <img src={membericon} alt="membericon"/>
              <div id="button00">
                <button>사진 변경</button>
                <button>삭제</button>
              </div>
              </li>
              <li>
              <p>별명</p>
              </li>
              <li>
              <textarea>내용을 입력해주세요.</textarea>
              </li>
            </ul>
          </div>
        </div>
        <div id="profile02">
          <button>적용</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
}

export default Myinfo;
