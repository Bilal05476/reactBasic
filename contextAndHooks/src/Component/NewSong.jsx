import React, {useState} from 'react'

const NewSong = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name</label>
            <input type='text' required value={title} onChange={(e) => setTitle(e.target.value) }/>
            <input type='submit' value='add Song' />
        </form>
    )
}

export default NewSong;
