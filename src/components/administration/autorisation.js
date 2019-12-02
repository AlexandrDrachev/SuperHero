import React from 'react';

import './autorisation.css';
import {Link} from "react-router-dom";

const Autorisation = () => {

  return (
    <div className="autorisation">
      <Link to="/administration"><div>Administration</div></Link>
    </div>
  );
};

export default Autorisation;