import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = e => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [show]);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
                src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                alt='Netflix logo'
            />
            <img src='https://i.pravatar.cc/150?img=69' alt='' />
        </div>
    );
};

export default Nav;
