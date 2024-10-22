

const Maindata = ({title,number}) => {
    return (
        <>
            <div className="conteiner">
                <h3 className="data__inf">{title}</h3>
                <h2 className="data__number" id="repos">{number}</h2>
            </div>
        </>
    )
}

export default Maindata