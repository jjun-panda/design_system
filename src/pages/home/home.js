import './home.css';
import Button from '../../ui/Button';
import Router from "../../Main";

function App() {
    return (
        <div>
            <div class="tit_width">
                <p class="tit_main">빅웨이브로보틱스<br/>디자인통합시스템</p>
                <p class="tit_seb">BWR Design System은 빅웨이브로보틱스 내 디자인 전반을 구성하는 Components,
                    Interaction, 그리고 UX의 통합 가이드라인 입니다.</p>
            </div>
            <h1 class="--gray-200">안뇽</h1>
            <Button>가나다</Button>
            <a href="/color">ss</a>
            <div class="grid">
                <ul class="card">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Router />
        </div>
    );
}

export default App;
