import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card bg-white py-4 px-3 px-sm-4 px-md-5">
              <img src="https://img.onl/BTUc0G" alt="" className="card-img-top w-50" />
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="請輸入姓名"
                    className="form-control"
                  />
                  {errors.name && (
                    <div className="text-danger">
                      {errors.name[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入電子信箱"
                    className="form-control"
                  />
                  {errors.email && (
                    <div className="text-danger">
                      {errors.email[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    className="form-control"
                  />
                  {errors.password && (
                    <div className="text-danger">
                      {errors.password[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="確認密碼"
                    className="form-control"
                  />
                </div>
                <div className="mb-4 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    註冊
                  </button>
                </div>
              </form>
              <p className="text-secondary text-center">
                已經是會員了嗎?{" "}
                <Link to="/login" className="text-primary">
                  登入
                </Link>
              </p>
              <p className="text-secondary text-center">
              <Link to="/" className="text-primary">
                      回首頁
                  </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
