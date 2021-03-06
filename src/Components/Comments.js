import React, { useState } from 'react';

const Comments = () => {
    // to Keep all comments A unique Key
    let key=0

    // States
    const [comment] = useState([])
    const [usercomment, setUsercomment] = useState([])


    // To get input
    const onChange = (e) => {
        setUsercomment(e.target.value)
    }

    // to add comment After clicking Comment Button

    const addComment = () => {
        if ((usercomment.length)) {
            setUsercomment("")
            comment.push(usercomment);
        }
    }

    // To add new comments

    const listOfComments = comment.map(eachComment => (
        <p key={key=key+1} style={{ textAlign: 'left' }}>
            <i className="fa fa-user" aria-hidden="true"></i> {eachComment}
        </p>
    ))
    return (

        // Comment Box Design 

        <div>
            <div>
                <div>
                <div className="container my-3" style={{ backgroundColor: 'white', height: '400px' }}>
                    <textarea className='my-3' rows="3" placeholder='Enter your comment here...' name='comment' value={usercomment} onChange={onChange} style={{ border: 'none', backgroundColor: '#EFE5FF', fontSize: 'larger', width: '100%' }} ></textarea>
                        <br />
                        <button onClick={addComment} style={{ backgroundColor: '#6500F2', color: 'white' }}>Comment</button>
                        <br />
                        <br />
                        <div
                            style={{ background: '#f7f2ff', padding: '10px', }}>
                            <p style={{ textAlign: 'left', display: 'block', color: 'rgb(80, 80, 80)' }}><b>Comments ({listOfComments.length})</b> </p>
                            {listOfComments}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );

}
export default Comments;