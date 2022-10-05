import React from 'react'
import one from '../assets/Images/1.png'
import two from '../assets/Images/2.png'
import three from '../assets/Images/3.png'
import four from '../assets/Images/4.webp'
import five from '../assets/Images/5.jpg'

const NetTubeUsers = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center' >
        <div className='w-[975px] h-[440px]'>
            <div>
                <h1 className='text-center text-6xl text-white'>Who's Watching?</h1>
            </div> 

            <div className='flex justify-around mt-[50px]'>
                <div className='flex flex-col justify-center items-center '>
                    <img className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white' src={one}/>
                    <h1 className='text-gray-500 text-2xl mt-[10px]'>Vimal</h1>
                    
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white' src={three}/>
                    <h1 className='text-gray-500 text-2xl mt-[10px]'>Pratima</h1>
                    
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white' src={two}/>
                    <h1 className='text-gray-500 text-2xl mt-[10px]'>Dipika</h1>
                    
                </div>


                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white' src={four}/>
                    <h1 className='text-gray-500 text-2xl mt-[10px]'>Manju</h1>
                    
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white' src={five}/>
                    <h1 className='text-gray-500 text-2xl mt-[10px]'>Pramisha</h1>
                    
                </div>
                
            </div>  

            <div className='flex justify-center mt-[100px]'>
                <button className='text-gray-500 border border-gray-500 w-[210px] px-[10px] py-[10px] hover:text-white hover:border-white text-xl'>Manage Profile</button>
            </div>

        </div>
    </div>
  )
}

export default NetTubeUsers