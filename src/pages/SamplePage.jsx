import {Link} from 'react-router-dom'
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import styles from './SamplePage.module.css';
import classNames from 'classnames';
import Grid from '../components/Grid';

function ComponentsPage() {
    return (
        <Container className={styles.topics}>
            <Grid>
            <div className={classNames(styles.f24, styles.m)}>
                <div>현재 색상_#00C389</div>
                <div className={styles.web}>웹접근성&nbsp;W&nbsp;<div className={styles.bad}>2.32</div>&nbsp;&nbsp;&nbsp;B&nbsp;<div className={styles.best}>9.04
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        paddingBottom: '40px'
                    }}>
                    <div><img
                        src="https://marosol-bucket-dev.s3.ap-northeast-2.amazonaws.com/0211color/00c09f_logo.svg"
                        alt=""
                        height={50}
                        style={{
                marginBottom: '20px'
            }}/></div>
                    <div
                        style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '20px',
                            backgroundColor: 'var(--main-color)'
                        }}/>
                    <div
                        style={{
                            marginTop: '8px',
                            width: '160px',
                            boxSizing: 'border-box',
                            border: '1px solid var(--main-color)'
                        }}/>
                    <div
                        style={{
                            marginTop: '8px',
                            width: '160px',
                            boxSizing: 'border-box',
                            border: '2px solid var(--main-color)'
                        }}/>
                    <div
                        style={{
                            marginTop: '8px',
                            width: '160px',
                            boxSizing: 'border-box',
                            border: '3px solid var(--main-color)'
                        }}/>
                </div>
                <div style={{
                        display: 'block'
                    }}>
                    <div>
                        <p
                            style={{
                                fontSize: '16px',
                                border: '1px solid #272727',
                                padding: '8px 16px',
                                display: 'inline-block'
                            }}>전용서체 : Pretendard
                        </p>
                        <p className='title_40x'>
                            <span>타이틀</span>
                            40px 1.25 Bold
                        </p>
                        <p className='title_32x'>

                            <span>타이틀</span>
                            32px 1.25 Bold
                        </p>
                        <p className='title_24x'>

                            <span>타이틀</span>
                            24px 1.25 Bold
                        </p>
                        <p className='title_20x'>

                            <span>타이틀</span>
                            20px 1.25 Bold
                        </p>
                        <p className='title_18x'>

                            <span>소제목</span>
                            18px 1.25 Bold
                        </p>
                        <p className='title_16x'>

                            <span>본문강조</span>
                            16px 1.25 Bold
                        </p>
                        <p className='title_14x'>

                            <span>소소제목</span>
                            14px 1.25 Bold
                        </p>
                        <p className='body_16x'>
                            <span>본문</span>
                            16px 1.5 Regular<br/>인간의 인지·추론·판단 등의 능력을 컴퓨터로 구현하기 위한 기술 혹은 그 연구 분야. 인간의 인지·추론·판단 등의 능력을 컴퓨터로 구현하기 위한 기술 혹은 그 연구 분야 등을 총칭하는 용어로 사용된다. 컴퓨터와 같은 기계는 인간에 비해 제어, 연산 등의 능력이 뛰어나지만, 사람이 가지고 있는 지능을 기반으로 하는 인지·추론·판단 등의 능력은 가지고 있지 않다. 
                            <br/>Amid escalating tensions with Taiwan in recent years, China has previously
                                banned imports of some Taiwanese products. Last year, China banned imports of
                                pineapples from the island followed by some types of apples, citing “pest
                                control.” Earlier this year, it also banned Taiwanese grouper fish, citing
                                detection of some banned drugs and excessive antibiotics. Beijing's recent
                                announcements coincide with Pelosi’s visit to Taiwan, the first trip to the
                                self-ruled island by a sitting speaker in 25 years, and after Beijing issued
                                stern warnings that it would take countermeasures in retaliation.
                        </p>
                        {/* <p
                            style={{
                                fontSize: '14px'
                            }}>
                            <span>소본문강조</span>
                            14px 1.5 Bold
                        </p>
                        <p
                            style={{
                                fontSize: '14px'
                            }}>
                            <span>출처</span>
                            14px 1.5 Medium
                        </p>
                        <p
                            style={{
                                fontSize: '14px'
                            }}>
                            <span>소본문</span>
                            14px 1.5 Regular
                        </p>
                        <p
                            style={{
                                fontSize: '12px'
                            }}>
                            <span>[썸네일] 업체명</span>
                            12px 1.5 Bold
                        </p>
                        <p
                            style={{
                                fontSize: '12px'
                            }}>
                            <span >업로드일, 조회수, 좋아요수 &amp; [텍스트필드] 안내문구</span>
                            12px 1.5 Medium
                        </p>
                        <p
                            style={{
                                fontSize: '12px'
                            }}>
                            <span>[썸네일] 금액, 기업, 지역</span>
                            12px 1.5 Regular
                        </p>
                        <p
                            style={{
                                fontSize: '10px'
                            }}>
                            <span>부가적인 설명 및 미니본문</span>
                            10px 1.5 Regular
                        </p> */}
                        {/* <div>
                            <p
                                style={{
                                    fontSize: '24px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#ffffff',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '24px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#272727',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '24px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: 'var(--main-color)',
                                    color: '#ffffff'
                                }}>
                                가나다라마바사아자차카타파하</p>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: '21px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#ffffff',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '21px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#272727',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '21px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: 'var(--main-color)',
                                    color: '#ffffff'
                                }}>
                                가나다라마바사아자차카타파하</p>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: '16px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#ffffff',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '16px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: '#272727',
                                    color: 'var(--main-color)'
                                }}>
                                가나다라마바사아자차카타파하</p>
                            <p
                                style={{
                                    fontSize: '16px',
                                    display: 'inline-block',
                                    margin: '8px 8px 0 0',
                                    padding: '8px 16px',
                                    border: '1px solid var(--main-color)',
                                    backgroundColor: 'var(--main-color)',
                                    color: '#ffffff'
                                }}>
                                가나다라마바사아자차카타파하</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        display: 'table',
                        padding: '20px 0 0'
                    }}>
                    <label><input
                        type="radio"
                        className={styles.checkboxp00c09f}
                        name="00c09f"
                        defaultValue="on"
                        defaultChecked="checked"/><em/>
                        <span>라디오버튼_A 16px Medium</span>
                    </label>
                    <br className={styles.mm}/>
                    <label><input
                        type="radio"
                        className={styles.checkboxp00c09f}
                        name="00c09f"
                        defaultValue="off"/><em/>
                        <span>라디오버튼_B 16px Medium</span>
                    </label>
                    <br className={styles.mm}/>
                    <label><input
                        type="radio"
                        className={styles.checkboxp100c09f}
                        name="00c09f"
                        defaultValue="off"/><em/>
                        <span>라디오버튼_C 14px Medium</span>
                    </label>
                    <br className={styles.mm}/>
                    <label><input
                        type="radio"
                        className={styles.checkboxp100c09f}
                        name="00c09f"
                        defaultValue="off"/><em/>
                        <span>라디오버튼_D 14px Medium</span>
                    </label>
                </div>
                <div
                    style={{
                        display: 'table',
                        padding: '20px 0 0'
                    }}>
                    <label><input type="checkbox" className={styles.checkbox100c09f}/><em/>
                        <span>체크박스_16px Medium</span>
                    </label>
                    <br className={styles.mm}/>
                    <label><input type="checkbox" className={styles.checkbox200c09f}/><em/>
                        <span>체크박스_14px Medium</span>
                    </label>
                </div>
                <div
                    style={{
                        display: 'table',
                        padding: '20px 0 0'
                    }}>
                    <label><input type="checkbox" className={styles.toggle00c09f}/>
                        <div
                            style={{
                                display: 'inline-block'
                            }}><em/>
                            <span>토글 16px Medium</span>
                        </div>
                    </label>
                </div>
                {/* <div
                    style={{
                        display: 'table',
                        padding: '20px 0 0'
                    }}> 
                    <button className={classNames(styles.btntype100c09f, 'basic')}>버튼L 16px H56</button>
                    <button
                        className={classNames(styles.btntype100c09f, 'basic')}
                        disabled="disabled">버튼L 16px H56</button>
                    <button className={classNames(styles.btntype100c09f, 'Medium')}>버튼M 16px H48</button>
                    <button
                        className={classNames(styles.btntype100c09f, 'Medium')}
                        disabled="disabled">버튼M 16px H48</button>
                    <button className={classNames(styles.btntype100c09f, 'small')}>버튼S 14px H40</button>
                    <button
                        className={classNames(styles.btntype100c09f, 'small')}
                        disabled="disabled">버튼S 14px H40</button>
                </div> */}
                <div
                    style={{
                        display: 'table',
                        padding: '20px 0 0'
                    }}>

                        <Button size="exSmall">exSmall</Button>
                        <Button size="Small">Small</Button>
                        <Button size="Medium">Medium</Button>
                        <Button size="Large">Large</Button>
                    {/* <button className={classNames(styles.btntype200c09f, 'basic')}>버튼L 16px H56</button>
                    <button
                        className={classNames(styles.btntype200c09f, 'basic')}
                        disabled="disabled">버튼L 16px H56</button>
                    <button className={classNames(styles.btntype200c09f, 'Medium')}>버튼M 16px H48</button>
                    <button
                        className={classNames(styles.btntype200c09f, 'Medium')}
                        disabled="disabled">버튼M 16px H48</button>
                    <button className={classNames(styles.btntype200c09f, 'small')}>버튼S 14px H40</button>
                    <button
                        className={classNames(styles.btntype200c09f, 'small')}
                        disabled="disabled">버튼S 14px H40</button> */}
                </div>
            </div>
            <div className={styles.manulist}>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://myrobotsolution.com/solutions/"
                            className={styles.check}>Manu_#1</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://myrobotsolution.com/store/brand/6/0/list">Manu_#2</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://myrobotsolution.com/projects/">Manu_#3</a>
                    </li>
                </ul>
            </div>
            <div className={classNames(styles.manulist, 'w2')}>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://myrobotsolution.com/solutions/"
                            >Manu_#1</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://myrobotsolution.com/store/brand/6/0/list" className={styles.check}>Manu_#2</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://myrobotsolution.com/projects/">Manu_#3</a>
                    </li>
                </ul>
            </div>
            </Grid>
        </Container>
    );
}

export default ComponentsPage;
