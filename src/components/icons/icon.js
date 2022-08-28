import React, { useState } from 'react';

const Icon = ({title}) => {
    return (
        <div>
            <img src={`/images/social/${title}.png`} alt={title} />
        </div>
    );
}

export default Icon;