// import logo from './logo.svg';
// import './App.css';
// // import axios from './axios';
// // import {useEffect} from 'react';
// import FaceBook from './component/FaceBook';
// import Google from './component/Google';
// //example redux
// import { useSelector, useDispatch } from 'react-redux';
// import {changeLogin} from './store/actions/userAction';

// function App() {
//   const counter = useSelector((state) => state);
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   const fakeApi = async () => {

//   //     try {
//   //       const res = await axios.get('/api/employees');
//   //       console.log(res)
//   //     } catch(err) {
//   //       console.log(err)
//   //     }
//   //   }
//   //   fakeApi();
//   // }, []);
//   const handleLogin = () => {
//     dispatch(changeLogin(true));
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={handleLogin}>Login</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <h1>Introduce FaceBook</h1>
//         <FaceBook />

//         <Google />
//       </header>
//     </div>
//   );
// }

// export default App;
