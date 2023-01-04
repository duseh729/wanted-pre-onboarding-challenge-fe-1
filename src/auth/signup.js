import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = async () => {
    if (isEmail(email)) {
      if (password.length >= 8) {
        const { res } = await axios.post("http://localhost:3001/user", { email, password });
      } else {
        alert("비밀번호를 8자 이상으로 입력해주세요.");
      }
    } else {
      alert("이메일에 @와 .을 포함해주세요.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form>
        <div>
          <label>이메일</label>
          <br />
          <input value={email} required type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input value={password} required type="password" name="pwd" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            createUser();
          }}
          className="btn-design"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

function isEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}

function dbEmail(email) {
  const res = axios.get("http://localhost:3001/user").then((res) => {
    res.data.forEach((a) => {
      console.log(a.email, email);
      if (a.email === email) {
        console.log("hi,,");
        return false;
      }
    });
  });
}
