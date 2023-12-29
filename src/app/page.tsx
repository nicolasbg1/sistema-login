'use client';


import {
    Button,
    Clip,
    CornerPosition,
    LeftArrow,
    RightArrow
} from '../components/layout/StartAplication';

import { useRouter } from 'next/navigation';

export default function Home() {
    const {push} = useRouter();
    return (
        <main>
            <Button onClick={() => push('/users/create')}>
            I N I C I A R         
                <Clip>
                    <CornerPosition className="leftTop" />
                    <CornerPosition className="rightBottom" />
                    <CornerPosition className="rightTop" />
                    <CornerPosition className="leftBottom" />
                </Clip>
                <RightArrow id="rightArrow" className="arrow"></RightArrow>
                <LeftArrow id="leftArrow" className="arrow"></LeftArrow>
            </Button>

        </main>
       
    );
}
