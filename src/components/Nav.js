import React from "react";
import "../CSS_Files/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />
      <img
        className="nav_avatar"
        src={`https://icon-library.com/images/user_account_profile_avatar_person_student_male-512.png`}
        alt="Profile"
      />
    </div>
  );
}

export default Nav;
