// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import useApi from "../../Hook/useApi";
// import { setToken } from "../../Redux/Slices/authSlice";

// const api = useApi;
// const dispatch = useDispatch;

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const btnLoginOnClick = () => {
//   const postData = { email, password };

//   api
//     .post("auth/login", postData)
//     .then((res) => {
//       dispatch(setToken(res.data.data.token));
//     })
//     .catch((err) => {
//       alert("Lütfen tekrar deneyiniz", err);
//     });
// };

// function Login() {
//   return (
//     <div className="row justify-content-center">
//       <div className="col-lg-4 col-md-6 col-sm-12 ">
//         <h3>Lütfen buradan login olun.</h3>
//         <br />
//         <br />

//         <form noValidate>
//           <div className="row g-3">
//             <div className="col-sm-12">
//               <label className="form-label">E-posta</label>

//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="E-posta"
//                 defaultValue=""
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </div>
//             <div className="col-sm-12">
//               <label className="form-label">Şifre</label>

//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Şifre"
//                 defaultValue=""
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//             </div>

//             <div className="col-sm-12">
//               <div className="d-grid gap-2">
//                 <button
//                   className="btn btn-success"
//                   type="button"
//                   onClick={btnLoginOnClick}
//                 >
//                   Giriş Yap
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//         <br />
//         <br />
//       </div>
//     </div>
//   );
// }

// export default Login;


import {useState} from 'react'
import useApi from '../../Hook/useApi'
import {useDispatch} from 'react-redux'
import {setToken} from "../../Redux/Slices/authSlice"

function Login() {
  const api = useApi()

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const btnLoginOnClick = () => {
    const postData = {email, password}
    console.log('>> POST DATA', postData)

    api.post('auth/login', postData)
      .then(response => {
        dispatch(setToken(response.data.data.token))
        document.location.hash = '#/'
      })
      .catch(err => {
        alert('Lütfen tekrar deneyin.')
      })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12 ">

        <h3>
          Lütfen buradan login olun.
        </h3>
        <br />
        <br />

        <form noValidate>
          <div className="row g-3">
            <div className="col-sm-12">
              <label className="form-label">E-posta</label>

              <input type="email" className="form-control" placeholder="E-posta"
                     defaultValue="" onChange={event => setEmail(event.target.value)} />

            </div>
            <div className="col-sm-12">
              <label className="form-label">Şifre</label>

              <input type="password" className="form-control" placeholder="Şifre"
                     defaultValue="" onChange={event => setPassword(event.target.value)} />

            </div>

            <div className="col-sm-12">

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={btnLoginOnClick}>
                  Giriş Yap
                </button>
              </div>

            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </div>
  )
}


export default Login
