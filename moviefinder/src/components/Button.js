import React from 'react'
import { useHistory } from 'react-router-dom';

const LoginButton = props => {
    const history = useHistory();
    const loc = props.link
    
    return (
        <div >
            <button className="ui primary button" onClick={() => { history.push(loc);}} style={{margin: '5px'}}>
                {props.text}
                </button>
        </div>
    )
}

export default LoginButton
