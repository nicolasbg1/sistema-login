import Link from 'next/link';


export default function Home() {
    return (
        <main>
            <h1>Minha aplicação começa aqui</h1>
            <Link href={'/users/create'}>Clique aqui</Link>
            <button>
    I N I C I A R
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
