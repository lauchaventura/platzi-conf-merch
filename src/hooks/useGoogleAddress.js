import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = () => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=
    ${address}&key=AIzaSyBv0QM2eRKp0xM5Ed8v_BtEE5T4juioZFk`;

    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);
    return map;
};

export default useGoogleAddress;
