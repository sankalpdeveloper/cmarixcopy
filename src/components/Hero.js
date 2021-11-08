import React from 'react'
import { ReactVideo } from "reactjs-media";


function Hero() {
    return (
      
           <div className="container mb-4">
                <ReactVideo
                src="https://fileupload1999.s3.ap-south-1.amazonaws.com/bbb360.mp4"
                poster="https://media.designrush.com/agency_photos_and_videos/47104/conversions/infrastructure-1-thumb.jpg"
                primaryColor="red"
                // other props
            />
           </div>
       
    )
}

export default Hero
