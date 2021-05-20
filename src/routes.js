import React from 'react';
import Home from './pages/Home'
import Image from './components/Image'

export default Routes;

function Routes (props) {
    const path = props.pathname;
    console.log(path)
    if(path === '/home') {
        return <Home />;
    }else{
        return <Image />
    }

}
 
