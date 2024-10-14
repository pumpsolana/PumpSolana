import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item py-4 px-5 cursor-pointer font-fredoka group">
            <div className="accordion-title flex justify-between items-start gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-semibold lg:text-xl pb-4 group-hover:text-yellow-100 group-hover:scale-105 duration-150'>
                    {title}
                </div>

                <div className='p-4 rounded-full bg-blue-200 shadow-md text-yellow-100 group-hover:bg-yellow-100 group-hover:text-blue-200 w-8 h-8 flex items-center justify-center duration-150'>
                    {isActive ? <span className='rotate-90 ml-1.5 text-2xl'>&#8250;</span> : <span className='-rotate-90 mr-1.5 text-2xl'>&#8250;</span>}
                </div>
            </div>
            {isActive && <div className="accordion-content mt-4 text-left">{content}</div>}
        </div>
    );
};

export default Accordion
