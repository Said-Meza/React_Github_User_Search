
const Mainmore = ({txt,src,alt}) => {
    return (
        <>
            <div className="more__inf">

                <figure className="more__figure">
                    <img className="more__img" src={src} alt={alt} />
                </figure>

                <p className="more__text" id="gps">{txt}</p>

            </div>
        </>
    )
}

export default Mainmore