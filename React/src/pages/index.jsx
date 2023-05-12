import React from 'react';

function Index() {
  const userName = document.cookie.includes('userName')
    ? document.cookie.split(';').find(cookie => cookie.includes('userName')).split('=')[1]
    : 'Guest';

  const handleLogout = () => {
    document.cookie = 'userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  }

  return (
    <div>
      <table width="300" border="0" align="center" cellpadding="5" cellspacing="0" bgcolor="#F2F2F2">
        <tbody>
          <tr>
          </tr>
          <tr>
            {userName === 'Guest' ? (
              <td align="center" valign="baseline"><a href="login">登入</a> | <a href="member">註冊</a></td>
            ) : (
              <td align="center" valign="baseline"><a href="#" onClick={handleLogout}>登出</a> | <a href="member">註冊</a></td>
            )}
          </tr>
          <tr>
            <td align="center" bgcolor="#CCCCCC">Welcome! {userName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
