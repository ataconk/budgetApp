import React from 'react';
import {Link} from 'react-router-dom';
const NotFoundPage = () => (
    //Client side routing instead of server side routing
    <div>
        404! <Link to="/"> Go Home </Link> 
    </div>
);

export default NotFoundPage;