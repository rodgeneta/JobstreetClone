import React from 'react'

const Hero2 = () => {
    return (
        <section className='bg-[#051a49] h-40 max-w-screen flex flex-row'>

            <div className='content-center text-center'>
                <form action="/action_page.php">
                    <input type="text" id="fname" name="fname" />
                    <input type="text" id="lname" name="lname" />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>

            <div className='text-center content-center'>
                <button className='px-5 py-3 rounded-lg text-white font-semibold bg-[#e60278]'>
                    SEEK
                </button>
            </div>
        </section>
    )
}

export default Hero2