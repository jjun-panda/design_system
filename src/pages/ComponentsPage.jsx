import {Link} from 'react-router-dom'
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import styles from './ComponentsPage.module.css';
import classNames from 'classnames';
import Grid from '../components/Grid';
import myImg from '../assets/b_book_2016.jpeg';

function ComponentsPage() {
    return (
        <Container className={styles.topics}>
            <Grid>
                <div className={styles.side}>
                    {/* leftSide */}
                    <div className={styles.navigatorMain}>
                        <div className={styles.navigatorWrapper}>
                            <p className={classNames(styles.naviTitle, 'title_20x')}>Components</p>
                            <ul className={styles.navigator}>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Button</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Text field</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Selection control</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Tab</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Badge & Tag</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Tooltip</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Action sheets</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Navigation</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Modals</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Loading</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Carousel</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Toast</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* rightSide */}
                    <div className={classNames(styles.storyMain, 'w2')}>
                        <div className={styles.storyTitle}>
                            <p className={classNames(styles.titleMain, 'title_40x')}>Values</p>
                            <p className={classNames(styles.titleSeb, 'body_16x')}>BWR Creative는 디자인 전반을 구성하는 통합 가이드라인 입니다.</p>
                        </div>
                        <Button size="exSmall">exSmall</Button>
                        <Button size="Small">Small</Button>
                        <Button size="Medium">Medium</Button>
                        <Button size="Large">Large</Button>
                        <img src={myImg} alt="샘플이미지" />
                    서울 용산구에 사는 한모(33)씨는 2~3일에 한 번꼴로 오는 주식 관련 문자에 마음이 흔들린다. 모르는 개인 휴대전화 번호로 “혼자 투자해서 손실 보지 말고 함께 주식 공부하자” “월 수익 150% 보장한다” “내가 팔면 주식 오르는 사람들 혼자 앓지 마라” 같은 문자가 온다. 이른바 ‘주식 리딩방’에서 보내는 문자다.

문자에 답을 남기니 바로 회신이 왔다. 메신저 오픈 채팅방에 입장하라며 방법도 알려줬다. 20여 명이 모여 있는 오픈 채팅방에 들어가니 채팅방 운영자가 ‘맛보기’ 정보를 주겠다며 “지금 00화학 매수하세요. 1만2500원이 마지노선입니다” “지금 1만3000원에 매도 예약 거세요” 같은 지시를 내렸다.

이어 단톡방 참여자 중 일부가 “감사합니다. 덕분에 한 달 월급 건졌네요”라며 답글을 올렸다. 그는 “바람잡이 같기도 하고 실제로 짧은 찰나에 주가가 왔다 갔다 해서 시키는 대로 했으면 진짜 수익을 냈을 것 같기도 해서 따라 해볼지 매일 고민이다”고 말했다.

주식을 재테크 수단으로 여기는 개인 투자자가 늘면서 이들을 현혹하려는 ‘주식 리딩방’도 늘고 있다. 오픈 채팅방에 일정 인원을 모아놓고 특정 종목 매매를 부추기는 수준을 넘어서 고액 이용료 청구 등 직접적인 금전 손실을 끼치는 경우도 있다.

금융감독원은 주식 리딩방 운영자가 부당 이득을 편취하거나 종목 추천을 통한 선행매매 등 여러 가지 관련 사건을 처리하기 위한 전담팀(TF)을 구성하고 강도 높은 조사를 진행하고 있다고 18일 밝혔다. 현재까지 드러난 부당이득만 200억원이 넘는 것으로 추정된다.

그래픽=김경진 기자 capkim@joongang.co.kr
최근 2~3년간 저금리 기조가 이어지면서 개인 주식 투자자는 크게 늘었다. 금감원에 따르면 지난해 말 기준 국내 개인투자자(상장주식)는 1374만명이다. 1년 전보다 464만명(51%) 늘었다. 2017년(501만명)의 3배 가까이 증가했다.

금감원은 “주식 리딩방을 이용하는 개인투자자는 불공정거래 세력의 손쉬운 사기 대상이 돼 거액의 투자손실 위험에 노출될 수 있고, 자기도 모르게 시세조종 등 불공정거래에 연루될 수 있으므로 각별한 주의가 요구된다”고 밝혔다.

금감원은 크게 네 가지 유형을 집중적으로 조사하고 있다. 우선 주식 리딩 운영자가 외부 세력과 짜고 허위사실을 유포한 뒤 리딩방 회원에게 물량을 떠넘겨 부당이득을 취한 경우다. 리딩방 회원에게 허위사실을 유포해 매수를 유도한 뒤 미리 공모한 외부 세력과 함께 대량 매도하는 식이다. 이 경우 리딩방 회원이 대규모 투자 손실을 보게 된다.

카카오톡 리딩방과 유튜브, 증권방송 같은 채널을 이용해 특정 종목을 추천하는 선행매매도 강도 높게 조사하고 있다. 먼저 특정 종목 주식을 매수한 뒤 각 채널 리딩방 회원에게 매수를 추천하고 주가가 오르면 본인이 산 주식을 선매도 한 후 회원들에게 매도를 추천하는 방식이다.


'주식 리딩방' 가입을 권유하는 문자. 독자제공
금감원은 주식 리딩방 이용 시 리딩방 운영자의 선행매매 권유, 손실보전이나 수익보장 약정 같은 허위 광고, 고액의 이용료 청구 후 환불 거부 같은 금전손실이 발생할 수 있다고 당부했다. 특히 리딩방 운영자가 주가 상승을 목적으로 다량의 시세 조정성 지시를 했고 주가 변동 목적을 모른 채 동참했더라도 주가조작 혐의(자본시장법 제176조)를 받을 수 있어서 유의해야 한다.

리딩방 운영자가 사전에 입수한 미공개 정보를 제시하며 주식 매수‧매도를 권유했고 이를 따랐다면 미공개정보 이용 혐의 또는 시장질서 교란 행위 혐의(자본시장법 제174조‧제178조의2)를 받을 수 있다.

금감원은 “진행 중인 리딩방 관련 조사를 신속히 마무리해서 수사기관 이첩 등의 엄정 조처를 할 예정이며 플랫폼 사업자가 불법행위 모니터링 시스템 구축 같은 자율규제 기능을 강화하도록 협조를 당부했다”고 말했다.


                    </div>
                </div>

            </Grid>
        </Container>
    );
}

export default ComponentsPage;
