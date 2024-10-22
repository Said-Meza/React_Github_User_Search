
import { useState } from "react";
import { useApiUser } from "../hooks/useApiUser";
import { Loader } from "./Loader";
import { Error } from "./Error";


import Header from "./Header"
import Main from "./Main"

const SearchUserGithub = () => {

  const [user, setUser] = useState("");

  const url = user ? `https://api.github.com/users/${user}` : "/apifake.json";

  const { data, err, loading } = useApiUser(url);


  return (
    <>
    
      <Header />
      {loading && <Loader />}
      {(err) ? <Error /> : <Main setUser={setUser} data={data} />}

    </>
  )
}

export default SearchUserGithub