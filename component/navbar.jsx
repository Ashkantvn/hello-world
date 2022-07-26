import navStyle from '../styles/Navbar.module.css';
import Link from "next/link";

const Navbar = ()=>{
    const username = "james";
    return(
        <header className={navStyle.navbar}>
            <nav>
                <Link  href='/'><a className={navStyle.link}>Home</a></Link>
                <Link  href={`/user/${username}`}><a className={navStyle.link}>user</a></Link>
                <Link  href='/about'><a className={navStyle.link}>About</a></Link>
            </nav>
        </header>
    )
}

export default Navbar;