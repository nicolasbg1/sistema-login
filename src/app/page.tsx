import Link from 'next/link';


export default function Home() {
    return (
        <main>
            <h1>Minha aplicação começa aqui</h1>
            <Link href={'/users/create'}>Clique aqui</Link>

        </main>
       
    );
}
