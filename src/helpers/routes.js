// import React from 'react';
// import { Route, useNavigate } from 'react-router-dom';

// export function IsUserRedirect(user, loggedInPath, children, ...rest) {
//     const navigate = useNavigate()
//     return (
//         <Route
//             {...rest}
//             render={() => {
//                 if (!user) {
//                     return children;
//                 }
//                 if (user) {
//                     return (
//                         <Redirect
//                             to={{
//                                 pathname: loggedInPath,
//                             }}
//                         />
//                     );
//                 }
//                 return null;
//             }}
//         />
//     );
// }
