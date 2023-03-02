import React from 'react'

function Alert(props) {

    return (
        <div style={{ height: '10px' }}>

            {props.alert &&
                <div className='alert-container' >
                    <div id="alert" className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                        {/* <strong>{props.alertMode}</strong> */}
                        <center><strong>{props.alert.msg}</strong></center>

                    </div>
                </div >}
        </div>
    )
}

export default Alert