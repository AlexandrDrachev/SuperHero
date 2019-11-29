import React, { useState, useEffect } from 'react';

import './get-registration.css';
import {useStateValue} from "../../state";
import { addedUsersInState } from '../../actions';

const returnUsersData = JSON.parse(localStorage.getItem("dataStorage"));

const GetRegistration = () => {

  const [ inputName, setInputName ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ inputDubblePassword, setInputDubblePassword ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ newUser ] = useState({});
  const [ newUsers, setNewUsers] = useState([]);

  const [ initialState, dispatch ] = useStateValue();
  const { users } = initialState;

  useEffect(() => {

    setNewUsers(returnUsersData);
    dispatch(addedUsersInState(newUsers));
    console.log('state registr:', newUsers);
    console.log('initialState', users);
  }, [users, dispatch, setNewUsers, newUsers, newUser]);

  const onCreateNewUser = (arrData, obj, inpName, inpPass, inpDubblePass, inpEmail) => {
    obj = {
      name: inpName,
      password: inpPass,
      email: inpEmail
    };

    let checkName = arrData.every((user) => {
      return user.name !== obj.name;
    });
    if (
      checkName &&
      obj.name !== '' &&
      obj.password !== '' &&
      obj.password === inpDubblePass &&
      obj.email !== ''
    ) {
      arrData.push(obj);
      const dataStorage = JSON.stringify(arrData);
      localStorage.setItem("dataStorage", dataStorage);
      const parseRes = JSON.parse(localStorage.getItem("dataStorage"));
      setNewUsers(parseRes);
    } else if (!checkName) {
      alert('a user with the same name already exists, select a different name');
    }
  };

  return (
    <div className="get-registration">
      <div>
        <input
          onChange={(e) => setInputName(e.target.value)}
          className="form-control"
          placeholder="nickname"/>
        <input
          onChange={(e) => setInputPassword(e.target.value)}
          className="form-control"
          placeholder="password"/>
        <input
          onChange={(e) => setInputDubblePassword(e.target.value)}
          className="form-control"
          placeholder="password again"/>
        <input
          onChange={(e) => setInputEmail(e.target.value)}
          className="form-control"
          placeholder="email"/>
      </div>
      <button
        onClick={() => onCreateNewUser(newUsers, newUser, inputName,
          inputPassword, inputDubblePassword, inputEmail)}
        className="btn btn-info btn-registration"
      >registration</button>
    </div>
  );
};

export default GetRegistration;