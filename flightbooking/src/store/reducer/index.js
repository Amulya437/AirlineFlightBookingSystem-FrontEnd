import { combineReducers } from "@reduxjs/toolkit";

import airline from './airline';
import flight from './flight';
import flyer from './flyer';
import executive from './executive';
import login from './login';
import signUp from './signUp';


export default combineReducers({airline,flight,flyer,executive,login,signUp})