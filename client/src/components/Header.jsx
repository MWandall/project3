import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import Auth from "../utils/auth"; // Import your Auth utility
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn()); // Initialize isLoggedIn based on Auth.loggedIn()
  const handleLogout = () => {
    // Implement your logout logic here
    // For now, let's just set isLoggedIn to false
    Auth.logout();
    setIsLoggedIn(false);
  };
  return (
    <header className="bg-gray-900 flex justify-between py-4">
        {/* <h1 className="text-blue-100">Dark Lord: Evilution</h1> */}
        <p className="text-blue-100 mx-4">something something 
        <br />monsterGameTitleHere <br />
        {/* something something <br />
        Dark Lord: Evilution */}
        </p>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px', height: "50px"}}/>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px', height: "50px"}}/>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px', height: "50px"}}/>


        <nav>
      <ul className="flex flex-row justify-between mr-5">
       

        {/* adding these just for ease of use. will remove later */}
        
          <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            // Show Logout button if the user is logged in
            <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <a onClick={handleLogout}>Logout</a>
            </li>
          ) : (
            // Show Signup and Login buttons if the user is not logged in
            <>
              <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          {/* adding these just for ease of use. will remove later */}
          <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Link to="/GameStart">GameStart</Link></li>
          <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Link to="/Lair">Lair</Link></li>
          <li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Link to="/Battle">Battle</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;