import './App.css';
// import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal, useTenantsState } from "@frontegg/react";


function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const tenantsState = useTenantsState();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleShowAdminPortal = () => {
    AdminPortal.show();
  };


  return (<>
    <h1>Frontegg React App</h1>
    <div className="App">
      {isAuthenticated ? (
        <div className='container'>
          <div className='user-card'>
            <div className='user-picture-name'>
              <div>
                <img src={user?.profilePictureUrl} alt={user?.name} className='user-picture' />
              </div>
              <div>
                <span>{user?.name}</span>
              </div>
            </div>
            <div>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </div>
          <div className='buttons-card'>
            {/* <div>
              <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
            </div> */}
            <div>
              <button onClick={handleShowAdminPortal}>Admin Portal</button>
            </div>
            <div>
              <span>Current tenant: {tenantsState.activeTenant?.name}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>

      )}
    </div>
  </>
  );
}

export default App;
