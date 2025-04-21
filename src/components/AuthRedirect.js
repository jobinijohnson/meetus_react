// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthRedirect = ({ children }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check the user's login status
//     const isUserLoggedIn = localStorage.getItem('userData') ? true : false;

//     // If the user is not logged in, redirect to login page
//     if (!isUserLoggedIn) {
//       navigate('/app/jobs/requests'); // Redirect to the login page if user is not logged in
//     }
//   }, [navigate]);

//   // If the user is logged in, allow access to the children components
//   return <>{children}</>;
// };

// export default AuthRedirect;
