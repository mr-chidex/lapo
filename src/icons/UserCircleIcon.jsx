import React from "react";
const UserCircleIcon = (props) => (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <circle
      cx="12"
      cy="8"
      r="4"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
    />
    <path
      d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="10"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
    />
  </svg>
);
export default UserCircleIcon;
