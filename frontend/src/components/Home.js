import React from 'react'

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <div style={{overflow: "scroll", minHeight: "90vh", padding: 0, margin: "80px 0 20px 0", textAlign: "left", fontSize: "22px", flexFlow: "row wrap", alignItems: "flex-end", justifyContent: "flex-start", width: "98%", borderRadius: "15px"}} className="collection noscroll welcome pixel">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "50px"}}>
                    <div style={{letterSpacing: "1.5px", color: "#fff"}} className="bold motto">CommuDAO Legacy V1</div>
                </div>
            </div>
        </>
    )
}

export default Home