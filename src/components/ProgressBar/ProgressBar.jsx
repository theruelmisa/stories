import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const Progressbar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (  
        <div style={{ width: `${progress}%` }}>
            { progress }
        </div>
    );
}

export default Progressbar;