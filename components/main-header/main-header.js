import Link from "next/link";
import logeImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logeImg} alt="몰라" property />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
