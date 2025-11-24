import React from 'react'
import fs from "fs";
import path from "path";
import Image from '@/components/image';
import Streper from '@/components/image/streper';

function Gallery() {
  const imageDir = path.join(process.cwd(), "public/assets/gallery");
  const files = fs.readdirSync(imageDir);

  return (
    <>
      <Streper title='Gallery' />

      <div className="row gx-2 py-2 ">
        {files.map((file, index) => (

          <div key={index} className="col-lg-3 col-md-12 mb-2 mb-lg-0">
            <Image
              style={{ height: '35rem' }}
              src={'/assets/gallery/' + file}
              className="w-100 shadow-1-strong rounded mb-2"
              alt={"Boat on Calm Water " + index}
            />
          </div>
        ))}



      </div>
    </>
  )
}

export default Gallery