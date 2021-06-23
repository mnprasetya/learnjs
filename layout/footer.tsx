import styles from "../styles/Home.module.css";
import Image from "next/dist/client/image";

export default function Footer() {
    return (
        <div className="footer fixed-bottom text-center border p-4">
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Crafter with Love by{''}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={32} height={6} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
