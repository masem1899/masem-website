import React, { useState, useEffect } from 'react';

export default function HiddenForIPList({ children, hideFor = null }) {
    const [ip, setIp] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                setIp(data.ip);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return null;

    if (ip && hideFor?.includes(ip)) {
        return null; // hide children for matching IP
    }

    return <>{children}</>;
}