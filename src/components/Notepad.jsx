import React from 'react'

const Notepad = () => {
  return (
    <div className='container'>
        <h3 className='text-center'>Advance Notepad</h3>
        <textarea name="userInp" id="userInp" rows="10" className='w-100 p-1' ></textarea>
        <div className='w-100 d-flex justify-content-center my-3'>
            <button className="btn btn-primary mx-2 px-5">UpperCase</button><button className="btn btn-primary mx-2 px-5">LowerCase</button><button className="btn btn-primary mx-2 px-5">Capitalize</button>
        </div>

        <textarea name="" id="" rows="10" className='w-100'></textarea>
    </div>
  )
}

export default Notepad
