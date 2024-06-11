'use client'
import "./style.css"
import { FaUser } from "react-icons/fa6";
import { FaLock , FaLockOpen} from "react-icons/fa";
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUsername('');
    setPassword('');
    setShowPassword(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = Cookies.get('username');
    const storedPassword = Cookies.get('password');
    if (username === storedUsername && password === storedPassword) {
      router.push('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    router.push("signup");
  }
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return(
    <>
    <div className="outer">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="inputBox">
          <input type="text"
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required />
          <FaUser className="i"/>
        </div>
        
        <div className="inputBox">
          <input type={showPassword ? 'text' : 'password'} 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required />
          <button type="button" className="i passBtn" onClick={togglePasswordVisibility}>
            {showPassword ? <FaLockOpen /> : <FaLock />}
          </button>
        </div>

        <div className="remForget">
          <label>
            <input type="checkbox" />Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>

        <button className="btn" onClick={handleLogin}>Login</button>

        <div className="signup">
          <p>Don't have an account? 
          <span className="signupBtn" onClick={handleSignupClick} >Sign Up</span></p>
        </div>
      </form>
    </div>
    </>
  )
}