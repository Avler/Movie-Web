import "./footer.scss"

const Footer = () => {
    return(
        <section className="footer-cont">
            <div className="footer-cont-des">
                <p className="text">AvMovies  is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series.</p>
            </div>
            <div className="footer-cont-info">
                <ul className="footer-cont-list">
                    <li className="footer-cont-list-elm">Android App</li>
                    <li className="footer-cont-list-elm">Terms of service</li>
                    <li className="footer-cont-list-elm">Contact</li>
                    <li className="footer-cont-list-elm">Sitemap</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer