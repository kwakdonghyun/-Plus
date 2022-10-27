import React from 'react';

const Footer = () => {

    return (
        <React.Fragment>
            <div className='footer '>
                    <div className="footArea inner">
                        <ul className="fUtil">
                            <li className="privacy"><a href="/kor/etc/private.do">개인정보 처리방침</a></li>
                            <li><a href="/kor/etc/location.do">위치정보 이용약관</a></li>
                            <li><a href="/kor/etc/sitemap.do">사이트맵</a></li>
                            <li><a href="/kor/store/rental.do">임차문의</a></li>
                            <li><a href="https://voc.mcd.co.kr/MC/HOM/faqMain.jsp" target="_blank" title="새창 열림">고객문의</a></li>
                            {/* <!-- <li><a href="javascript:systemCheck('https://voc.mcd.co.kr/MC/HOM/faqMain.jsp')" title="새창 열림">고객문의</a></li> --> */}
                            <li><a href="/kor/story/people/recruit.do">인재채용</a></li>
                        </ul>
                        <ul className="fSns">
                            <li><a href="https://www.facebook.com/McDonaldsKorea" className="fb" target="_blank" title="새창 열림">맥도날드 페이스북</a></li>
                            <li><a href="https://www.instagram.com/mcdonalds_kr/" className="ig" target="_blank" title="새창 열림">맥도날드 인스타그램</a></li>
                            <li><a href="https://www.youtube.com/user/McDonaldsKor" className="yt" target="_blank" title="새창 열림">맥도날드 유투브</a></li>
                            <li><a href="https://story.kakao.com/ch/mcdonalds/feed" className="ks" target="_blank" title="새창 열림">맥도날드 카카오스토리</a></li>
                            <li className="web_accessibility">
                                <a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110" className="web_accessibility" title="국가 공인 인증기관 : 웹와치" target="_blank">
                                    <img src="/image/footer/web_accessibility.png" alt="과학기술정보통신부 WA(WEB접근성) 품질인증 마크, 웹와치(WebWatch) 2022.1.6 ~ 2023.1.5" title="WA 품질인증 마크, 웹와치(WebWatch) 2022.1.6 ~ 2023.1.5" />
                                </a>
                            </li>
                        </ul>
                        <div className="fInfo">
                            <ul className="info">
                                <li>한국맥도날드(유)</li>
                                <li>대표이사: 김기원</li>
                                <li>사업자등록번호: 101-81-26409</li>
                                <li>전화주문: 1600-5252</li>
                                <li><p className="copy">COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p></li>
                            </ul>
                            
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}



export default Footer;