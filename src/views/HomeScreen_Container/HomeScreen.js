import React from 'react';
import { Link } from 'react-router-dom'
import { counterState } from '../../Atom'
import { useRecoilState } from 'recoil'


const HomeScreen = () => {

    const [count, setCount] = useRecoilState(counterState)

    return (
        <div>
            Welcome to template

            <Link to="/login">  <button className="p-2 m-4 bg-red-400 px-4 text-white">Go to Login</button> </Link>


            <h3 className="m-5 text-green-500">Counter is : {count}</h3>

            <button className="p-2 bg-yellow-300 m-5" onClick={()=>setCount(count+1)}>Increase Counter</button>

        </div>
    );
}

export default HomeScreen;
