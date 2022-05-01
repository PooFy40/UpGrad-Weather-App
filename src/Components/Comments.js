import React, { useState } from 'react'

const Comments = () => {
    
    const [comment,setComment]=useState([])
    const [input, setInput] = useState([]);

    const onChange=(e)=>{
        setInput(e.target.value);
    }

    const addComment=()=>{
        
        setComment(input);
        console.log(comment);
    }


  return (
    <div className="container my-3" style={{ backgroundColor: 'white', height: '400px' }}>

                <textarea className='my-3' rows="3" placeholder='Enter your comment here...' name='comment' onChange={onChange} style={{ border: 'none', backgroundColor: '#EFE5FF', fontSize: 'larger', width: '100%' }} ></textarea>
                <button onClick={addComment} style={{ backgroundColor: '#6500F2', color: 'white' }}>Comment</button>
                <div className="container my-3 mb-3" style={{ backgroundColor: '#EFE5FF', height: 'auto' }}>
                    <span style={{ fontSize: 'larger', fontWeight: 'bolder', marginTop: '10px' }}>Comments({comment.length})</span>
                </div>
            </div>
  )
}

export default Comments
