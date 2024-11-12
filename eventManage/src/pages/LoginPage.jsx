import { useContext } from 'react';
import { AuthContext } from '../App';

function LoginPage() {
  const { login } = useContext(AuthContext);
  console.log(login);
  

//   const handleLogin = () => {
//     login();
//   };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={()=>{ login()}}>Log in</button>
    </div>
  );
}

export default LoginPage;