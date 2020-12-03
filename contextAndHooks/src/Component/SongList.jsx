import React, {useState, useEffect} from 'react';
import uuid from 'uuid';
import NewSong from './NewSong';

export const SongList = () => {
    const [songs, setSongs ] = useState([
        { title: 'DarkSide', id : 0 },
        { title: 'Alone', id : 1 },
        { title: 'Faded', id : 2 }
    ]);
    const [age, setAge] = useState(0);
    const addSong = (title) =>{
        setSongs([...songs, { title, id: uuid()}])
    }
    useEffect(() => {
        console.log("useEffect", songs);
    }, [songs])
    return (
        <div className='song-list'>
            <ul>
                {songs.map(song =>{
                    return( <li key={song.id}>{song.title}</li> );
                })}
            </ul>
            <NewSong addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Count : </button>{age}
        </div>
    )
}
