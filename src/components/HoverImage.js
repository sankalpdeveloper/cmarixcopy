import React, { useState } from 'react';

function HoverImage() {
    const [showImg1, setshowImg1] = useState(false);
    const [showImg2, setshowImg2] = useState(false);
    const [showImg3, setshowImg3] = useState(false);
    const [setImg, setsetImg] = useState(null)
    // const [setImg2, setsetImg2] = useState(null)
    // const [setImg3, setsetImg3] = useState(null)
    const setImage = (image)=>{
        setsetImg(`https://fileupload1999.s3.ap-south-1.amazonaws.com/image${image}.webp`)
        console.log(setImg);
    }
    return (
        <>
            <div className="container d-flex row-flex justify-content-around">
                <div className="float-start">
                    <div className="">
                        <div className="my-4 text-underline"
                            onMouseEnter={() => setImage(1)}
                            onMouseLeave={() => setImage(1)}
                        ><a href="#">Link#1</a></div>
                    </div>
                    <div className="">
                        <div className="my-4 text-underline"
                            onMouseEnter={() => setImage(2)}
                            onMouseLeave={() => setImage(2)}
                        ><a href="#">Link#2</a></div>
                    </div>
                    <div className="">
                        <div className="my-4 text-underline"
                            onMouseEnter={() => setImage(3)}
                            onMouseLeave={() => setImage(3)}
                        ><a href="#">Link#3</a></div>
                    </div>

                </div>
                <div className="w-75 h-50 float-end">
                    <div className="float-end h-100 ">
                        {console.log(setImg)}
                         <img src={setImg===null?"https://fileupload1999.s3.ap-south-1.amazonaws.com/image1.webp":setImg} alt="" width="800px" height="400px"/>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HoverImage
