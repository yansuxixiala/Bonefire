
import React, { useState } from 'react';
import axios from 'axios';


  const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response)
      // 登入成功後重新載入頁面以更新狀態
      window.location.reload();
    } catch (error) {
      setErrorMessage('登入失敗，請檢查帳號密碼是否正確');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    // 登出成功後重新載入頁面以更新狀態
    window.location.reload();
  };

  return (
    <div>
      <h1>會員登入</h1>
      {errorMessage && <div>{errorMessage}</div>}
      {localStorage.getItem('token') ? (
        <div>
          <p>您已經登入了</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">帳號：</label>
            <input type="text" id="username" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">密碼：</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">登入</button>
        </form>
      )}
    </div>
  );
};

export default Login;
