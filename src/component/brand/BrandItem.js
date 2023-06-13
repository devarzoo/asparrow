import React from 'react';

const Data = [
    {
        image: "/images/project/webvillee-logo.png"
    },
    {
        image: "/images/project/techm-logo.png"
    },
    {
        image: "/images/project/store.svg"
    },
    {
        image: "/images/project/maji.svg"
    },
    
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;