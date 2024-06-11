'use client'
import "./style.css"
import { useState , useEffect } from 'react';
import { FaUser } from "react-icons/fa6";
import { FaLock , FaLockOpen} from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("login");
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      Cookies.set('username', username);
      Cookies.set('password', password);
      router.push('/login');
    } else {
      alert('Please confirm password correctly');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="outer">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
            <FaUser className="i"/>
        </div>
        <div className="inputBox">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="i passBtn" onClick={togglePasswordVisibility}>
            {showPassword ? <FaLockOpen /> : <FaLock />}
          </button>
        </div>
        <div className="inputBox">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
            <button type="button" className="i passBtn" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <FaLockOpen /> : <FaLock />}
          </button>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      <div className="login">
          <p>Don't have an account? 
          <span className="loginBtn" onClick={handleLoginClick}>Login</span></p>
        </div>
      </form>
    </div>
  );
}

