import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <Link to="/login" className="btn-design">
        로그인
      </Link>
      <Link to="/signup" className="btn-design">
        회원가입
      </Link>
      <Link to="/todo" className="btn-design" style={{ width: "150px" }}>
        임시todo경로
      </Link>
    </div>
  );
}
