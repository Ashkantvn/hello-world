
import Link from "next/link";

const NavBar = ()=>{
    return(
        <header>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>
    )
}