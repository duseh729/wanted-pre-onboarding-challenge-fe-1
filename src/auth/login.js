import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <form>
        <div>
          <label>이메일</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            title="홍길동@site.com 형식으로 작성해주세요."
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input onChange={(e) => setPassword(e.target.value)} minLength="8" required type="password" name="pwd" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            allowLogin(email, password);
          }}
          type="submit"
          className="btn-design"
        >
          로그인
        </button>
        <Link to="/signup" className="btn-design">
          회원가입
        </Link>
      </form>
    </div>
  );
}
async function allowLogin(email, password) {
  await axios.get("http://localhost:3001/user").then((res) => {
    res.data.map((element, i) => {
      if (element.email == email) {
        if (res.data[i].password == password) {
          window.location.href = "/todo";
        }
      }
    });
  });
}
