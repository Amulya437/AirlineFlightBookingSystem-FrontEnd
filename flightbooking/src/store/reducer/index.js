import { combineReducers } from "@reduxjs/toolkit";

import airline from './airline';
import flight from './flight';
import flyer from './flyer';
import executive from './executive';

export default combineReducers({airline,flight,flyer,executive})