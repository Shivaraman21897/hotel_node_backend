'use strict';

import { MediaType } from '../../config/Constants';
import Handler from './Handler';
import Methods from "./Methods";
export default [
    {
        path: '/list',
        type: MediaType.GET,
        method: Handler.getCountryList,
        options: {}
    },
    {
        path: '/details',
        type: MediaType.GET,
        method: Handler.getCountryDetails,
        options: {}
    },
    {
        path: '/add',
        type: MediaType.POST,
        method: Handler.saveCountry,
        options: {}
    },
    {
        path: '/update',
        type: MediaType.POST,
        method: Handler.updateCountry,
        options: {}
    },
    {
        path: '/delete',
        type: MediaType.POST,
        method: Handler.deleteCountry,
        options: {}
    }
]