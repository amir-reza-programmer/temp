import React, { useState } from 'react';

const ImgContainer = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default ImgContainer;