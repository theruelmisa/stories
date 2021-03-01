import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { Bar } from './ProgresBar.elements';

const Progressbar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (  
        <Bar 
            initial={{ width: 0}}
            animate={{ width: `${progress}%` }}
        />
    );
}

export default Progressbar;