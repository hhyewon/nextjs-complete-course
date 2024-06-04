import Link from "next/link";

export default function mealsPage() {
    return (
        <>
            <h1>mealsPage</h1>
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
                <Link href="/meals/2">/media/some slug</Link>
            </p>
        </>
    );
}
