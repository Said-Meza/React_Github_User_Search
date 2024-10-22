import PropTypes from 'prop-types';

import Maindata from "./Maindata"
import Mainmore from "./Mainmore"
import Mainmorelink from "./Mainmorelink"

const Main = ({setUser,data}) => {
    
    if(!data){
        data="";
    }
        let joined= data.created_at || "2014-10-01T18:31:36Z"

        let date = new Date(joined) ;
        let fecha = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
    


    const handleSubmit = (e) => {
        e.preventDefault()
        let username= e.target.elements.txtsearch.value;
        if(username===null || username==="") {
            return;
        }else{
            setUser(username);
        }
    }

    return (
        <>
            <main className="main container">

                <section className="main__form">

                    <form onSubmit={handleSubmit} className="form__form" method="post" >

                        <div className="form__search">

                            <figure className="form__figure">
                                <img className="form__icon" src="lupa.svg" alt="Search" />
                            </figure>

                            <input className="form__search__input" type="search" name="txtsearch" id="txtsearch" required placeholder="Search GitHub username..." />

                            <button className="form__btn">Search</button>

                        </div>

                    </form>

                </section>

                <section className="main__content">

                    <section className="main__user container">

                        <figure className="user__figure">
                            <img className="user__img" id="user_img" src={data.avatar_url?data.avatar_url:"Not inf"} alt="user" />
                        </figure>

                        <section className="user__inf">

                            <div className="user__inf__name">
                                <h3 className="inf__name" id="inf__name" >{data.name?data.name:"Not inf"} </h3>
                                <h5 className="inf__username" id="username">{data.login?data.login:"Not inf"}</h5>
                            </div>

                            <p className="user__date" id="date_start"> joined {fecha?fecha:"not inf"} </p>

                        </section>

                        <section className="main__bio container">
                            <p className="main__paragraph" id="main__paragraph">{data.bio?data.bio:"Not inf"}
                            </p>
                        </section>

                    </section>


                    <section className="main__data container">

                        <Maindata title={"repos"} number={data.public_repos?data.public_repos:"0"} />
                        <Maindata title={"Followers"} number={data.followers?data.followers:"0"} />
                        <Maindata title={"Following"} number={data.following?data.following:"0"} />

                    </section>


                    <section className="main__more container">


                        <div className="more_container">
                            <Mainmore txt={data.location?data.location:"Not inf"} src={"/gps.svg"} alt={"location"} />
                            <Mainmorelink txt={"htps://github.blog"} href={data.html_url?data.html_url:"#"} src={"/enlace.svg"} alt={"enlace"} />
                        </div>

                        <div className="more_container ">
                            <Mainmore txt={`@${data.twitter_username?data.twitter_username:"Not inf"}`} src={"/x.svg"} alt={"SocialMedia"} />
                            <Mainmorelink txt={"@Blog"} href={data.blog?data.blog:"#"} src={"/home.svg"} alt={"home"} />
                        </div>

                    </section>

                </section>

            </main>
        </>
    )
}

Main.propTypes={
    data: PropTypes.object,
    setUser: PropTypes.func,
}
export default Main