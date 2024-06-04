import Link from "next/link";
import logeImg from "@/assets/logo.png";

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <img src={logeImg.src} alt="몰라" />
                NextLevel Food
            </Link>

            <nav>
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
    );
}
