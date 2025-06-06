import React from 'react';
import { Link,useNavigate,useLocation  } from 'react-router-dom';

import { handleScroll } from '../../utils';


const Logo = ({limage, dimage, simage}) => {
    const history = useNavigate();
    const location = useLocation();
    const handleScrollWrapper = (e, sectionId) => {
        if(location.pathname === '/') {
          handleScroll(e, sectionId);
        } else {
            history("/");
        }
      };
    return (
        <Link to='/' onClick={e=>handleScrollWrapper(e)}>
            <img  className="light-version-logo" src={limage} alt="logo" />
            <img  className="dark-version-logo" src={dimage} alt="logo" />
            <img  className="sticky-logo" src={simage} alt="logo" />
        </Link>
    )
}


export default Logo;