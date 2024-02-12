import { useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import  Me  from "./Me";
import  Gamma  from "./Gamma";


function About() {
    // const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (params.id === "999") navigate("/");
    }, [params, navigate]);

    //console.log(params);

    //return <>About component</>

    return (
        <>
            {params.name === "gamma" ?<Gamma/> :  <Me/>}
        </>
    );
}

export default About;