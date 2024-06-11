'use client'
import "./style.css"
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSignupClick = (e) => {
    e.preventDefault();
    router.push("signup");
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("login");
  }

  return (
    <div className="container">
      <h2>Congratulations!! You are logged in</h2>
      <h1>Welcome {username ? username : 'Guest'}</h1>
      <div className="btnContainer">
      <p className="btn" onClick={handleSignupClick}>Sign-Up</p>
      <p className="btn" onClick={handleLoginClick}>Login</p>
      </div>
    </div>
  );
}

