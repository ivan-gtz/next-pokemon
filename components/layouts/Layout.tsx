import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
    title?: string;
}

const origin =(typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp' }</title>
                <meta name="author" content="Iván Gutiérrez" />
                <meta name="description" content={`Informatión sobre el pokémon ${ title }`} />
                <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${ title }`}/>
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
                <meta property="og:locale" content="es_BO" />

            </Head> 
            <Navbar />
            <main style={{
                padding: '0px 20px'
            }} >
                { children }
            </main>
        </>
    )
}