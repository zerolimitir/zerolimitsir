import Head from 'next/head'
import Installation from "@/pages/package/react-huge-icons/installation";
import Link from 'next/link';

export default function Home() {

    return (
        <>
            <Head>
                <title>Zero Icons Document</title>
                <meta name="description" content="Developer of ReactJs and NextJs app packages | Zero Icons"/>
            </Head>

            <main>
                <Link href="/package">
                    go to packages
                </Link>
            </main>
        </>
    )
}
