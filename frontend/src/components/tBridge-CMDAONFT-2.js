import React from 'react'
import { ethers } from 'ethers'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { ThreeDots } from 'react-loading-icons'

const cmdaoOP = '0xA6B98E5F46e5daD1F0F39bD8678870d39A7D96b1'
const cmdaoJBC = '0x20724DC1D37E67B7B69B52300fDbA85E558d8F9A'
const jbcBridge = '0xcB2BB85d4310d5C742897403D5bDC11186460382'
const opBridge = '0x551dB316e8Aa02750Eb2DfDA35A78b6281ee7220'
const providerOP = new ethers.getDefaultProvider('https://opt-mainnet.g.alchemy.com/v2/0shzCCUF1JEPvKjqoEuftQcYrgIufNzE')
const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')

const TBridgeCMDAONFT2 = ({ config, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, erc721Abi, tbridgeNFTABI, uniNftBridgeABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const [nft, setNft] = React.useState([])
    const [nft2, setNft2] = React.useState([])

    React.useEffect(() => {
        window.scrollTo(0, 0)
        const cmdaoOPSC = new ethers.Contract(cmdaoOP, erc721Abi, providerOP)
        const cmdaoJBCSC = new ethers.Contract(cmdaoJBC, erc721Abi, providerJBC)
        setNft([])
        
        const thefetch = async () => {
            let nfts = []
            let walletRemoveDup = []
            if (address !== null) {
                const walletFilter = await cmdaoOPSC.filters.Transfer(null, address, null)
                const walletEvent = await cmdaoOPSC.queryFilter(walletFilter, 123743421, "latest")
                const walletMap = await Promise.all(walletEvent.map(async (obj) => String(obj.args.tokenId)))
                walletRemoveDup = walletMap.filter((obj, index) => walletMap.indexOf(obj) === index)
            }
            const data = address !== null ? await readContracts(config, {
                contracts: walletRemoveDup.map((item) => (
                    {
                        address: cmdaoOP,
                        abi: erc721Abi,
                        functionName: 'ownerOf',
                        args: [String(item)],
                        chainId: 10
                    }
                ))
            }) : null
            let yournftwallet = []
            for (let i = 0; i <= walletRemoveDup.length - 1 && address !== null; i++) {
                if (data[i].result.toUpperCase() === address.toUpperCase()) {
                    yournftwallet.push({Id: String(walletRemoveDup[i])})
                }
            }
            const data2 = address !== null ? await readContracts(config, {
                contracts: yournftwallet.map((item) => (
                    {
                        address: cmdaoOP,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [String(item.Id)],
                        chainId: 10
                    }
                ))
            }) : null
            for (let i = 0; i <= yournftwallet.length - 1; i++) {
                const nftipfs = data2[i].result
                let nft = {name: "", image: "", description: "", attributes: ""}
                try {
                    let response
                    if (nftipfs === 'ipfs://QmRq29Y7hCHLEWBvG1rBjSE8noePUbZrY14diTe1xdQLJ4') {
                        response = await fetch('https://gateway.pinata.cloud/ipfs/QmXVg9vc7meyMH4S4idWFUS7B1tNMgptW5kDBg9Eq4GDco')
                    } else {
                        response = await fetch(nftipfs.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"))
                    }
                    nft = await response.json()
                } catch {}
                nfts.push({
                    Id: yournftwallet[i].Id,
                    Name: nft.name + ' #' + yournftwallet[i].Id,
                    Image: nft.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
                    Description: nft.description,
                    Attribute: nft.attributes,
                })
            }
            if (nfts.length === 0) { nfts.push(null) }

            let nfts2 = []
            let wallet2RemoveDup = []
            if (address !== null) {
                const wallet2Filter = await cmdaoJBCSC.filters.Transfer(null, address, null)
                const wallet2Event = await cmdaoJBCSC.queryFilter(wallet2Filter, 335027, "latest")
                const wallet2Map = await Promise.all(wallet2Event.map(async (obj) => String(obj.args.tokenId)))
                wallet2RemoveDup = wallet2Map.filter((obj, index) => wallet2Map.indexOf(obj) === index)
            }
            const data3 = address !== null ? await readContracts(config, {
                contracts: wallet2RemoveDup.map((item) => (
                    {
                        address: cmdaoJBC,
                        abi: erc721Abi,
                        functionName: 'ownerOf',
                        args: [String(item)],
                        chainId: 8899
                    }
                ))
            }) : null
            let yournftwallet2 = []
            for (let i = 0; i <= wallet2RemoveDup.length - 1 && address !== null; i++) {
                if (data3[i].result.toUpperCase() === address.toUpperCase()) {
                    yournftwallet2.push({Id: String(wallet2RemoveDup[i])})
                }
            }
            const data4 = address !== null ? await readContracts(config, {
                contracts: yournftwallet2.map((item) => (
                    {
                        address: cmdaoJBC,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [String(item.Id)],
                        chainId: 8899
                    }
                ))
            }) : null
            for (let i = 0; i <= yournftwallet2.length - 1; i++) {
                const nftipfs = data4[i].result
                let nft = {name: "", image: "", description: "", attributes: ""}
                try {
                    const response = await fetch(nftipfs.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"))
                    nft = await response.json()
                } catch {}
                nfts2.push({
                    Id: yournftwallet2[i].Id,
                    Name: nft.name + ' #' + yournftwallet2[i].Id,
                    Image: nft.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
                    Description: nft.description,
                    Attribute: nft.attributes,
                })
            }
            if (nfts2.length === 0) { nfts2.push(null) }
            
            return [ nfts, nfts2, ]
        }

        const promise = thefetch()

        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            setNft(result[0])
            setNft2(result[1])
        })

    }, [config, address, txupdate, erc721Abi])

    const depositHandle = async (_nftId) => {
        setisLoading(true)
        try {
            const nftAllow = await readContract(config, {
                address: cmdaoJBC,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftId],
                chainId: 8899,
            })
            if (nftAllow.toUpperCase() !== jbcBridge.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: cmdaoJBC,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [jbcBridge, _nftId],
                    chainId: 8899,
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }        
            let { request } = await simulateContract(config, {
                address: jbcBridge,
                abi: tbridgeNFTABI,
                functionName: 'receiveNFTs',
                args: [_nftId],
                value: ethers.utils.parseEther('100'),
                chainId: 8899,
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const withdrawHandle = async (_nftId) => {
        setisLoading(true)
        try {
            const nftAllow = await readContract(config, {
                address: cmdaoOP,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftId],
                chainId: 10,
            })
            if (nftAllow.toUpperCase() !== opBridge.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: cmdaoOP,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [opBridge, _nftId],
                    chainId: 10,
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }        
            let { request } = await simulateContract(config, {
                address: opBridge,
                abi: uniNftBridgeABI,
                functionName: 'receiveNfts',
                args: [1, _nftId],
                value: ethers.utils.parseEther('0.0003'),
                chainId: 10,
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    return (
        <>
            <div style={{width: "70%", padding: "40px 45px 40px 0", margin: "10px 0", background: "transparent", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "scroll", fontSize: "16px"}} className='noscroll'>
                <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                    <div style={{width: "300px", marginBottom: "20px", textAlign: "initial", color: "#bdc2c4"}}>Bridging Fee</div>
                    <div style={{fontSize: "30px", textAlign: "left"}}>100 JBC/TX (JIBCHAIN)</div>
                    <div style={{fontSize: "30px", textAlign: "left"}}>0.0003 ETH/TX (OP MAINNET)</div>
                </div>
            </div>
            <div style={{width: "90%", marginBottom: "40px", textIndent: "20px", fontSize: "14px", letterSpacing: "1px", textAlign: "left", color: "rgb(189, 194, 196)"}} className="bold">My JIBCHAIN NFTs</div>
            {nft2.length > 0 ?
                <div style={{width: "90%", marginBottom: "40px", padding: "20px", border: "1px dashed #fff", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", flexWrap: "wrap"}}>
                    {nft2[0] !== null ?
                        <>
                            {nft2.map((item, index) => (
                                <>
                                    {String(item.Id).slice(0, 3) === '130' &&
                                        <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "space-around", padding: "15px", margin: "10px"}} className="nftCard" key={index}>
                                            <div style={{width: "150px", height: "150px", display: "flex", justifyContent: "center", overflow: "hidden"}}>
                                                <img src={item.Image} height="100%" alt="Can not load metadata." />
                                            </div>
                                            <div className="emp bold">{item.Name}</div>
                                            <div style={{fontSize: "12px", textAlign: "left", wordBreak: "break-word"}} className="light">{item.Description}</div>
                                            {(chain !== undefined && address !== null) ? 
                                                <>
                                                    {chain.id === 8899 ?
                                                        <div style={{alignSelf: "center"}} className="pixel button" onClick={() => depositHandle(item.Id)}>BRIDGE TO OP MAINNET</div> :
                                                        <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">BRIDGE TO OP MAINNET</div>
                                                    }
                                                </> :
                                                <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">BRIDGE TO OP MAINNET</div>
                                            }
                                        </div>
                                    }
                                </>
                            ))}
                            <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "center", padding: "15px", margin: "10px"}} className="nftCard">
                                <img src="https://l3img.b-cdn.net/ipfs/QmUmf3MEZg99qqLJ6GsewESVum8sm72gfH3wyiVPZGH6HA" width="150" alt="No_NFTs" />
                                <div style={{marginTop: "30px"}} className="bold">No more eligible NFTs.</div>
                            </div>
                        </> :
                        <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "center", padding: "15px", margin: "10px"}} className="nftCard">
                            {address !== null ?
                                <>
                                    <img src="https://l3img.b-cdn.net/ipfs/QmUmf3MEZg99qqLJ6GsewESVum8sm72gfH3wyiVPZGH6HA" width="150" alt="No_NFTs" />
                                    <div style={{marginTop: "30px"}} className="bold">This wallet doesn't have NFTs.</div>
                                </> :
                                <>
                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                </>
                            }
                        </div>
                    }
                </div> :
                <div style={{width: "90%", marginBottom: "80px", padding: "20px", border: "1px dashed #fff", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}> 
                    <div className="nftCard" style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", padding: "15px", margin: "10px", justifyContent: "center"}}>
                        <ThreeDots fill="#fff" />
                        <div className="bold" style={{marginTop: "80px"}}>Loading NFTs...</div>
                    </div>
                </div>
            }
            <div style={{width: "90%", marginBottom: "40px", textIndent: "20px", fontSize: "14px", letterSpacing: "1px", textAlign: "left", color: "rgb(189, 194, 196)"}} className="bold">My OP MAINNET NFTs</div>
            {nft.length > 0 ?
                <div style={{width: "90%", marginBottom: "80px", padding: "20px", border: "1px dashed #fff", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", flexWrap: "wrap"}}>
                    {nft[0] !== null ?
                        <>
                            {nft.map((item, index) => (
                                <>
                                    <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "space-around", padding: "15px", margin: "10px"}} className="nftCard" key={index}>
                                        <div style={{width: "150px", height: "150px", display: "flex", justifyContent: "center", overflow: "hidden"}}>
                                            <img src={item.Image} height="100%" alt="Can not load metadata." />
                                        </div>
                                        <div className="emp bold">{item.Name}</div>
                                        <div style={{fontSize: "12px", textAlign: "left", wordBreak: "break-word"}} className="light">{item.Description}</div>
                                        {(chain !== undefined && address !== null) ? 
                                            <>
                                                {chain.id === 10 ?
                                                    <div style={{alignSelf: "center"}} className="pixel button" onClick={() => withdrawHandle(item.Id)}>BRIDGE TO JBC</div> :
                                                    <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">BRIDGE TO JBC</div>
                                                }
                                            </> :
                                            <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">BRIDGE TO JBC</div>
                                        }
                                    </div>
                                </>
                            ))}
                        </> :
                        <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "center", padding: "15px", margin: "10px"}} className="nftCard">
                            {address !== null ?
                                <>
                                    <img src="https://l3img.b-cdn.net/ipfs/QmUmf3MEZg99qqLJ6GsewESVum8sm72gfH3wyiVPZGH6HA" width="150" alt="No_NFTs" />
                                    <div style={{marginTop: "30px"}} className="bold">This wallet doesn't have NFTs.</div>
                                </> :
                                <>
                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                </>
                            }
                        </div>
                    }
                </div> :
                <div style={{width: "90%", marginBottom: "80px", padding: "20px", border: "1px dashed #fff", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}> 
                    <div className="nftCard" style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", padding: "15px", margin: "10px", justifyContent: "center"}}>
                        <ThreeDots fill="#fff" />
                        <div className="bold" style={{marginTop: "80px"}}>Loading NFTs...</div>
                    </div>
                </div>
            }
        </>
    )
}
    
export default TBridgeCMDAONFT2