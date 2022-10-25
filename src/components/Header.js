import React from 'react';

const Header = () => {

    return (
        <React.Fragment>
            <div className='header'>
                <div className='hParts'>
                    <img
                        src="/image/header/logo.png"
                    //   style={{ width: "90px", height: "100px" }}
                    />
                </div>
                <div className='hParts'>
                    Menu
                </div>
                <div className='hParts'>
                    Store
                </div>
                <div className='hParts'>
                    What's New
                </div>
                <div className='hParts'>
                    Story
                </div>
                <div className='hParts' style={{display:'inline-flex'}}>
                    <div>
                        임차문의
                    </div>
                    <div>
                        RECRUIT
                    </div>
                    <div>
                        ENG
                    </div>
                </div>
                <div className='hParts'>
                    Search
                </div>
            </div>
        </React.Fragment>
    )
}



export default Header;