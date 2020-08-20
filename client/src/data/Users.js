import React, {useState} from 'react';
import axios from 'axios';
import {useAsync} from '../util/useAsync';
import User from './User';

async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
}

function Users(){
    const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId] = useState(null);
    const {loading, data : users, error} = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러!!!</div>;
    if (!users) return <button onClick={refetch}>불러오기</button>;

    return(
        <>
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => setUserId(user.id)}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
        {userId && <User id = {userId} />}
        </>
    )
}

export default Users;