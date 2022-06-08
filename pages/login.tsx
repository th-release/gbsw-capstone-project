import React from "react";

const login = () => {
  return (
    <>
      <h1 className={'loginTitle'}>Login</h1>
      <div className={'loginContainer'}>
        <input className={'loginInput'} type={'text'} placeholder={'Username'} style={{ marginTop: '3rem'}}/>
        <input className={'loginInput'} type={'password'} placeholder={'Password'}  style={{ marginTop: '1rem'}}/> <br/>
        <input type={'submit'} value={'Login'} className={'loginBtn'} style={{ marginTop: '3rem', marginBottom: '3rem'}} onClick={() => alert('Click!')}/>
      </div>
    </>
  );
}

export default login;