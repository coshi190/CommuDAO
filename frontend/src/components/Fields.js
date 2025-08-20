import React from 'react'

const Fields = ({ callMode, navigate }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner" style={{flexDirection: "column"}}>
                    <div style={{fontSize: "65px", width: "fit-content"}} className="pixel">Fields</div>
                    <div style={{fontSize: "17px", width: "fit-content", marginTop: "30px"}} className="pixel">Stake NFTs to earn resources.</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="./background/fieldlogo.png" width="150" alt="Fields_Logo" />
                </div>
            </div>

            <div style={{width: "92.5%", borderBottom: "1px solid #dddade", marginTop: "60px"}}></div>
            <div style={{width: "95%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px", textAlign: "left"}} className="bold">CommuDAO Fields</div>
            <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)"}}>
                    <img src="../maps/bafkreig4zuhnfry34cycnxx36d6im4qknip35rfp773yrpy6pjozhpkjya.png" height="230" alt="Field_AncientForest" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">CommuDAO Servant</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}} className="pixel">
                            <img src="../tokens/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4.png" height="14" alt="$WOOD"/>
                        </div>
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(13); navigate('/fields/ancient-forest');}}>Go to Ancient Forest</div>
                </div>
                <div className="nftCard" style={{justifyContent: "center", margin: "10px", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)"}}>
                    <img src="../maps/bafkreibgjc2bzx42soeevrzn6ohlr44xly4sjhj6k6o2spcsia24qztyki.png" height="230" alt="Field_TheHeavenLand" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">The Mythical Guardians</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed", display: "flex", flexDirection: "row"}} className="pixel">
                            <img src="../tokens/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm.png" height="14" alt="$GOLD"/>
                            &nbsp;+&nbsp;
                            <img src="../tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" height="14" alt="$JBC"/>
                        </div>                    
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(17); navigate('/fields/the-heaven-land');}}>Go to The Heaven Land</div>
                </div>
            </div>

            <div style={{width: "92.5%", borderBottom: "1px solid #dddade", marginTop: "60px"}}></div>
            <div style={{width: "95%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px", textAlign: "left"}} className="bold">Partner Fields</div>
            <div style={{width: "95%", minHeight: 0, justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src="../maps/bafybeifgqrnqujzsozg56l4wfvqwxgf72kgjjwtwq6aedeywwfmvlg7on4.png" width="30px" alt="CM" />
                        <div className='light' style={{marginLeft: "10px"}}>CM Digital</div>
                    </div>
                    <img src="../maps/bafkreicoxmgbobc6eockaevaqmk2f7pwnfmtll2wze2npd2nyrxii2dblu.png" height="230" alt="Field_TunaLake" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">CM Hexa Cat Meaw JIB JIB</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="light">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}} className="pixel">
                            <img src="../tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="12" alt="$TUNA"/>
                        </div>
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(11); navigate('/fields/tuna-lake');}}>Go to Tuna Lake</div>
                </div>
                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src="../maps/bafybeifgqrnqujzsozg56l4wfvqwxgf72kgjjwtwq6aedeywwfmvlg7on4.png" width="30px" alt="CM" />
                        <div className='light' style={{marginLeft: "10px"}}>CM Digital</div>
                    </div>
                    <img src="../maps/bafkreiaplfqhpcall6mr7swyaqyatfri7p4z56i7ttfvhjmootnett3f3m.png" height="230" alt="Fields_OldWarehouse" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="pixel">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">CM Hexa Cat Meaw ORY</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div className="pixel">
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}}>
                            <img src="../tokens/bafkreidcakmgzpqytuzlvvok72r2hg2n5tqb25jfwecymelylaysdzkd6i.png" width="12" alt="$MICE"/>
                        </div>
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(12); navigate('/fields/old-warehouse');}}>Go to Old Warehouse</div>
                </div>
                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src="../maps/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4.png" width="30px" alt="AngelPlus" />
                        <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                    </div>
                    <img src="../maps/bafybeih4wlopgsgvw73dnjczn6un6sagasx6eyq57hzhj3l7gwlbuin75y.png" height="230" alt="Field_EasternFront" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">Angel Plus: Adventurer Card</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}} >
                            <img src="../tokens/bafkreia6rbj3o47qbw7o3vqd6ogylwjcjay5phsve5pixfvmw7nexwx3re.png" height="14" alt="$VABAG"/>
                        </div>                    
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(19); navigate('/fields/eastern-front');}}>Go to Eastern Front</div>
                </div>
            </div>

            <div style={{width: "95%", minHeight: 0, justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src="../maps/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce.png" width="30px" alt="TAODUM-TAOMEME" />
                        <div className='light' style={{marginLeft: "10px"}}>Taodum & Taomeme</div>
                    </div>
                    <img src="../maps/bafybeicly2zmib2gwjqv2p752php3ff4pqonllfiyuelcik366gqtsto7e.png" height="230" alt="Field_Mech_Harvest_Zone" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible Collection
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">TAODUM NFT, $TAOMEME</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}}>
                            <img src="../tokens/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4.png" height="16" alt="$GEAR"/>
                        </div>                    
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(100); navigate('/fields/mech-harvest-zone');}}>Go to Mech Harvest Zone</div>
                </div>

                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <div style={{height: "30px"}}></div>
                        <div className='light'>DOIJIB</div>
                    </div>
                    <img src="../maps/QmXzm6AiVShzsWfqxUdLMTrioaPef7fcjwqVrA5tmSHGyt.png" height="230" alt="Field_DjMining" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">DOIJIB: BB</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}}>
                            <img src="../tokens/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi.png" height="14" alt="$DOIJIB"/>
                        </div>                    
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(101); navigate('/fields/doijib-mining');}}>Go to DOIJIB Mining</div>
                </div>

                <div className="nftCard" style={{justifyContent: "center", margin: "10px", position: "relative", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <div style={{height: "30px"}}></div>
                        <div className='light'>DOIJIB</div>
                    </div>
                    <img src="../maps/QmfCzo1EhcpXHosafS97zWHXbeo21n1tceZ3KF4Kz8KxMz.png" height="230" alt="Field_CommuDOI" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">CommuDAO NFT</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "12px"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}}>
                            <img src="../tokens/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi.png" height="14" alt="$DOIJIB"/>
                        </div>                    
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(102); navigate('/fields/commudoi');}}>Go to CommuDOI</div>
                </div>
            </div>

            <div style={{width: "95%", minHeight: 0, marginBottom: "80px", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px", borderRadius: "5px", boxShadow: "none", border: "none", background: "rgba(0,0,0,.05)", fontSize: "12px"}}>
                    <div style={{position: "absolute", top: -25, right: -15, padding: "7.5px 20px", width: "150px", background: "rgb(255, 255, 255, 0.5)", letterSpacing: 1, border: "1px outset", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src="../maps/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce.png" width="30px" alt="TAODUM-TAOMEME" />
                        <div className='light' style={{marginLeft: "10px"}}>Taodum & Taomeme</div>
                    </div>
                    <img src="../maps/QmS45T1n74hpmfkTHcWe8pUd9v5YhE93a9XJfyqqa3BRT3.png" height="230" alt="THE-INNOVATE'S-PLANT" />
                    <div style={{marginTop: "30px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-ticket"></i>
                            Eligible NFTs
                        </div>
                        <div style={{color: "#000", borderBottom: "1px dashed"}} className="pixel">TAOMEME PFP</div>
                    </div>
                    <div style={{marginTop: "10px", width: "340px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            <i style={{fontSize: "14px", marginRight: "5px"}} className="fa fa-trophy"></i>
                            Earn
                        </div>
                        <div style={{borderBottom: "1px dashed"}}>
                            <img src="../tokens/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q.png" height="14" alt="$II"/>
                        </div>   
                    </div>
                    <div style={{width: "220px", margin: "40px 130px 0px 40px", border: "1px dashed #4637a9", justifyContent: "center"}} className="pixel hashtag" onClick={() => {callMode(103); navigate('/fields/the-innovates-plant');}}>Go to The Innovator's Plant</div>
                </div>
            </div>
        </>
    )
}

export default Fields