import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Announcement = () => {
    const [announcement, setAnnouncement] = useState('bg-purple-500 flex justify-center items-center text-white font-bold')

    const handleClosed = () =>{
        setAnnouncement(announcement + " hidden")
    };

    return (
        <div className={announcement}>
            <h2>Hurry up, it is 40% off now</h2>
            <CloseIcon className='cursor-pointer' onClick={handleClosed}/>
        </div>
    );
};

export default Announcement;