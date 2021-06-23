import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";


interface Layout {
    children: ReactNode;
}

export default function Layout(props: Layout) {
    const { children } = props;
    return (
        <div>

            <Header />
            <div className="container mt-5">{children}</div>
            <Footer />

        </div>
    )
}
