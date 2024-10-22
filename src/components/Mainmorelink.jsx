
const Mainmorelink = ({txt,href,src,alt}) => {
    return (
        <>
            <div className="more__inf">
                <figure className="more__figure">
                    <img className="more__img" src={src} alt={alt} />
                </figure>
                <a href={href} className="more__text more__text__a" id="github">{txt}</a>
            </div>
        </>
    )
}

export default Mainmorelink