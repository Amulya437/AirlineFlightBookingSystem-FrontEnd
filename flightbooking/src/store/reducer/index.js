import { combineReducers } from "@reduxjs/toolkit";

import airline from './airline';
import flight from './flight';
import executive from './executive';


export default combineReducers({airline,flight,executive})