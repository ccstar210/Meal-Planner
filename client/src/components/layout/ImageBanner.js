import React from 'react';

const ImageBanner = () => {
    return ( 
        <div className="container-fluid">
            <div className="row ">
                <div className="col p-0" >
                    <img alt="peas" src="./images/peas.jpg" className="imgBanner"></img>
                </div>
                <div className="col p-0">
                    <img alt="oatmeal" src="./images/oatmeal.jpg" className="imgBanner"></img>
                </div>
                <div className="col p-0" >
                    <img alt="eggs" src="./images/eggs.jpg" className="imgBanner"></img>
                </div>
                <div className="col p-0">
                    <img alt="oranges" src="./images/oranges.jpg" className="imgBanner"></img>
                </div>
                <div className="col p-0">
                    <img alt="pasta" src="./images/pasta.jpg" className="imgBanner"></img>
                </div>
            </div>
        </div>
     );
}
 
export default ImageBanner;