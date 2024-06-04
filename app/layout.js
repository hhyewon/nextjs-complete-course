import "./globals.css";

export const metadata = {
    title: "NextJS Course App",
    description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
    // layout: page를 감싸고 있음
    // children: 현재 활성화 중인 page.js
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
