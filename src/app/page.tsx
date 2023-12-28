import Link from 'next/link';


export default function Home() {
    return (
        <main>
            <button>
                <Link href={'/users/create'}>I N I C I A R</Link>     
                <div id="clip">
                    <div id="leftTop" className="corner"></div>
                    <div id="rightBottom" className="corner"></div>
                    <div id="rightTop" className="corner"></div>
                    <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
            </button>

        </main>
       
    );
}
