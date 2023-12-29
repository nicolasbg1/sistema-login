

'use client';


import { ProxPage } from '@/components/layout/form/Form';
import { Button } from '@/components/layout/getData/Button';
import { Data, DataContainer, Item, Result } from '@/components/layout/getData/Data';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

type DataProps = {
    id: number,
    name: string,
    email: string
}

export default function GetProfiles () {
    const [data, setData] = useState<DataProps>();

    const searchProfiles = async () => {
        try {
            axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            const response = await axios.get('http://localhost:9000/users/getprofile');
            const dataResponse = response.data;
            setData(dataResponse);
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
        <>
            <DataContainer>
                <ProxPage>
                    <Link href={'/users/auth'}>
                        <FaArrowLeft />
                    </Link>
                </ProxPage>
                <Button onClick={searchProfiles}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                            ></path>
                        </svg>
              Veja quem está logado
                    </span>
                </Button>
  
                {data && (
                    <Result>
                        <Data>
                            <Item>id:{data.id}</Item>
                            <Item>email:{data.email}</Item>
                            <Item>name: {data.name}</Item>
                        </Data>
                    </Result>
                )}
            </DataContainer>
        </>
    );
}