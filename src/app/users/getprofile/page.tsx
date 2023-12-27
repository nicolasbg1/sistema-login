

'use client';


import { Button } from '@/components/layout/button/Button';
import { Data } from '@/components/layout/form/Data';
import axios from 'axios';
import { useState } from 'react';

export default function GetProfiles () {
    const [data, setData] = useState('');

    const SearchProfiles = async () => {
        try{
            axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            const response = await axios.get('http://localhost:9000/users/getprofile');
            const dataResponse = response.data;
            setData(dataResponse);

        }catch(error){
            console.log(error);
        }
    };


    return (
        <>

            <Button onClick={SearchProfiles}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> 
                Veja quem está logados
                </span>
            </Button>

            <div className="result">
                {data && (
                    <Data>
                        <li>{data.name}</li>
                        <li>{data.email}</li>
                    </Data>
                )}
            </div>
        </>

    );
}