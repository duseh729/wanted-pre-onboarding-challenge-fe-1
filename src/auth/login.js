import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <div>
          <label>이메일</label>
          <br />
          <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="홍길동@site.com 형식으로 작성해주세요." required type="email" name="email" />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input minLength="8" required type="password" name="pwd" />
        </div>
        <button type="submit" className="btn-design">
          로그인
        </button>
        <Link to="/signup" className="btn-design">
          회원가입
        </Link>
      </form>
    </div>
  );
}
