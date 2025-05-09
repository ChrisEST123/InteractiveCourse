import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input name="username" placeholder="Username" required className="login-input" />
        <input name="password" type="password" placeholder="Password" required className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default Login;
