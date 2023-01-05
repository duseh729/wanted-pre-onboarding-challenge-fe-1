import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnStatus, setBtnStatus] = useState("");
  const createUser = async () => {
    if (isEmail(email)) {
      if (password.length >= 8) {
        const { res } = await axios.post("http://localhost:3001/user", { email, password });
        alert("회원가입이 완료됨.");
        window.location.href = "/";
      } else {
        alert("비밀번호를 8자 이상으로 입력해주세요.");
      }
    } else {
      alert("이메일에 @와 .을 포함해주세요.");
    }
    setBtnStatus("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form>
        <div>
          <label>이메일</label>
          <br />
          <input
            value={email}
            required
            type="email"
            name="email"
            onChange={(e) => {
              if (e.target.value.includes("@") && e.target.value.includes(".")) {
                setBtnStatus("1");
                if (e.target.parentNode.parentNode.childNodes[1].childNodes[2].value.length > 7) {
                  e.target.parentNode.parentNode.childNodes[2].className = "btn-design";
                }
              } else {
                setBtnStatus("");
                e.target.parentNode.parentNode.childNodes[2].className = "btn-design disabled";
              }
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input
            value={password}
            required
            type="password"
            name="pwd"
            onChange={(e) => {
              if (e.target.value.length > 7 && btnStatus == "1") {
                e.target.parentNode.parentNode.childNodes[2].className = "btn-design";
              } else {
                e.target.parentNode.parentNode.childNodes[2].className = "btn-design disabled";
              }
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            createUser();
          }}
          className="btn-design disabled"
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
