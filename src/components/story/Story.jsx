import React from 'react'

const Story = () => {
  return (
    <div className=' relative w-full h-screen mt-5 '>
        <div className='  flex items-center justify-center   ' >
            <h1 className=' ml-10 mr-10 pl-10 pr-10 mb-5 text-[60px] leading-normal text-[#000] capitalize ' >Our Partners <br />
            <span className='text-[24px]   justify-between mt-0  '>Trusted Collaborative Allies</span></h1>
        </div>

        <div className='mt-5 flex items-center justify-center '>
          <div className='  h-[40vh] w-[80vw] bg-blue-600 rounded-3xl '>
              <div className='images h-5 w-[] flex gap-5 px-5 mt-3 mb-3  '>
                <div className='image1 '>
                    <img src="ratnagiri.png" alt="ratnagiri" />
                </div>
                <div className='image2 '>
                    <img src="thane.png" alt="ratnagiri" />
                </div>
                <div className='image3 '>
                    <img src="sindhudurg.png" alt="ratnagiri" />
                </div>
                <div className='image4 '>
                    <img src="raigad.png" alt="ratnagiri" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Story