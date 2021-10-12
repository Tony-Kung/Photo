import React from 'react'

const Picture = ({data}) => {
    return (
        <div className="picture"> 
            <p className="pictureName">{data.photographer}</p>
            <div className="imageContainer">
                <img className="thePhoto" src={data.src.large} alt="" />
            </div>
            <p className="Download">
                Download pictures: {" "}
                <a  target="_blank" href={data.src.large} >
                   Click here 
                </a>
            </p>
        </div>
    )
}

export default Picture
