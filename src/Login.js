import React from 'react';
import { auth, provider } from './firebaseConfig'; // Adjust the path as needed
import { signInWithPopup } from 'firebase/auth';

import logo from './assets/logo.png'; // Adjust the path to your logo

const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User Info:', user); // Access email, name, etc.
        // Redirect to the main page
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-lime-50 to-teal-200">
      <div className="bg-white bg-opacity-80 p-12 rounded-3xl shadow-lg w-80 h-auto text-center">
        <div className="mb-6">
          <img src={logo} alt="ChargerFinder Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-teal-600">ChargerFinder</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="bg-emerald-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-emerald-500 transition duration-200 ease-in-out"
        >
          Sign in with Google
        </button>
        <div className="flex items-center mt-4 justify-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
        </div>
        <div className="mt-6 text-sm">
          <a href="/terms" className="text-teal-600 hover:underline">Terms of Service</a> | 
          <a href="/privacy" className="text-teal-600 hover:underline"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
