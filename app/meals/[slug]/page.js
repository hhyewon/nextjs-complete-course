import Link from "next/link";

export default function somethingMealPage({ params }) {
    return (
        <>
            <h1>sharePage {params.slug}</h1>
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
                <Link href={`/meals/${params.slug}`}>/media/some slug</Link>
            </p>
        </>
    );
}
