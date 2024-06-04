import Link from "next/link";

export default function sharePage() {
    return (
        <>
            <h1>sharePage</h1>
            <p>
                <Link href="/meals">/meals</Link>
            </p>
            <p>
                <Link href="/meals/share">/meals/share</Link>
            </p>
            <p>
                <Link href="/community">/community</Link>
            </p>
            <p>
                <Link href="/meals/1">/media/some slug</Link>
            </p>
        </>
    );
}
