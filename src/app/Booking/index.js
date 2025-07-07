'use strict';

import { MediaType } from '../../config/Constants';
import Handler from './Handler';
import Methods from "./Methods";
export default [
    {
        path: '/list',
        type: MediaType.GET,
        method: Handler.getBookingList,
        options: {}
    },
    {
        path: '/details',
        type: MediaType.GET,
        method: Handler.getBookingDetails,
        options: {}
    },
    {
        path: '/add',
        type: MediaType.POST,
        method: Handler.saveBooking,
        options: {}
    },
    {
        path: '/update',
        type: MediaType.POST,
        method: Handler.updateBooking,
        options: {}
    },
    {
        path: '/delete',
        type: MediaType.POST,
        method: Handler.deleteBooking,
        options: {}
    }
]