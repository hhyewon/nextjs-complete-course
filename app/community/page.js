import Link from "next/link";

export default function CommunityPage() {
    return (
        <>
            <h1>CommunityPage</h1>
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
                <Link href="/meals/3">/media/some slug</Link>
            </p>
        </>
    );
}
