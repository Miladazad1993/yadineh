import React, { Fragment } from 'react';

const CheckPassword = () => {
    return (
        <Fragment>
            <div className='show-fetch-container'>

                <h2 className='show-fetch-header'>یادینه</h2>
                <p className='check-pass-msg'>یه نفر قبلا برات یه پیام گذاشته</p>
                <p className="check-pass-msg-mute">لطفا کلمه عبور پیام رو وارد کن تا پیام رو ببینی</p>
                <input className='check-pass-input' placeholder="کلمه عبور" type="text" />
                <button className='check-pass-btn' type="submit" >بررسی</button>

            </div>

        </Fragment>
    );
}

export default CheckPassword;