import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item py-4 px-5 cursor-pointer font-fredoka">
            <div className="accordion-title flex justify-between items-center gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-semibold lg:text-xl pb-4'>
                    {title}
                </div>

                <div className='p-4 rounded-full bg-blue-200 shadow-md text-white-100 w-8 h-8 flex items-center justify-center'>
                    {isActive ? <span className='rotate-90 ml-1.5 text-2xl'>&#8250;</span> : <span className='-rotate-90 mr-1.5 text-2xl'>&#8250;</span>}
                </div>
            </div>
            {isActive && <div className="accordion-content mt-4 text-left">{content}</div>}
        </div>
    );
};

export default Accordion
