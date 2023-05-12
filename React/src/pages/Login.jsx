import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body p-5">
                <img src="https://img.onl/BTUc0G" alt="" />
                <form onSubmit={handleLogin} className="mt-5">
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="電子郵件 ex:7414@gmail.com"
                      className="form-control"
                    />
                    {errors.email && (
                      <div className="text-danger mt-2">
                        {errors.email[0]}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="密碼"
                      className="form-control"
                    />
                    {errors.password && (
                      <div className="text-danger mt-2">
                        {errors.password[0]}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      登入
                    </button>
                  </div>
                </form>
                <Link
                  to="/forgot-password"
                  className="d-block text-center text-muted mb-2"
                >
                  忘記密碼嗎?
                </Link>
                <p className="text-center text-muted">
                  還不是會員?{" "}
                  <Link to="/register" className="text-primary">
                    加入會員
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
      </div>
    </section>
  );
};

export default Login;
