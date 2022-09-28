import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className={'mainNavbar'}>
            <p className={'companyLogo'}>
                <a href="/">HOME</a>
            </p>
            <ul>
                <li>
                    <a href="/classes">CLASSES</a>
                </li>
                <li>
                    <a href="/events">EVENTS</a>
                </li>
                <li>
                    <a href="/shop">STORE</a>
                </li>
            </ul>
        </nav>
    )


}