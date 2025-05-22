import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Home = () => {

    const [AddPost, setAddPost] = useState([])

    const suggestion = [
        {
            pic: <CgProfile className='text-[30px] mb-2' />,
            name: 'John Doe',
            UserId: 'John',
        },
        {
            pic: <CgProfile className='text-[30px] mb-2' />,
            name: 'john wile',
            UserId: 'Jw',
        },
        {
            pic: <CgProfile className='text-[30px] mb-2' />,
            name: 'robart jr',
            UserId: 'rob',
        },
    ]


    return (
        <div className='w--full h-screen ' >
            <div className='flex justify-center items-center h-full' >

                {/* left side */}
                <div className=' px-6 py-7 h-full w-[20%] bg-gradient-to-br from-violet-500 via-purple-800 to-violet-500 ' >
                    <h1 className='text-4xl px-2' >Easy-Talk💬</h1>
                    <div className='mt-5 py-2 px-1 flex flex-col gap-5'>
                        <a href='' className='px-4 py-3 flex gap-3 items-center text-[18px] capitalize ' >
                            <IoHome className='text-[25px]' />
                            <p>home</p>
                        </a>
                        <a href='' className='px-4 py-3 flex gap-3 items-center text-[18px] capitalize ' >
                            <FaSearch className='text-[25px]' />
                            <p>Search</p>
                        </a>
                        <a href='' className='px-4 py-3 flex gap-3 items-center text-[18px] capitalize ' >
                            <MdExplore className='text-[25px]' />
                            <p>Explore</p>
                        </a>
                        <a href='' className='px-4 py-3 flex gap-3 items-center text-[18px] capitalize ' >
                            <RiMessage2Fill className='text-[25px]' />
                            <p>Messages</p>
                        </a>
                    </div>
                </div>


                <div className=' bg-gradient-to-br from-blue-200 via-violet-200 to-blue-200 h-full w-[60%] ' >
                    <div>
                        <div className='px-10 py-10 border-b border-black' >
                            <a className='px-5 py-3 rounded-[6px] bg-gradient-to-t from-violet-500 via-purple-400 to-violet-500 ' href="">Add Post +</a>
                        </div>

                    </div>

                    {AddPost ? (
                        <div>
                        <form className="w-full  max-w-2xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 p-8 bg-violet-200/80 backdrop-blur-md border border-violet-300 rounded-2xl shadow-2xl">
                                <div className="w-full space-y-4">

                                    <p onClick={()=>{setAddPost(false)}} className='text-right p-2 mr-2 text-2xl cursor-pointer' >x</p>
                                    {/* Header */}
                                    <h2 className="text-3xl font-bold text-center text-violet-800 drop-shadow-md">Create a Post</h2>

                                    {/* Username */}
                                    <div>
                                        <p className="px-4 py-3 text-lg font-medium text-center bg-violet-100 text-violet-900 rounded-xl shadow-inner">
                                            Username
                                        </p>
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-2">
                                        <p className="text-lg font-semibold text-violet-700">Media Upload</p>
                                        <label htmlFor="file" className="block cursor-pointer px-4 py-3 bg-violet-300 text-center text-violet-900 rounded-xl hover:bg-violet-400 shadow-md transition duration-200">
                                            Upload Video / Image
                                        </label>
                                        <input type="file" name="file" id="file" hidden required />
                                    </div>

                                    {/* Caption */}
                                    <div>
                                        <textarea
                                            className="w-full p-4 rounded-xl border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-base text-violet-800 placeholder-violet-400 shadow-inner"
                                            name="caption"
                                            id="caption"
                                            rows="6"
                                            placeholder="Write your caption here..."
                                        ></textarea>
                                    </div>

                                    {/* Privacy Select */}
                                    <div>
                                        <label htmlFor="privacy" className="block mb-1 text-violet-700 font-medium">Privacy</label>
                                        <select
                                            id="privacy"
                                            className="w-full px-4 py-3 rounded-xl border border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-base text-violet-900 shadow-sm"
                                            name="privacy"
                                            defaultValue="Public"
                                        >
                                            <option value="Public">Public</option>
                                            <option value="Private">Private</option>
                                        </select>
                                    </div>

                                    {/* Submit Button */}
                                    <div onClick={()=>{setAddPost(true)}} className="text-center">
                                        <button
                                            type="submit" 
                                            
                                            className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 shadow-lg transition duration-300"
                                        >
                                            Post
                                        </button>
                                    </div>

                                </div>
                            </form>
                    </div>
                    ): <></>}
                    
                </div>



                { /* right side  */}
                <div className='  px-6 py-7 h-full w-[25%]  bg-gradient-to-br from-violet-500 via-purple-800 to-violet-500 ' >
                    <div className='flex bg-[#bbbbbbd7] rounded-2xl  items-center gap-4 px-5 py-2 hover:scale-105 transform transition-all duration-300 ' >
                        {/* <img src="" alt="" /> */}
                        <CgProfile className='text-[30px] mb-2' />
                        <div>
                            <p className='text-[16px]' >User-Id</p>
                            <p className='text-[12px]' >Username</p>
                        </div>
                    </div>

                    <div  >
                        <h1 className='py-3' >Suggestion</h1>
                        <div className='flex flex-col gap-2 ' >
                            {suggestion.map(suggestion => {
                                return (
                                    <div key={suggestion.UserId} className='flex bg-[#bbbbbbd7] rounded-2xl items-center gap-4 px-5 py-2 hover:scale-105 transform transition-all duration-300  ' >
                                        {suggestion.pic}
                                        <div className='flex items-center justify-between w-full' >
                                            <div>
                                                <p className='text-[16px]' >{suggestion.UserId}</p>
                                                <p className='text-[12px]' >{suggestion.name}</p>
                                            </div>
                                            <div className='hover:scale-110 transform transition-all duration-300' >
                                                <a className='text-black hover:text-blue-700 ' href="">Follow</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
