import React from 'react';
import { useLocation } from 'react-router-dom';
function WikipidiaData(props) {
    const location = useLocation(); // Get the location object from React Router
    const searchData = location.state?.searchData;

    return (
        <div>
            <main style={{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"700px",height:"340px",border:"solid black 3px",borderRadius:"10px"}}>
                <h1 style={{textAlign:"center",fontFamily:"math"}}>Wikipida Data</h1>
                <h3 style={{display:"block",textAlign:"center",fontFamily:"math"}}>Tiltle: <span>{ searchData.title}</span> </h3>
                <h3 style={{textAlign:"center",fontFamily:"math"}}>snippet</h3><span style={{ fontFamily:"monospace",display:"block",fontSize:"15PX",textAlign:"center"}}> {searchData.snippet}</span>
            </div>
            </main>
        </div>
    );
}

export default WikipidiaData;