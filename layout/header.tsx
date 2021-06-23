import Link from 'next/link';
export default function Header() {
    return (
        <div >
            <nav className="navbar bg-dark text-light ">
                <Link href="/">
                    <a className="navbar-brand" >
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="60" height="30" alt="" />
                    </a>
                </Link>
                <div className="d-flex">

                    <Link href="/auth/login">
                        <a className="nav-link text-white">
                            Register
                        </a>
                    </Link>
                    <Link href="/auth/login">
                        <a className="nav-link text-white">
                            Login
                        </a>
                    </Link>
                </div>
            </nav>
            <nav className="navbar-collapse bg-white shadow p-2">
                <ul className="nav justify-content-center ">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                <h6>
                                    Home
                                </h6>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/tentang">
                            <a className="nav-link">
                                <h6>
                                    About
                                </h6>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/konten">
                            <a className="nav-link">
                                <h6>
                                    Content
                                </h6>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/tutorial">
                            <a className="nav-link">
                                <h6>
                                    How To
                                </h6>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
