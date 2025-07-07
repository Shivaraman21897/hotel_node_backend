'use strict';

import { MediaType } from '../../config/Constants';
import Handler from './Handler';
import Methods from "./Methods";
export default [
    {
        path: '/list',
        type: MediaType.GET,
        method: Handler.getHotelsList,
        options: {}
    },
    {
        path: '/details',
        type: MediaType.GET,
        method: Handler.getHotelsDetails,
        options: {}
    },
    {
        path: '/add',
        type: MediaType.POST,
        method: Handler.saveHotels,
        options: {}
    },
    {
        path: '/update',
        type: MediaType.POST,
        method: Handler.updateHotels,
        options: {}
    },
    {
        path: '/delete',
        type: MediaType.POST,
        method: Handler.deleteHotels,
        options: {}
    }
]