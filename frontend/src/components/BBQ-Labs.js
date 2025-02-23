import React from 'react'
import { ethers } from 'ethers'
import { getBalance, readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract, sendTransaction } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { switchChain } from '@wagmi/core'
import { useAppKit } from '@reown/appkit/react';
const { ethereum } = window
const bbqToken = '0x87dfDc26ff6e8986e2F773FAE3Bfa51C8f152cF0'
const bbqLab = '0x2D2901B3c1A9770008AA38A095f71FB4e136c0f3'
const woodToken = '0xc71AEB41A444AFdB4BfA28b4Ed1c1B5E1cB6d958'
const gemToken = '0x222B20bCBBa261DfaaEEe6395f672F15c4d7e88F'
const infpowLab = '0x0784a859e6d3b1F703465fB07d2329eEF8dB0780'
const cmdaoNft = '0x20724DC1D37E67B7B69B52300fDbA85E558d8F9A'
const slot1 = '0x171b341FD1B8a2aDc1299f34961e19B552238cb5'
const houseStaking = '0xc4dB6374EeCa3743F8044ae995892827B62b14fe'
const transporthub = '0xC673f53b490199AF4BfE17F2d77eBc72Bde3b964'
const sourcethub = '0xf623B7164cb81DCfC3836492fb09Ae005be57322'
const sourcethub2 = '0x18bc873eF20CB3Fc747b5B9Df3b675E91E7C7BE5'
const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')

const BBQLabs = ({ config, callMode, navigate, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, bbqLab01ABI, erc20Abi, transportHubABI, transportHub2ABI, houseStakingABI, slot1ABI, erc721Abi, sourceThubABI, pzaLabABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [bbqBalance, setBbqBalance] = React.useState(0)
    const [woodBalance, setWoodBalance] = React.useState(0)
    const [levelCraftBBQ, setLevelCraftBBQ] = React.useState(0)
    const [isCraftBBQ, setIsCraftBBQ] = React.useState(null)
    const [timetoClaimBBQ, setTimeToClaimBBQ] = React.useState(0)
    const [canCraftBBQ, setCanCraftBBQ] = React.useState(false)
    const [isCraftINFPOW, setIsCraftINFPOW] = React.useState(null)
    const [timetoClaimINFPOW, setTimeToClaimINFPOW] = React.useState(0)
    const [canCraftINFPOW, setCanCraftINFPOW] = React.useState(false)
    const [gemBalance, setGemBalance] = React.useState(0)
    const [infpowBalance, setInfpowBalance] = React.useState(0)
    const [houseSelected, setHouseSelected] = React.useState('')
    const [transportValue, setTransportValue] = React.useState('')
    const [houseSelected2, setHouseSelected2] = React.useState('')
    const [transportValue2, setTransportValue2] = React.useState('')
    const [allPowZ02, setAllPowZ02] = React.useState(0)
    const [thubLvZ02, setThubLvZ02] = React.useState(0)
    const [nextDayThubZ02, setNextDayThubZ02] = React.useState(0)
    const [thubCapZ02, setThubCapZ02] = React.useState(0)
    const [thubFeeZ02, setThubFeeZ02] = React.useState(0)
    const [allPowA01, setAllPowA01] = React.useState(0)
    const [thubLvA01, setThubLvA01] = React.useState(0)
    const [nextDayThubA01, setNextDayThubA01] = React.useState(0)
    const [thubCapA01, setThubCapA01] = React.useState(0)
    const [thubFeeA01, setThubFeeA01] = React.useState(0)
    const [allPowA02, setAllPowA02] = React.useState(0)
    const [thubLvA02, setThubLvA02] = React.useState(0)
    const [nextDayThubA02, setNextDayThubA02] = React.useState(0)
    const [thubCapA02, setThubCapA02] = React.useState(0)
    const [thubFeeA02, setThubFeeA02] = React.useState(0)
    const [allPowA03, setAllPowA03] = React.useState(0)
    const [thubLvA03, setThubLvA03] = React.useState(0)
    const [nextDayThubA03, setNextDayThubA03] = React.useState(0)
    const [thubCapA03, setThubCapA03] = React.useState(0)
    const [thubFeeA03, setThubFeeA03] = React.useState(0)
    const [allPowA04, setAllPowA04] = React.useState(0)
    const [thubLvA04, setThubLvA04] = React.useState(0)
    const [nextDayThubA04, setNextDayThubA04] = React.useState(0)
    const [thubCapA04, setThubCapA04] = React.useState(0)
    const [thubFeeA04, setThubFeeA04] = React.useState(0)
    const [allPowA05, setAllPowA05] = React.useState(0)
    const [thubLvA05, setThubLvA05] = React.useState(0)
    const [nextDayThubA05, setNextDayThubA05] = React.useState(0)
    const [thubCapA05, setThubCapA05] = React.useState(0)
    const [thubFeeA05, setThubFeeA05] = React.useState(0)
    const [allPowA06, setAllPowA06] = React.useState(0)
    const [thubLvA06, setThubLvA06] = React.useState(0)
    const [nextDayThubA06, setNextDayThubA06] = React.useState(0)
    const [thubCapA06, setThubCapA06] = React.useState(0)
    const [thubFeeA06, setThubFeeA06] = React.useState(0)
    const [allPowA07, setAllPowA07] = React.useState(0)
    const [thubLvA07, setThubLvA07] = React.useState(0)
    const [nextDayThubA07, setNextDayThubA07] = React.useState(0)
    const [thubCapA07, setThubCapA07] = React.useState(0)
    const [thubFeeA07, setThubFeeA07] = React.useState(0)
    const [allPowA08, setAllPowA08] = React.useState(0)
    const [thubLvA08, setThubLvA08] = React.useState(0)
    const [nextDayThubA08, setNextDayThubA08] = React.useState(0)
    const [thubCapA08, setThubCapA08] = React.useState(0)
    const [thubFeeA08, setThubFeeA08] = React.useState(0)
    const [allPowA09, setAllPowA09] = React.useState(0)
    const [thubLvA09, setThubLvA09] = React.useState(0)
    const [nextDayThubA09, setNextDayThubA09] = React.useState(0)
    const [thubCapA09, setThubCapA09] = React.useState(0)
    const [thubFeeA09, setThubFeeA09] = React.useState(0)
    const [allPowA10, setAllPowA10] = React.useState(0)
    const [thubLvA10, setThubLvA10] = React.useState(0)
    const [nextDayThubA10, setNextDayThubA10] = React.useState(0)
    const [thubCapA10, setThubCapA10] = React.useState(0)
    const [thubFeeA10, setThubFeeA10] = React.useState(0)
    const [allPowA11, setAllPowA11] = React.useState(0)
    const [thubLvA11, setThubLvA11] = React.useState(0)
    const [nextDayThubA11, setNextDayThubA11] = React.useState(0)
    const [thubCapA11, setThubCapA11] = React.useState(0)
    const [thubFeeA11, setThubFeeA11] = React.useState(0)
    const [allPowZ06, setAllPowZ06] = React.useState(0)
    const [thubLvZ06, setThubLvZ06] = React.useState(0)
    const [nextDayThubZ06, setNextDayThubZ06] = React.useState(0)
    const [thubCapZ06, setThubCapZ06] = React.useState(0)
    const [thubFeeZ06, setThubFeeZ06] = React.useState(0)
    const [allPowZ10, setAllPowZ10] = React.useState(0)
    const [thubLvZ10, setThubLvZ10] = React.useState(0)
    const [nextDayThubZ10, setNextDayThubZ10] = React.useState(0)
    const [thubCapZ10, setThubCapZ10] = React.useState(0)
    const [thubFeeZ10, setThubFeeZ10] = React.useState(0)
    const [allPowB01, setAllPowB01] = React.useState(0)
    const [thubLvB01, setThubLvB01] = React.useState(0)
    const [nextDayThubB01, setNextDayThubB01] = React.useState(0)
    const [thubCapB01, setThubCapB01] = React.useState(0)
    const [thubFeeB01, setThubFeeB01] = React.useState(0)
    const [allPowB02, setAllPowB02] = React.useState(0)
    const [thubLvB02, setThubLvB02] = React.useState(0)
    const [nextDayThubB02, setNextDayThubB02] = React.useState(0)
    const [thubCapB02, setThubCapB02] = React.useState(0)
    const [thubFeeB02, setThubFeeB02] = React.useState(0)
    const [allPowB03, setAllPowB03] = React.useState(0)
    const [thubLvB03, setThubLvB03] = React.useState(0)
    const [nextDayThubB03, setNextDayThubB03] = React.useState(0)
    const [thubCapB03, setThubCapB03] = React.useState(0)
    const [thubFeeB03, setThubFeeB03] = React.useState(0)
    const [allPowB04, setAllPowB04] = React.useState(0)
    const [thubLvB04, setThubLvB04] = React.useState(0)
    const [nextDayThubB04, setNextDayThubB04] = React.useState(0)
    const [thubCapB04, setThubCapB04] = React.useState(0)
    const [thubFeeB04, setThubFeeB04] = React.useState(0)
    const [allPowB05, setAllPowB05] = React.useState(0)
    const [thubLvB05, setThubLvB05] = React.useState(0)
    const [nextDayThubB05, setNextDayThubB05] = React.useState(0)
    const [thubCapB05, setThubCapB05] = React.useState(0)
    const [thubFeeB05, setThubFeeB05] = React.useState(0)
    const [allPowB06, setAllPowB06] = React.useState(0)
    const [thubLvB06, setThubLvB06] = React.useState(0)
    const [nextDayThubB06, setNextDayThubB06] = React.useState(0)
    const [thubCapB06, setThubCapB06] = React.useState(0)
    const [thubFeeB06, setThubFeeB06] = React.useState(0)
    const [allPowB07, setAllPowB07] = React.useState(0)
    const [thubLvB07, setThubLvB07] = React.useState(0)
    const [nextDayThubB07, setNextDayThubB07] = React.useState(0)
    const [thubCapB07, setThubCapB07] = React.useState(0)
    const [thubFeeB07, setThubFeeB07] = React.useState(0)
    const [allPowB08, setAllPowB08] = React.useState(0)
    const [thubLvB08, setThubLvB08] = React.useState(0)
    const [nextDayThubB08, setNextDayThubB08] = React.useState(0)
    const [thubCapB08, setThubCapB08] = React.useState(0)
    const [thubFeeB08, setThubFeeB08] = React.useState(0)
    const [allPowB09, setAllPowB09] = React.useState(0)
    const [thubLvB09, setThubLvB09] = React.useState(0)
    const [nextDayThubB09, setNextDayThubB09] = React.useState(0)
    const [thubCapB09, setThubCapB09] = React.useState(0)
    const [thubFeeB09, setThubFeeB09] = React.useState(0)
    const [allPowB10, setAllPowB10] = React.useState(0)
    const [thubLvB10, setThubLvB10] = React.useState(0)
    const [nextDayThubB10, setNextDayThubB10] = React.useState(0)
    const [thubCapB10, setThubCapB10] = React.useState(0)
    const [thubFeeB10, setThubFeeB10] = React.useState(0)
    const [allPowB11, setAllPowB11] = React.useState(0)
    const [thubLvB11, setThubLvB11] = React.useState(0)
    const [nextDayThubB11, setNextDayThubB11] = React.useState(0)
    const [thubCapB11, setThubCapB11] = React.useState(0)
    const [thubFeeB11, setThubFeeB11] = React.useState(0)
    const [allPowZ11, setAllPowZ11] = React.useState(0)
    const [thubLvZ11, setThubLvZ11] = React.useState(0)
    const [nextDayThubZ11, setNextDayThubZ11] = React.useState(0)
    const [thubCapZ11, setThubCapZ11] = React.useState(0)
    const [thubFeeZ11, setThubFeeZ11] = React.useState(0)
    const [allPowC01, setAllPowC01] = React.useState(0)
    const [thubLvC01, setThubLvC01] = React.useState(0)
    const [nextDayThubC01, setNextDayThubC01] = React.useState(0)
    const [thubCapC01, setThubCapC01] = React.useState(0)
    const [thubFeeC01, setThubFeeC01] = React.useState(0)
    const [allPowC02, setAllPowC02] = React.useState(0)
    const [thubLvC02, setThubLvC02] = React.useState(0)
    const [nextDayThubC02, setNextDayThubC02] = React.useState(0)
    const [thubCapC02, setThubCapC02] = React.useState(0)
    const [thubFeeC02, setThubFeeC02] = React.useState(0)
    const [allPowC03, setAllPowC03] = React.useState(0)
    const [thubLvC03, setThubLvC03] = React.useState(0)
    const [nextDayThubC03, setNextDayThubC03] = React.useState(0)
    const [thubCapC03, setThubCapC03] = React.useState(0)
    const [thubFeeC03, setThubFeeC03] = React.useState(0)
    const [allPowC04, setAllPowC04] = React.useState(0)
    const [thubLvC04, setThubLvC04] = React.useState(0)
    const [nextDayThubC04, setNextDayThubC04] = React.useState(0)
    const [thubCapC04, setThubCapC04] = React.useState(0)
    const [thubFeeC04, setThubFeeC04] = React.useState(0)
    const [allPowC05, setAllPowC05] = React.useState(0)
    const [thubLvC05, setThubLvC05] = React.useState(0)
    const [nextDayThubC05, setNextDayThubC05] = React.useState(0)
    const [thubCapC05, setThubCapC05] = React.useState(0)
    const [thubFeeC05, setThubFeeC05] = React.useState(0)
    const [allPowC06, setAllPowC06] = React.useState(0)
    const [thubLvC06, setThubLvC06] = React.useState(0)
    const [nextDayThubC06, setNextDayThubC06] = React.useState(0)
    const [thubCapC06, setThubCapC06] = React.useState(0)
    const [thubFeeC06, setThubFeeC06] = React.useState(0)
    const [allPowC07, setAllPowC07] = React.useState(0)
    const [thubLvC07, setThubLvC07] = React.useState(0)
    const [nextDayThubC07, setNextDayThubC07] = React.useState(0)
    const [thubCapC07, setThubCapC07] = React.useState(0)
    const [thubFeeC07, setThubFeeC07] = React.useState(0)
    const [allPowC08, setAllPowC08] = React.useState(0)
    const [thubLvC08, setThubLvC08] = React.useState(0)
    const [nextDayThubC08, setNextDayThubC08] = React.useState(0)
    const [thubCapC08, setThubCapC08] = React.useState(0)
    const [thubFeeC08, setThubFeeC08] = React.useState(0)
    const [allPowC09, setAllPowC09] = React.useState(0)
    const [thubLvC09, setThubLvC09] = React.useState(0)
    const [nextDayThubC09, setNextDayThubC09] = React.useState(0)
    const [thubCapC09, setThubCapC09] = React.useState(0)
    const [thubFeeC09, setThubFeeC09] = React.useState(0)
    const [allPowC10, setAllPowC10] = React.useState(0)
    const [thubLvC10, setThubLvC10] = React.useState(0)
    const [nextDayThubC10, setNextDayThubC10] = React.useState(0)
    const [thubCapC10, setThubCapC10] = React.useState(0)
    const [thubFeeC10, setThubFeeC10] = React.useState(0)
    const [allPowC11, setAllPowC11] = React.useState(0)
    const [thubLvC11, setThubLvC11] = React.useState(0)
    const [nextDayThubC11, setNextDayThubC11] = React.useState(0)
    const [thubCapC11, setThubCapC11] = React.useState(0)
    const [thubFeeC11, setThubFeeC11] = React.useState(0)
    const [allPowC12, setAllPowC12] = React.useState(0)
    const [thubLvC12, setThubLvC12] = React.useState(0)
    const [nextDayThubC12, setNextDayThubC12] = React.useState(0)
    const [thubCapC12, setThubCapC12] = React.useState(0)
    const [thubFeeC12, setThubFeeC12] = React.useState(0)
    const [allPowC13, setAllPowC13] = React.useState(0)
    const [thubLvC13, setThubLvC13] = React.useState(0)
    const [nextDayThubC13, setNextDayThubC13] = React.useState(0)
    const [thubCapC13, setThubCapC13] = React.useState(0)
    const [thubFeeC13, setThubFeeC13] = React.useState(0)
    const [allPowC14, setAllPowC14] = React.useState(0)
    const [thubLvC14, setThubLvC14] = React.useState(0)
    const [nextDayThubC14, setNextDayThubC14] = React.useState(0)
    const [thubCapC14, setThubCapC14] = React.useState(0)
    const [thubFeeC14, setThubFeeC14] = React.useState(0)
    const [allPowC15, setAllPowC15] = React.useState(0)
    const [thubLvC15, setThubLvC15] = React.useState(0)
    const [nextDayThubC15, setNextDayThubC15] = React.useState(0)
    const [thubCapC15, setThubCapC15] = React.useState(0)
    const [thubFeeC15, setThubFeeC15] = React.useState(0)
    const [allPowC16, setAllPowC16] = React.useState(0)
    const [thubLvC16, setThubLvC16] = React.useState(0)
    const [nextDayThubC16, setNextDayThubC16] = React.useState(0)
    const [thubCapC16, setThubCapC16] = React.useState(0)
    const [thubFeeC16, setThubFeeC16] = React.useState(0)
    const [allPowC17, setAllPowC17] = React.useState(0)
    const [thubLvC17, setThubLvC17] = React.useState(0)
    const [nextDayThubC17, setNextDayThubC17] = React.useState(0)
    const [thubCapC17, setThubCapC17] = React.useState(0)
    const [thubFeeC17, setThubFeeC17] = React.useState(0)
    const [allPowC18, setAllPowC18] = React.useState(0)
    const [thubLvC18, setThubLvC18] = React.useState(0)
    const [nextDayThubC18, setNextDayThubC18] = React.useState(0)
    const [thubCapC18, setThubCapC18] = React.useState(0)
    const [thubFeeC18, setThubFeeC18] = React.useState(0)
    const [allPowC19, setAllPowC19] = React.useState(0)
    const [thubLvC19, setThubLvC19] = React.useState(0)
    const [nextDayThubC19, setNextDayThubC19] = React.useState(0)
    const [thubCapC19, setThubCapC19] = React.useState(0)
    const [thubFeeC19, setThubFeeC19] = React.useState(0)
    const [allPowC20, setAllPowC20] = React.useState(0)
    const [thubLvC20, setThubLvC20] = React.useState(0)
    const [nextDayThubC20, setNextDayThubC20] = React.useState(0)
    const [thubCapC20, setThubCapC20] = React.useState(0)
    const [thubFeeC20, setThubFeeC20] = React.useState(0)
    const [allPowC21, setAllPowC21] = React.useState(0)
    const [thubLvC21, setThubLvC21] = React.useState(0)
    const [nextDayThubC21, setNextDayThubC21] = React.useState(0)
    const [thubCapC21, setThubCapC21] = React.useState(0)
    const [thubFeeC21, setThubFeeC21] = React.useState(0)
    const [allPowC22, setAllPowC22] = React.useState(0)
    const [thubLvC22, setThubLvC22] = React.useState(0)
    const [nextDayThubC22, setNextDayThubC22] = React.useState(0)
    const [thubCapC22, setThubCapC22] = React.useState(0)
    const [thubFeeC22, setThubFeeC22] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)  
        console.log("Connected to " + address)
        const cmdaonftSC = new ethers.Contract(cmdaoNft, erc721Abi, providerJBC)
        
        const thefetch = async () => {
            const cmdBal = address !== null ?
                await getBalance(config, { address: address, }) :
                {formatted: 0}
            const data = address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 190
                    },
                    {
                        address: bbqLab,
                        abi: bbqLab01ABI,
                        functionName: 'supplier',
                        args: [address],
                        chainId: 190
                    },
                    {
                        address: woodToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 190
                    },
                    {
                        address: gemToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 190
                    },
                    {
                        address: infpowLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                        chainId: 190
                    },
                    {
                        address: infpowLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 190
                    },
                ],
            }) : [{result: 0}, {result: [0, 0, 0]}, {result: 0}, {result: 0}, {result: [0, 0]}, {result: 0}]
            
            const bbqBal = data[0].result
            const labLogBBQ = data[1].result
            const woodBal = data[2].result
            const gemBal = data[3].result
            const labLogInfpow = data[4].result
            const infpowBal = data[5].result
            const _canCraftBBQ = Number(ethers.utils.formatEther(woodBal)) >= 1000 && Number(cmdBal.formatted) >= 0.01 ? true : false
            const _canCraftINFPOW = Number(ethers.utils.formatEther(gemBal)) >= 500 && Number(cmdBal.formatted) >= 1 ? true : false

            const data2 = await readContracts(config, {
                contracts: [
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10026010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10026010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10026010'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10026002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10026002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10026002'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001001'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001002'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001003'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001004'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001005'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001006'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001007'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001008'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001009'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001010'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10001011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10001011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10001011'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10026006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10026006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10026006'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002001'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002002'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002003'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002004'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002005'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002006'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002007'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002008'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002009'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002010'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10002011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10002011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10002011'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10026011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10026011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10026011'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003001'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003001'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003002'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003002'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003003'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003003'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003004'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003004'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003005'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003005'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003006'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003006'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003007'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003007'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003008'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003008'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003009'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003009'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003010'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003010'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003011'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003011'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003012'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003012'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003012'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003013'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003013'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003013'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003014'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003014'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003014'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003015'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003015'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003015'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003016'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003016'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003016'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003017'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003017'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003017'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003018'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003018'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003018'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003019'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003019'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003019'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003020'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003020'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003020'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003021'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003021'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003021'],
                        chainId: 8899,
                    },
                    {
                        address: slot1,
                        abi: slot1ABI,
                        functionName: 'slotOwner',
                        args: ['10003022'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'hubState',
                        args: ['10003022'],
                        chainId: 8899,
                    },
                    {
                        address: transporthub,
                        abi: transportHubABI,
                        functionName: 'baseCapacity',
                        args: ['10003022'],
                        chainId: 8899,
                    },
                ],
            }) 

            const stakeFilter = await cmdaonftSC.filters.Transfer(null, houseStaking, null)
            const stakeEvent = await cmdaonftSC.queryFilter(stakeFilter, 3700385, "latest")
            const stakeMap = await Promise.all(stakeEvent.map(async (obj) => String(obj.args.tokenId)))
            const stakeRemoveDup = stakeMap.filter((obj, index) => stakeMap.indexOf(obj) === index)
            const data0 = await readContracts(config, {
                contracts: stakeRemoveDup.map((item) => (
                    {
                        address: houseStaking,
                        abi: houseStakingABI,
                        functionName: 'nftStake',
                        args: [1, String(item)],
                        chainId: 8899,
                    }
                ))
            })
            let _allPowZ02 = 0
            let _allPowA01 = 0
            let _allPowA02 = 0
            let _allPowA03 = 0
            let _allPowA04 = 0
            let _allPowA05 = 0
            let _allPowA06 = 0
            let _allPowA07 = 0
            let _allPowA08 = 0
            let _allPowA09 = 0
            let _allPowA10 = 0
            let _allPowA11 = 0
            let _allPowZ06 = 0
            let _allPowZ10 = 0
            let _allPowB01 = 0
            let _allPowB02 = 0
            let _allPowB03 = 0
            let _allPowB04 = 0
            let _allPowB05 = 0
            let _allPowB06 = 0
            let _allPowB07 = 0
            let _allPowB08 = 0
            let _allPowB09 = 0
            let _allPowB10 = 0
            let _allPowB11 = 0
            let _allPowZ11 = 0
            let _allPowC01 = 0
            let _allPowC02 = 0
            let _allPowC03 = 0
            let _allPowC04 = 0
            let _allPowC05 = 0
            let _allPowC06 = 0
            let _allPowC07 = 0
            let _allPowC08 = 0
            let _allPowC09 = 0
            let _allPowC10 = 0
            let _allPowC11 = 0
            let _allPowC12 = 0
            let _allPowC13 = 0
            let _allPowC14 = 0
            let _allPowC15 = 0
            let _allPowC16 = 0
            let _allPowC17 = 0
            let _allPowC18 = 0
            let _allPowC19 = 0
            let _allPowC20 = 0
            let _allPowC21 = 0
            let _allPowC22 = 0
            for (let i = 0; i <= stakeRemoveDup.length - 1; i++) {
                if (data0[i].result[0].toUpperCase() === data2[3].result.toUpperCase() && Number(data0[i].result[4]) === 10026002) {
                    _allPowZ02 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[6].result.toUpperCase() && Number(data0[i].result[4]) === 10001001) {
                    _allPowA01 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[9].result.toUpperCase() && Number(data0[i].result[4]) === 10001002) {
                    _allPowA02 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[12].result.toUpperCase() && Number(data0[i].result[4]) === 10001003) {
                    _allPowA03 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[15].result.toUpperCase() && Number(data0[i].result[4]) === 10001004) {
                    _allPowA04 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[18].result.toUpperCase() && Number(data0[i].result[4]) === 10001005) {
                    _allPowA05 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[21].result.toUpperCase() && Number(data0[i].result[4]) === 10001006) {
                    _allPowA06 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[24].result.toUpperCase() && Number(data0[i].result[4]) === 10001007) {
                    _allPowA07 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[27].result.toUpperCase() && Number(data0[i].result[4]) === 10001008) {
                    _allPowA08 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[30].result.toUpperCase() && Number(data0[i].result[4]) === 10001009) {
                    _allPowA09 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[33].result.toUpperCase() && Number(data0[i].result[4]) === 10001010) {
                    _allPowA10 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[36].result.toUpperCase() && Number(data0[i].result[4]) === 10001011) {
                    _allPowA11 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[39].result.toUpperCase() && Number(data0[i].result[4]) === 10026006) {
                    _allPowZ06 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[0].result.toUpperCase() && Number(data0[i].result[4]) === 10026010) {
                    _allPowZ10 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[42].result.toUpperCase() && Number(data0[i].result[4]) === 10002001) {
                    _allPowB01 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[45].result.toUpperCase() && Number(data0[i].result[4]) === 10002002) {
                    _allPowB02 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[48].result.toUpperCase() && Number(data0[i].result[4]) === 10002003) {
                    _allPowB03 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[51].result.toUpperCase() && Number(data0[i].result[4]) === 10002004) {
                    _allPowB04 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[54].result.toUpperCase() && Number(data0[i].result[4]) === 10002005) {
                    _allPowB05 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[57].result.toUpperCase() && Number(data0[i].result[4]) === 10002006) {
                    _allPowB06 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[60].result.toUpperCase() && Number(data0[i].result[4]) === 10002007) {
                    _allPowB07 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[63].result.toUpperCase() && Number(data0[i].result[4]) === 10002008) {
                    _allPowB08 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[66].result.toUpperCase() && Number(data0[i].result[4]) === 10002009) {
                    _allPowB09 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[69].result.toUpperCase() && Number(data0[i].result[4]) === 10002010) {
                    _allPowB10 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[72].result.toUpperCase() && Number(data0[i].result[4]) === 10002011) {
                    _allPowB11 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[75].result.toUpperCase() && Number(data0[i].result[4]) === 10026011) {
                    _allPowZ11 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[78].result.toUpperCase() && Number(data0[i].result[4]) === 10003001) {
                    _allPowC01 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[81].result.toUpperCase() && Number(data0[i].result[4]) === 10003002) {
                    _allPowC02 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[84].result.toUpperCase() && Number(data0[i].result[4]) === 10003003) {
                    _allPowC03 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[87].result.toUpperCase() && Number(data0[i].result[4]) === 10003004) {
                    _allPowC04 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[90].result.toUpperCase() && Number(data0[i].result[4]) === 10003005) {
                    _allPowC05 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[93].result.toUpperCase() && Number(data0[i].result[4]) === 10003006) {
                    _allPowC06 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[96].result.toUpperCase() && Number(data0[i].result[4]) === 10003007) {
                    _allPowC07 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[99].result.toUpperCase() && Number(data0[i].result[4]) === 10003008) {
                    _allPowC08 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[102].result.toUpperCase() && Number(data0[i].result[4]) === 10003009) {
                    _allPowC09 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[105].result.toUpperCase() && Number(data0[i].result[4]) === 10003010) {
                    _allPowC10 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[108].result.toUpperCase() && Number(data0[i].result[4]) === 10003011) {
                    _allPowC11 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[111].result.toUpperCase() && Number(data0[i].result[4]) === 10003012) {
                    _allPowC12 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[114].result.toUpperCase() && Number(data0[i].result[4]) === 10003013) {
                    _allPowC13 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[117].result.toUpperCase() && Number(data0[i].result[4]) === 10003014) {
                    _allPowC14 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[120].result.toUpperCase() && Number(data0[i].result[4]) === 10003015) {
                    _allPowC15 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[123].result.toUpperCase() && Number(data0[i].result[4]) === 10003016) {
                    _allPowC16 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[126].result.toUpperCase() && Number(data0[i].result[4]) === 10003017) {
                    _allPowC17 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[129].result.toUpperCase() && Number(data0[i].result[4]) === 10003018) {
                    _allPowC18 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[132].result.toUpperCase() && Number(data0[i].result[4]) === 10003019) {
                    _allPowC19 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[135].result.toUpperCase() && Number(data0[i].result[4]) === 10003020) {
                    _allPowC20 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[138].result.toUpperCase() && Number(data0[i].result[4]) === 10003021) {
                    _allPowC21 += Number(String(stakeRemoveDup[i]).slice(-5))
                } else if (data0[i].result[0].toUpperCase() === data2[141].result.toUpperCase() && Number(data0[i].result[4]) === 10003022) {
                    _allPowC22 += Number(String(stakeRemoveDup[i]).slice(-5))
                }
            }

            return [
                bbqBal,
                labLogBBQ, _canCraftBBQ,
                data2[1].result, data2[2].result, _allPowZ10, 
                data2[4].result, data2[5].result, _allPowZ02, data2[7].result, data2[8].result, _allPowA01, data2[10].result, data2[11].result, _allPowA02, data2[13].result, data2[14].result, _allPowA03, data2[16].result, data2[17].result, _allPowA04, data2[19].result, data2[20].result, _allPowA05, data2[22].result, data2[23].result, _allPowA06, data2[25].result, data2[26].result, _allPowA07, data2[28].result, data2[29].result, _allPowA08, data2[31].result, data2[32].result, _allPowA09, data2[34].result, data2[35].result, _allPowA10, data2[37].result, data2[38].result, _allPowA11, 
                data2[40].result, data2[41].result, _allPowZ06, data2[43].result, data2[44].result, _allPowB01, data2[46].result, data2[47].result, _allPowB02, data2[49].result, data2[50].result, _allPowB03, data2[52].result, data2[53].result, _allPowB04, data2[55].result, data2[56].result, _allPowB05, data2[58].result, data2[59].result, _allPowB06, data2[61].result, data2[62].result, _allPowB07, data2[64].result, data2[65].result, _allPowB08, data2[67].result, data2[68].result, _allPowB09, data2[70].result, data2[71].result, _allPowB10, data2[73].result, data2[74].result, _allPowB11,
                data2[76].result, data2[77].result, _allPowZ11, data2[79].result, data2[80].result, _allPowC01, data2[82].result, data2[83].result, _allPowC02, data2[85].result, data2[86].result, _allPowC03, data2[88].result, data2[89].result, _allPowC04, data2[91].result, data2[92].result, _allPowC05, data2[94].result, data2[95].result, _allPowC06, data2[97].result, data2[98].result, _allPowC07, data2[100].result, data2[101].result, _allPowC08, data2[103].result, data2[104].result, _allPowC09, data2[106].result, data2[107].result, _allPowC10, data2[109].result, data2[110].result, _allPowC11,
                data2[112].result, data2[113].result, _allPowC12, data2[115].result, data2[116].result, _allPowC13, data2[118].result, data2[119].result, _allPowC14, data2[121].result, data2[122].result, _allPowC15, data2[124].result, data2[125].result, _allPowC16, data2[127].result, data2[128].result, _allPowC17, data2[130].result, data2[131].result, _allPowC18, data2[133].result, data2[134].result, _allPowC19, data2[136].result, data2[137].result, _allPowC20, data2[139].result, data2[140].result, _allPowC21, data2[142].result, data2[143].result, _allPowC22,
                woodBal,
                gemBal, labLogInfpow, _canCraftINFPOW, infpowBal,
            ]
        }

        const promise = thefetch()

        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            setBbqBalance(ethers.utils.formatEther(result[0]))
            setLevelCraftBBQ(Number(result[1][0]))
            setIsCraftBBQ(Number(result[1][1]) > 0)
            const nextObtainBBQ = new Date((Number(result[1][2]) * 1000) + (60 * 1000))
            Date.now() - (Number(result[1][2]) * 1000) <= (60 * 1000) ?
                setTimeToClaimBBQ(nextObtainBBQ.toLocaleString('es-CL')) :
                setTimeToClaimBBQ(0)
            setCanCraftBBQ(result[2])

            setThubLvZ10(Number(result[3][0]))
            const _nextDayThubZ10 = new Date((Number(result[3][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubZ10 && Number(result[3][2]) !== 0) {
                setNextDayThubZ10(_nextDayThubZ10.toLocaleString('es-CL'))
                setThubCapZ10(Number(ethers.utils.formatEther(String(result[3][1]))))
            } else {
                setNextDayThubZ10('now')
                setThubCapZ10(Number(ethers.utils.formatEther(String(result[4]))))
            }
            setThubFeeZ10(Number(result[3][3]) / 100)
            setAllPowZ10(Number(result[5]))

            setThubLvZ02(Number(result[6][0]))
            const _nextDayThubZ02 = new Date((Number(result[6][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubZ02 && Number(result[6][2]) !== 0) {
                setNextDayThubZ02(_nextDayThubZ02.toLocaleString('es-CL'))
                setThubCapZ02(Number(ethers.utils.formatEther(String(result[6][1]))))
            } else {
                setNextDayThubZ02('now')
                setThubCapZ02(Number(ethers.utils.formatEther(String(result[7]))))
            }
            setThubFeeZ02(Number(result[6][3]) / 100)
            setAllPowZ02(Number(result[8]))

            setThubLvA01(Number(result[9][0]))
            const _nextDayThubA01 = new Date((Number(result[9][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA01 && Number(result[9][2]) !== 0) {
                setNextDayThubA01(_nextDayThubA01.toLocaleString('es-CL'))
                setThubCapA01(Number(ethers.utils.formatEther(String(result[9][1]))))
            } else {
                setNextDayThubA01('now')
                setThubCapA01(Number(ethers.utils.formatEther(String(result[10]))))
            }
            setThubFeeA01(Number(result[9][3]) / 100)
            setAllPowA01(Number(result[11]))

            setThubLvA02(Number(result[12][0]))
            const _nextDayThubA02 = new Date((Number(result[12][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA02 && Number(result[12][2]) !== 0) {
                setNextDayThubA02(_nextDayThubA02.toLocaleString('es-CL'))
                setThubCapA02(Number(ethers.utils.formatEther(String(result[12][1]))))
            } else {
                setNextDayThubA02('now')
                setThubCapA02(Number(ethers.utils.formatEther(String(result[13]))))
            }
            setThubFeeA02(Number(result[12][3]) / 100)
            setAllPowA02(Number(result[14]))

            setThubLvA03(Number(result[15][0]))
            const _nextDayThubA03 = new Date((Number(result[15][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA03 && Number(result[15][2]) !== 0) {
                setNextDayThubA03(_nextDayThubA03.toLocaleString('es-CL'))
                setThubCapA03(Number(ethers.utils.formatEther(String(result[15][1]))))
            } else {
                setNextDayThubA03('now')
                setThubCapA03(Number(ethers.utils.formatEther(String(result[16]))))
            }
            setThubFeeA03(Number(result[15][3]) / 100)
            setAllPowA03(Number(result[17]))

            setThubLvA04(Number(result[18][0]))
            const _nextDayThubA04 = new Date((Number(result[18][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA04 && Number(result[18][2]) !== 0) {
                setNextDayThubA04(_nextDayThubA04.toLocaleString('es-CL'))
                setThubCapA04(Number(ethers.utils.formatEther(String(result[18][1]))))
            } else {
                setNextDayThubA04('now')
                setThubCapA04(Number(ethers.utils.formatEther(String(result[19]))))
            }
            setThubFeeA04(Number(result[18][3]) / 100)
            setAllPowA04(Number(result[20]))

            setThubLvA05(Number(result[21][0]))
            const _nextDayThubA05 = new Date((Number(result[21][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA05 && Number(result[21][2]) !== 0) {
                setNextDayThubA05(_nextDayThubA05.toLocaleString('es-CL'))
                setThubCapA05(Number(ethers.utils.formatEther(String(result[21][1]))))
            } else {
                setNextDayThubA05('now')
                setThubCapA05(Number(ethers.utils.formatEther(String(result[22]))))
            }
            setThubFeeA05(Number(result[21][3]) / 100)
            setAllPowA05(Number(result[23]))

            setThubLvA06(Number(result[24][0]))
            const _nextDayThubA06 = new Date((Number(result[24][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA06 && Number(result[24][2]) !== 0) {
                setNextDayThubA06(_nextDayThubA06.toLocaleString('es-CL'))
                setThubCapA06(Number(ethers.utils.formatEther(String(result[24][1]))))
            } else {
                setNextDayThubA06('now')
                setThubCapA06(Number(ethers.utils.formatEther(String(result[25]))))
            }
            setThubFeeA06(Number(result[24][3]) / 100)
            setAllPowA06(Number(result[26]))

            setThubLvA07(Number(result[27][0]))
            const _nextDayThubA07 = new Date((Number(result[27][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA07 && Number(result[27][2]) !== 0) {
                setNextDayThubA07(_nextDayThubA07.toLocaleString('es-CL'))
                setThubCapA07(Number(ethers.utils.formatEther(String(result[27][1]))))
            } else {
                setNextDayThubA07('now')
                setThubCapA07(Number(ethers.utils.formatEther(String(result[28]))))
            }
            setThubFeeA07(Number(result[27][3]) / 100)
            setAllPowA07(Number(result[29]))

            setThubLvA08(Number(result[30][0]))
            const _nextDayThubA08 = new Date((Number(result[30][2]) * 1000) + (86400 * 1000));
            if (Date.now() <= _nextDayThubA08 && Number(result[30][2]) !== 0) {
                setNextDayThubA08(_nextDayThubA08.toLocaleString('es-CL'))
                setThubCapA08(Number(ethers.utils.formatEther(String(result[30][1]))))
            } else {
                setNextDayThubA08('now')
                setThubCapA08(Number(ethers.utils.formatEther(String(result[31]))))
            }
            setThubFeeA08(Number(result[30][3]) / 100)
            setAllPowA08(Number(result[32]))

            setThubLvA09(Number(result[33][0]))
            const _nextDayThubA09 = new Date((Number(result[33][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA09 && Number(result[33][2]) !== 0) {
                setNextDayThubA09(_nextDayThubA09.toLocaleString('es-CL'))
                setThubCapA09(Number(ethers.utils.formatEther(String(result[33][1]))))
            } else {
                setNextDayThubA09('now')
                setThubCapA09(Number(ethers.utils.formatEther(String(result[34]))))
            }
            setThubFeeA09(Number(result[33][3]) / 100)
            setAllPowA09(Number(result[35]))

            setThubLvA10(Number(result[36][0]))
            const _nextDayThubA10 = new Date((Number(result[36][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA10 && Number(result[36][2]) !== 0) {
                setNextDayThubA10(_nextDayThubA10.toLocaleString('es-CL'))
                setThubCapA10(Number(ethers.utils.formatEther(String(result[36][1]))))
            } else {
                setNextDayThubA10('now')
                setThubCapA10(Number(ethers.utils.formatEther(String(result[37]))))
            }
            setThubFeeA10(Number(result[36][3]) / 100)
            setAllPowA10(Number(result[38]))

            setThubLvA11(Number(result[39][0]))
            const _nextDayThubA11 = new Date((Number(result[39][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubA11 && Number(result[39][2]) !== 0) {
                setNextDayThubA11(_nextDayThubA11.toLocaleString('es-CL'))
                setThubCapA11(Number(ethers.utils.formatEther(String(result[39][1]))))
            } else {
                setNextDayThubA11('now')
                setThubCapA11(Number(ethers.utils.formatEther(String(result[40]))))
            }
            setThubFeeA11(Number(result[39][3]) / 100)
            setAllPowA11(Number(result[41]))

            setThubLvZ06(Number(result[42][0]))
            const _nextDayThubZ06 = new Date((Number(result[42][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubZ06 && Number(result[42][2]) !== 0) {
                setNextDayThubZ06(_nextDayThubZ06.toLocaleString('es-CL'))
                setThubCapZ06(Number(ethers.utils.formatEther(String(result[42][1]))))
            } else {
                setNextDayThubZ06('now')
                setThubCapZ06(Number(ethers.utils.formatEther(String(result[43]))))
            }
            setThubFeeZ06(Number(result[42][3]) / 100)
            setAllPowZ06(Number(result[44]))

            setThubLvB01(Number(result[45][0]))
            const _nextDayThubB01 = new Date((Number(result[45][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB01 && Number(result[45][2]) !== 0) {
                setNextDayThubB01(_nextDayThubB01.toLocaleString('es-CL'))
                setThubCapB01(Number(ethers.utils.formatEther(String(result[45][1]))))
            } else {
                setNextDayThubB01('now')
                setThubCapB01(Number(ethers.utils.formatEther(String(result[46]))))
            }
            setThubFeeB01(Number(result[45][3]) / 100)
            setAllPowB01(Number(result[47]))

            setThubLvB02(Number(result[48][0]))
            const _nextDayThubB02 = new Date((Number(result[48][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB02 && Number(result[48][2]) !== 0) {
                setNextDayThubB02(_nextDayThubB02.toLocaleString('es-CL'))
                setThubCapB02(Number(ethers.utils.formatEther(String(result[48][1]))))
            } else {
                setNextDayThubB02('now')
                setThubCapB02(Number(ethers.utils.formatEther(String(result[49]))))
            }
            setThubFeeB02(Number(result[48][3]) / 100)
            setAllPowB02(Number(result[50]))

            setThubLvB03(Number(result[51][0]))
            const _nextDayThubB03 = new Date((Number(result[51][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB03 && Number(result[51][2]) !== 0) {
                setNextDayThubB03(_nextDayThubB03.toLocaleString('es-CL'))
                setThubCapB03(Number(ethers.utils.formatEther(String(result[51][1]))))
            } else {
                setNextDayThubB03('now')
                setThubCapB03(Number(ethers.utils.formatEther(String(result[52]))))
            }
            setThubFeeB03(Number(result[51][3]) / 100)
            setAllPowB03(Number(result[53]))

            setThubLvB04(Number(result[54][0]))
            const _nextDayThubB04 = new Date((Number(result[54][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB04 && Number(result[54][2]) !== 0) {
                setNextDayThubB04(_nextDayThubB04.toLocaleString('es-CL'))
                setThubCapB04(Number(ethers.utils.formatEther(String(result[54][1]))))
            } else {
                setNextDayThubB04('now')
                setThubCapB04(Number(ethers.utils.formatEther(String(result[55]))))
            }
            setThubFeeB04(Number(result[54][3]) / 100)
            setAllPowB04(Number(result[56]))

            setThubLvB05(Number(result[57][0]))
            const _nextDayThubB05 = new Date((Number(result[57][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB05 && Number(result[57][2]) !== 0) {
                setNextDayThubB05(_nextDayThubB05.toLocaleString('es-CL'))
                setThubCapB05(Number(ethers.utils.formatEther(String(result[57][1]))))
            } else {
                setNextDayThubB05('now')
                setThubCapB05(Number(ethers.utils.formatEther(String(result[58]))))
            }
            setThubFeeB05(Number(result[57][3]) / 100)
            setAllPowB05(Number(result[59]))

            setThubLvB06(Number(result[60][0]))
            const _nextDayThubB06 = new Date((Number(result[60][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB06 && Number(result[60][2]) !== 0) {
                setNextDayThubB06(_nextDayThubB06.toLocaleString('es-CL'))
                setThubCapB06(Number(ethers.utils.formatEther(String(result[60][1]))))
            } else {
                setNextDayThubB06('now')
                setThubCapB06(Number(ethers.utils.formatEther(String(result[61]))))
            }
            setThubFeeB06(Number(result[60][3]) / 100)
            setAllPowB06(Number(result[62]))

            setThubLvB07(Number(result[63][0]))
            const _nextDayThubB07 = new Date((Number(result[63][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB07 && Number(result[63][2]) !== 0) {
                setNextDayThubB07(_nextDayThubB07.toLocaleString('es-CL'))
                setThubCapB07(Number(ethers.utils.formatEther(String(result[63][1]))))
            } else {
                setNextDayThubB07('now')
                setThubCapB07(Number(ethers.utils.formatEther(String(result[64]))))
            }
            setThubFeeB07(Number(result[63][3]) / 100)
            setAllPowB07(Number(result[65]))

            setThubLvB08(Number(result[66][0]))
            const _nextDayThubB08 = new Date((Number(result[66][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB08 && Number(result[66][2]) !== 0) {
                setNextDayThubB08(_nextDayThubB08.toLocaleString('es-CL'))
                setThubCapB08(Number(ethers.utils.formatEther(String(result[66][1]))))
            } else {
                setNextDayThubB08('now')
                setThubCapB08(Number(ethers.utils.formatEther(String(result[67]))))
            }
            setThubFeeB08(Number(result[66][3]) / 100)
            setAllPowB08(Number(result[68]))

            setThubLvB09(Number(result[69][0]))
            const _nextDayThubB09 = new Date((Number(result[69][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB09 && Number(result[69][2]) !== 0) {
                setNextDayThubB09(_nextDayThubB09.toLocaleString('es-CL'))
                setThubCapB09(Number(ethers.utils.formatEther(String(result[69][1]))))
            } else {
                setNextDayThubB09('now')
                setThubCapB09(Number(ethers.utils.formatEther(String(result[70]))))
            }
            setThubFeeB09(Number(result[69][3]) / 100)
            setAllPowB09(Number(result[71]))

            setThubLvB10(Number(result[72][0]))
            const _nextDayThubB10 = new Date((Number(result[72][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB10 && Number(result[72][2]) !== 0) {
                setNextDayThubB10(_nextDayThubB10.toLocaleString('es-CL'))
                setThubCapB10(Number(ethers.utils.formatEther(String(result[72][1]))))
            } else {
                setNextDayThubB10('now')
                setThubCapB10(Number(ethers.utils.formatEther(String(result[73]))))
            }
            setThubFeeB10(Number(result[72][3]) / 100)
            setAllPowB10(Number(result[74]))

            setThubLvB11(Number(result[75][0]))
            const _nextDayThubB11 = new Date((Number(result[75][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubB11 && Number(result[75][2]) !== 0) {
                setNextDayThubB11(_nextDayThubB11.toLocaleString('es-CL'))
                setThubCapB11(Number(ethers.utils.formatEther(String(result[75][1]))))
            } else {
                setNextDayThubB11('now')
                setThubCapB11(Number(ethers.utils.formatEther(String(result[76]))))
            }
            setThubFeeB11(Number(result[75][3]) / 100)
            setAllPowB11(Number(result[77]))

            setThubLvZ11(Number(result[78][0]))
            const _nextDayThubZ11 = new Date((Number(result[78][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubZ11 && Number(result[78][2]) !== 0) {
                setNextDayThubZ11(_nextDayThubZ11.toLocaleString('es-CL'))
                setThubCapZ11(Number(ethers.utils.formatEther(String(result[78][1]))))
            } else {
                setNextDayThubZ11('now')
                setThubCapZ11(Number(ethers.utils.formatEther(String(result[79]))))
            }
            setThubFeeZ11(Number(result[78][3]) / 100)
            setAllPowZ11(Number(result[80]))

            setThubLvC01(Number(result[81][0]))
            const _nextDayThubC01 = new Date((Number(result[81][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC01 && Number(result[81][2]) !== 0) {
                setNextDayThubC01(_nextDayThubC01.toLocaleString('es-CL'))
                setThubCapC01(Number(ethers.utils.formatEther(String(result[81][1]))))
            } else {
                setNextDayThubC01('now')
                setThubCapC01(Number(ethers.utils.formatEther(String(result[82]))))
            }
            setThubFeeC01(Number(result[81][3]) / 100)
            setAllPowC01(Number(result[83]))

            setThubLvC02(Number(result[84][0]))
            const _nextDayThubC02 = new Date((Number(result[84][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC02 && Number(result[84][2]) !== 0) {
                setNextDayThubC02(_nextDayThubC02.toLocaleString('es-CL'))
                setThubCapC02(Number(ethers.utils.formatEther(String(result[84][1]))))
            } else {
                setNextDayThubC02('now')
                setThubCapC02(Number(ethers.utils.formatEther(String(result[85]))))
            }
            setThubFeeC02(Number(result[84][3]) / 100)
            setAllPowC02(Number(result[86]))

            setThubLvC03(Number(result[87][0]))
            const _nextDayThubC03 = new Date((Number(result[87][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC03 && Number(result[87][2]) !== 0) {
                setNextDayThubC03(_nextDayThubC03.toLocaleString('es-CL'))
                setThubCapC03(Number(ethers.utils.formatEther(String(result[87][1]))))
            } else {
                setNextDayThubC03('now')
                setThubCapC03(Number(ethers.utils.formatEther(String(result[88]))))
            }
            setThubFeeC03(Number(result[87][3]) / 100)
            setAllPowC03(Number(result[89]))

            setThubLvC04(Number(result[90][0]))
            const _nextDayThubC04 = new Date((Number(result[90][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC04 && Number(result[90][2]) !== 0) {
                setNextDayThubC04(_nextDayThubC04.toLocaleString('es-CL'))
                setThubCapC04(Number(ethers.utils.formatEther(String(result[90][1]))))
            } else {
                setNextDayThubC04('now')
                setThubCapC04(Number(ethers.utils.formatEther(String(result[91]))))
            }
            setThubFeeC04(Number(result[90][3]) / 100)
            setAllPowC04(Number(result[92]))

            setThubLvC05(Number(result[93][0]))
            const _nextDayThubC05 = new Date((Number(result[93][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC05 && Number(result[93][2]) !== 0) {
                setNextDayThubC05(_nextDayThubC05.toLocaleString('es-CL'))
                setThubCapC05(Number(ethers.utils.formatEther(String(result[93][1]))))
            } else {
                setNextDayThubC05('now')
                setThubCapC05(Number(ethers.utils.formatEther(String(result[94]))))
            }
            setThubFeeC05(Number(result[93][3]) / 100)
            setAllPowC05(Number(result[95]))

            setThubLvC06(Number(result[96][0]))
            const _nextDayThubC06 = new Date((Number(result[96][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC06 && Number(result[96][2]) !== 0) {
                setNextDayThubC06(_nextDayThubC06.toLocaleString('es-CL'))
                setThubCapC06(Number(ethers.utils.formatEther(String(result[96][1]))))
            } else {
                setNextDayThubC06('now')
                setThubCapC06(Number(ethers.utils.formatEther(String(result[97]))))
            }
            setThubFeeC06(Number(result[96][3]) / 100)
            setAllPowC06(Number(result[98]))

            setThubLvC07(Number(result[99][0]))
            const _nextDayThubC07 = new Date((Number(result[99][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC07 && Number(result[99][2]) !== 0) {
                setNextDayThubC07(_nextDayThubC07.toLocaleString('es-CL'))
                setThubCapC07(Number(ethers.utils.formatEther(String(result[99][1]))))
            } else {
                setNextDayThubC07('now')
                setThubCapC07(Number(ethers.utils.formatEther(String(result[100]))))
            }
            setThubFeeC07(Number(result[99][3]) / 100)
            setAllPowC07(Number(result[101]))

            setThubLvC08(Number(result[102][0]))
            const _nextDayThubC08 = new Date((Number(result[102][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC08 && Number(result[102][2]) !== 0) {
                setNextDayThubC08(_nextDayThubC08.toLocaleString('es-CL'))
                setThubCapC08(Number(ethers.utils.formatEther(String(result[102][1]))))
            } else {
                setNextDayThubC08('now')
                setThubCapC08(Number(ethers.utils.formatEther(String(result[103]))))
            }
            setThubFeeC08(Number(result[102][3]) / 100)
            setAllPowC08(Number(result[104]))

            setThubLvC09(Number(result[105][0]))
            const _nextDayThubC09 = new Date((Number(result[105][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC09 && Number(result[105][2]) !== 0) {
                setNextDayThubC09(_nextDayThubC09.toLocaleString('es-CL'))
                setThubCapC09(Number(ethers.utils.formatEther(String(result[105][1]))))
            } else {
                setNextDayThubC09('now')
                setThubCapC09(Number(ethers.utils.formatEther(String(result[106]))))
            }
            setThubFeeC09(Number(result[105][3]) / 100)
            setAllPowC09(Number(result[107]))

            setThubLvC10(Number(result[108][0]))
            const _nextDayThubC10 = new Date((Number(result[108][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC10 && Number(result[108][2]) !== 0) {
                setNextDayThubC10(_nextDayThubC10.toLocaleString('es-CL'))
                setThubCapC10(Number(ethers.utils.formatEther(String(result[108][1]))))
            } else {
                setNextDayThubC10('now')
                setThubCapC10(Number(ethers.utils.formatEther(String(result[109]))))
            }
            setThubFeeC10(Number(result[108][3]) / 100)
            setAllPowC10(Number(result[110]))

            setThubLvC11(Number(result[111][0]))
            const _nextDayThubC11 = new Date((Number(result[111][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC11 && Number(result[111][2]) !== 0) {
                setNextDayThubC11(_nextDayThubC11.toLocaleString('es-CL'))
                setThubCapC11(Number(ethers.utils.formatEther(String(result[111][1]))))
            } else {
                setNextDayThubC11('now')
                setThubCapC11(Number(ethers.utils.formatEther(String(result[112]))))
            }
            setThubFeeC11(Number(result[111][3]) / 100)
            setAllPowC11(Number(result[113]))

            setThubLvC12(Number(result[114][0]))
            const _nextDayThubC12 = new Date((Number(result[114][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC12 && Number(result[114][2]) !== 0) {
                setNextDayThubC12(_nextDayThubC12.toLocaleString('es-CL'))
                setThubCapC12(Number(ethers.utils.formatEther(String(result[114][1]))))
            } else {
                setNextDayThubC12('now')
                setThubCapC12(Number(ethers.utils.formatEther(String(result[115]))))
            }
            setThubFeeC12(Number(result[114][3]) / 100)
            setAllPowC12(Number(result[116]))

            setThubLvC13(Number(result[117][0]))
            const _nextDayThubC13 = new Date((Number(result[117][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC13 && Number(result[117][2]) !== 0) {
                setNextDayThubC13(_nextDayThubC13.toLocaleString('es-CL'))
                setThubCapC13(Number(ethers.utils.formatEther(String(result[117][1]))))
            } else {
                setNextDayThubC13('now')
                setThubCapC13(Number(ethers.utils.formatEther(String(result[118]))))
            }
            setThubFeeC13(Number(result[117][3]) / 100)
            setAllPowC13(Number(result[119]))

            setThubLvC14(Number(result[120][0]))
            const _nextDayThubC14 = new Date((Number(result[120][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC14 && Number(result[120][2]) !== 0) {
                setNextDayThubC14(_nextDayThubC14.toLocaleString('es-CL'))
                setThubCapC14(Number(ethers.utils.formatEther(String(result[120][1]))))
            } else {
                setNextDayThubC14('now')
                setThubCapC14(Number(ethers.utils.formatEther(String(result[121]))))
            }
            setThubFeeC14(Number(result[120][3]) / 100)
            setAllPowC14(Number(result[122]))

            setThubLvC15(Number(result[123][0]))
            const _nextDayThubC15 = new Date((Number(result[123][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC15 && Number(result[123][2]) !== 0) {
                setNextDayThubC15(_nextDayThubC15.toLocaleString('es-CL'))
                setThubCapC15(Number(ethers.utils.formatEther(String(result[123][1]))))
            } else {
                setNextDayThubC15('now')
                setThubCapC15(Number(ethers.utils.formatEther(String(result[124]))))
            }
            setThubFeeC15(Number(result[123][3]) / 100)
            setAllPowC15(Number(result[125]))

            setThubLvC16(Number(result[126][0]))
            const _nextDayThubC16 = new Date((Number(result[126][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC16 && Number(result[126][2]) !== 0) {
                setNextDayThubC16(_nextDayThubC16.toLocaleString('es-CL'))
                setThubCapC16(Number(ethers.utils.formatEther(String(result[126][1]))))
            } else {
                setNextDayThubC16('now')
                setThubCapC16(Number(ethers.utils.formatEther(String(result[127]))))
            }
            setThubFeeC16(Number(result[126][3]) / 100)
            setAllPowC16(Number(result[128]))

            setThubLvC17(Number(result[129][0]))
            const _nextDayThubC17 = new Date((Number(result[129][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC17 && Number(result[129][2]) !== 0) {
                setNextDayThubC17(_nextDayThubC17.toLocaleString('es-CL'))
                setThubCapC17(Number(ethers.utils.formatEther(String(result[129][1]))))
            } else {
                setNextDayThubC17('now')
                setThubCapC17(Number(ethers.utils.formatEther(String(result[130]))))
            }
            setThubFeeC17(Number(result[129][3]) / 100)
            setAllPowC17(Number(result[131]))

            setThubLvC18(Number(result[132][0]))
            const _nextDayThubC18 = new Date((Number(result[132][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC18 && Number(result[132][2]) !== 0) {
                setNextDayThubC18(_nextDayThubC18.toLocaleString('es-CL'))
                setThubCapC18(Number(ethers.utils.formatEther(String(result[132][1]))))
            } else {
                setNextDayThubC18('now')
                setThubCapC18(Number(ethers.utils.formatEther(String(result[133]))))
            }
            setThubFeeC18(Number(result[132][3]) / 100)
            setAllPowC18(Number(result[134]))

            setThubLvC19(Number(result[135][0]))
            const _nextDayThubC19 = new Date((Number(result[135][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC19 && Number(result[135][2]) !== 0) {
                setNextDayThubC19(_nextDayThubC19.toLocaleString('es-CL'))
                setThubCapC19(Number(ethers.utils.formatEther(String(result[135][1]))))
            } else {
                setNextDayThubC19('now')
                setThubCapC19(Number(ethers.utils.formatEther(String(result[136]))))
            }
            setThubFeeC19(Number(result[135][3]) / 100)
            setAllPowC19(Number(result[137]))

            setThubLvC20(Number(result[138][0]))
            const _nextDayThubC20 = new Date((Number(result[138][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC20 && Number(result[138][2]) !== 0) {
                setNextDayThubC20(_nextDayThubC20.toLocaleString('es-CL'))
                setThubCapC20(Number(ethers.utils.formatEther(String(result[138][1]))))
            } else {
                setNextDayThubC20('now')
                setThubCapC20(Number(ethers.utils.formatEther(String(result[139]))))
            }
            setThubFeeC20(Number(result[138][3]) / 100)
            setAllPowC20(Number(result[140]))

            setThubLvC21(Number(result[141][0]))
            const _nextDayThubC21 = new Date((Number(result[141][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC21 && Number(result[141][2]) !== 0) {
                setNextDayThubC21(_nextDayThubC21.toLocaleString('es-CL'))
                setThubCapC21(Number(ethers.utils.formatEther(String(result[141][1]))))
            } else {
                setNextDayThubC21('now')
                setThubCapC21(Number(ethers.utils.formatEther(String(result[142]))))
            }
            setThubFeeC21(Number(result[141][3]) / 100)
            setAllPowC21(Number(result[143]))

            setThubLvC22(Number(result[144][0]))
            const _nextDayThubC22 = new Date((Number(result[144][2]) * 1000) + (86400 * 1000))
            if (Date.now() <= _nextDayThubC22 && Number(result[144][2]) !== 0) {
                setNextDayThubC22(_nextDayThubC22.toLocaleString('es-CL'))
                setThubCapC22(Number(ethers.utils.formatEther(String(result[144][1]))))
            } else {
                setNextDayThubC22('now')
                setThubCapC22(Number(ethers.utils.formatEther(String(result[145]))))
            }
            setThubFeeC22(Number(result[144][3]) / 100)
            setAllPowC22(Number(result[146]))

            setWoodBalance(ethers.utils.formatEther(result[147]))

            setGemBalance(ethers.utils.formatEther(result[148]))
            setIsCraftINFPOW(Number(result[149][0]) > 0)
            const nextObtainInfpow = new Date((Number(result[149][1]) * 1000) + (10 * 60 * 1000))
            Date.now() - (Number(result[149][1]) * 1000) <= (10 * 60 * 1000) ?
                setTimeToClaimINFPOW(nextObtainInfpow.toLocaleString('es-CL')) :
                setTimeToClaimINFPOW(0)
            setCanCraftINFPOW(result[150])
            setInfpowBalance(ethers.utils.formatEther(result[151]))
        })
    }, [config, address, chain, txupdate, erc20Abi, erc721Abi, bbqLab01ABI, slot1ABI, houseStakingABI, transportHubABI, pzaLabABI])

    const craftBBQHandle = async (_machine) => {
        setisLoading(true)
        try {
            const woodAllow = await readContract(config, {
                address: woodToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, bbqLab],
            })
            if (Number((ethers.utils.formatEther(woodAllow))) < 1000) {
                let { request } = await simulateContract(config, {
                    address: woodToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [bbqLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: bbqLab,
                abi: bbqLab01ABI,
                functionName: 'craft',
                args: [_machine],
                value: ethers.utils.parseEther('0.01'),
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
    const obtainBBQHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: woodToken,
                abi: erc20Abi,
                functionName: 'approve',
                args: [bbqLab, ethers.constants.MaxUint256],
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            let { request: request2 } = await simulateContract(config, {
                address: bbqLab,
                abi: bbqLab01ABI,
                functionName: 'obtain',
            })
            let h2 = await writeContract(config, request2)
            await waitForTransactionReceipt(config, { hash: h2 })
            setTxupdate(h2)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const transportHandle = async () => {
        setisLoading(true)
        try {
            const bbqAllow = await readContract(config, {
                chainId: 190,
                address: bbqToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, sourcethub],
            })
            if (Number((ethers.utils.formatEther(bbqAllow))) < Number(transportValue)) {
                let { request } = await simulateContract(config, {
                    chainId: 190,
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [sourcethub, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let _target = null
            if (houseSelected === 'Z02') {
                _target = 10026002
            } else if (houseSelected === 'A01') {
                _target = 10001001
            } else if (houseSelected === 'A02') {
                _target = 10001002
            } else if (houseSelected === 'A03') {
                _target = 10001003
            } else if (houseSelected === 'A04') {
                _target = 10001004
            } else if (houseSelected === 'A05') {
                _target = 10001005
            } else if (houseSelected === 'A06') {
                _target = 10001006
            } else if (houseSelected === 'A07') {
                _target = 10001007
            } else if (houseSelected === 'A08') {
                _target = 10001008
            } else if (houseSelected === 'A09') {
                _target = 10001009
            } else if (houseSelected === 'A10') {
                _target = 10001010
            } else if (houseSelected === 'A11') {
                _target = 10001011
            } else if (houseSelected === 'Z06') {
                _target = 10026006
            } else if (houseSelected === 'Z10') {
                _target = 10026010
            } else if (houseSelected === 'B01') {
                _target = 10002001
            } else if (houseSelected === 'B02') {
                _target = 10002002
            } else if (houseSelected === 'B03') {
                _target = 10002003
            } else if (houseSelected === 'B04') {
                _target = 10002004
            } else if (houseSelected === 'B05') {
                _target = 10002005
            } else if (houseSelected === 'B06') {
                _target = 10002006
            } else if (houseSelected === 'B07') {
                _target = 10002007
            } else if (houseSelected === 'B08') {
                _target = 10002008
            } else if (houseSelected === 'B09') {
                _target = 10002009
            } else if (houseSelected === 'B10') {
                _target = 10002010
            } else if (houseSelected === 'B11') {
                _target = 10002011
            } else if (houseSelected === 'Z11') {
                _target = 10026011
            } else if (houseSelected === 'C01') {
                _target = 10003001
            } else if (houseSelected === 'C02') {
                _target = 10003002
            } else if (houseSelected === 'C03') {
                _target = 10003003
            } else if (houseSelected === 'C04') {
                _target = 10003004
            } else if (houseSelected === 'C05') {
                _target = 10003005
            } else if (houseSelected === 'C06') {
                _target = 10003006
            } else if (houseSelected === 'C07') {
                _target = 10003007
            } else if (houseSelected === 'C08') {
                _target = 10003008
            } else if (houseSelected === 'C09') {
                _target = 10003009
            } else if (houseSelected === 'C10') {
                _target = 10003010
            } else if (houseSelected === 'C11') {
                _target = 10003011
            } else if (houseSelected === 'C12') {
                _target = 10003012
            } else if (houseSelected === 'C13') {
                _target = 10003013
            } else if (houseSelected === 'C14') {
                _target = 10003014
            } else if (houseSelected === 'C15') {
                _target = 10003015
            } else if (houseSelected === 'C16') {
                _target = 10003016
            } else if (houseSelected === 'C17') {
                _target = 10003017
            } else if (houseSelected === 'C18') {
                _target = 10003018
            } else if (houseSelected === 'C19') {
                _target = 10003019
            } else if (houseSelected === 'C20') {
                _target = 10003020
            } else if (houseSelected === 'C21') {
                _target = 10003021
            } else if (houseSelected === 'C22') {
                _target = 10003022
            }
            let { request: request2 } = await simulateContract(config, {
                chainId: 190,
                address: sourcethub,
                abi: sourceThubABI,
                functionName: 'sendBBQ',
                args: [_target, ethers.utils.parseEther(String(transportValue))],
                value: ethers.utils.parseEther('80'),
            })
            let h2 = await writeContract(config, request2)
            await waitForTransactionReceipt(config, { hash: h2 })
            setTxupdate(h2)
            await switchChain(config, { chainId: 8899 })
            let h3 = await sendTransaction(config, {
                chainId: 8899,
                to: '0x336C4EaE525948C8EF79b74b549C048f07639315',
                value: ethers.utils.parseEther('10'),
            })
            await waitForTransactionReceipt(config, { hash: h3 })
            await switchChain(config, { chainId: 190 })
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }
    const transportHandle2 = async (_index) => {
        setisLoading(true)
        let resaddr = null
        let transportVal = null
        if (_index === 3) {
            resaddr = infpowLab
            transportVal = transportValue2
        }
        try {
            const tokenAllow = await readContract(config, {
                chainId: 190,
                address: resaddr,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, sourcethub2],
            })
            if (Number((ethers.utils.formatEther(tokenAllow))) < Number(transportVal)) {
                let { request } = await simulateContract(config, {
                    chainId: 190,
                    address: resaddr,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [sourcethub2, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let _target = null
            if (houseSelected2 === 'Z02') {
                _target = 10026002
            } else if (houseSelected2 === 'A01') {
                _target = 10001001
            } else if (houseSelected2 === 'A02') {
                _target = 10001002
            } else if (houseSelected2 === 'A03') {
                _target = 10001003
            } else if (houseSelected2 === 'A04') {
                _target = 10001004
            } else if (houseSelected2 === 'A05') {
                _target = 10001005
            } else if (houseSelected2 === 'A06') {
                _target = 10001006
            } else if (houseSelected2 === 'A07') {
                _target = 10001007
            } else if (houseSelected2 === 'A08') {
                _target = 10001008
            } else if (houseSelected2 === 'A09') {
                _target = 10001009
            } else if (houseSelected2 === 'A10') {
                _target = 10001010
            } else if (houseSelected2 === 'A11') {
                _target = 10001011
            } else if (houseSelected2 === 'Z06') {
                _target = 10026006
            } else if (houseSelected2 === 'Z10') {
                _target = 10026010
            } else if (houseSelected2 === 'B01') {
                _target = 10002001
            } else if (houseSelected2 === 'B02') {
                _target = 10002002
            } else if (houseSelected2 === 'B03') {
                _target = 10002003
            } else if (houseSelected2 === 'B04') {
                _target = 10002004
            } else if (houseSelected2 === 'B05') {
                _target = 10002005
            } else if (houseSelected2 === 'B06') {
                _target = 10002006
            } else if (houseSelected2 === 'B07') {
                _target = 10002007
            } else if (houseSelected2 === 'B08') {
                _target = 10002008
            } else if (houseSelected2 === 'B09') {
                _target = 10002009
            } else if (houseSelected2 === 'B10') {
                _target = 10002010
            } else if (houseSelected2 === 'B11') {
                _target = 10002011
            } else if (houseSelected2 === 'Z11') {
                _target = 10026011
            } else if (houseSelected2 === 'C01') {
                _target = 10003001
            } else if (houseSelected2 === 'C02') {
                _target = 10003002
            } else if (houseSelected2 === 'C03') {
                _target = 10003003
            } else if (houseSelected2 === 'C04') {
                _target = 10003004
            } else if (houseSelected2 === 'C05') {
                _target = 10003005
            } else if (houseSelected2 === 'C06') {
                _target = 10003006
            } else if (houseSelected2 === 'C07') {
                _target = 10003007
            } else if (houseSelected2 === 'C08') {
                _target = 10003008
            } else if (houseSelected2 === 'C09') {
                _target = 10003009
            } else if (houseSelected2 === 'C10') {
                _target = 10003010
            } else if (houseSelected2 === 'C11') {
                _target = 10003011
            } else if (houseSelected2 === 'C12') {
                _target = 10003012
            } else if (houseSelected2 === 'C13') {
                _target = 10003013
            } else if (houseSelected2 === 'C14') {
                _target = 10003014
            } else if (houseSelected2 === 'C15') {
                _target = 10003015
            } else if (houseSelected2 === 'C16') {
                _target = 10003016
            } else if (houseSelected2 === 'C17') {
                _target = 10003017
            } else if (houseSelected2 === 'C18') {
                _target = 10003018
            } else if (houseSelected2 === 'C19') {
                _target = 10003019
            } else if (houseSelected2 === 'C20') {
                _target = 10003020
            } else if (houseSelected2 === 'C21') {
                _target = 10003021
            } else if (houseSelected2 === 'C22') {
                _target = 10003022
            }
            let { request: request2 } = await simulateContract(config, {
                chainId: 190,
                address: sourcethub2,
                abi: transportHub2ABI,
                functionName: 'sendResource',
                args: [_index, _target, ethers.utils.parseEther(String(transportVal))],
                value: ethers.utils.parseEther('80'),
            })
            let h2 = await writeContract(config, request2)
            await waitForTransactionReceipt(config, { hash: h2 })
            setTxupdate(h2)
            await switchChain(config, { chainId: 8899 })
            let h3 = await sendTransaction(config, {
                chainId: 8899,
                to: '0x336C4EaE525948C8EF79b74b549C048f07639315',
                value: ethers.utils.parseEther('10'),
            })
            await waitForTransactionReceipt(config, { hash: h3 })
            await switchChain(config, { chainId: 190 })
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const craftINFPOWHandle = async () => {
        setisLoading(true)
        try {
            const gemAllow = await readContract(config, {
                address: gemToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, infpowLab],
            })
            if (Number((ethers.utils.formatEther(gemAllow))) < 500) {
                let { request } = await simulateContract(config, {
                    address: gemToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [infpowLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: infpowLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [1],
                value: ethers.utils.parseEther('1'),
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

    const obtainINFPOWHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: gemToken,
                abi: erc20Abi,
                functionName: 'approve',
                args: [infpowLab, ethers.constants.MaxUint256],
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            let { request: request2 } = await simulateContract(config, {
                address: infpowLab,
                abi: pzaLabABI,
                functionName: 'obtain',
            })
            let h2 = await writeContract(config, request2)
            await waitForTransactionReceipt(config, { hash: h2 })
            setTxupdate(h2)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    return (
        <>
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner pixel" style={{flexDirection: "column"}}>
                    <div style={{fontSize: "75px", width: "fit-content"}}>Labs</div>
                    <div style={{fontSize: "17px", width: "fit-content", marginTop: "30px", letterSpacing: "1px"}}>Craft, Await and Obtain!</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="../background/labslogo.png" width="150" alt="Labs_Logo" />
                </div>
            </div>

            {address !== null && chain !== undefined && chain.id !== 190 ?
                <div style={{zIndex: "999"}} className="centermodal">
                    <div className="wrapper">
                        <div className="pixel" style={{border: "1px solid rgb(70, 55, 169)", boxShadow: "6px 6px 0 #00000040", width: "500px", height: "fit-content", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", fontSize: "40px", letterSpacing: "3px"}}>
                        <div style={{width: "90%", textAlign: "left", fontSize: "36px"}} className="emp">MISMATCH CHAIN!</div>
                        <div style={{marginTop: "20px", width: "90%", textAlign: "left", fontSize: "14px"}}>Please switch your network to BBQ Chain.</div>
                        <div className="button" style={{marginTop: "40px", width: "50%"}} onClick={() => open({ view: 'Networks' })}>SWITCH NETWORK</div>
                        <div className="button" style={{marginTop: "10px", width: "50%", background: "gray"}} onClick={() => {callMode(0); navigate('/');}}>BACK TO HOME</div>
                        </div>
                    </div>
                </div> :
                <div className="collection">
                    <div style={{textAlign: "left", height: "fit-content", width: "90%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}} className="pixel">
                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">CommuDAO Resources</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.commudao.xyz/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4"
                                    width="20"
                                    alt="$WOOD"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: woodToken,
                                                    symbol: 'WOOD',
                                                    decimals: 18,
                                                    image: 'https://gateway.commudao.xyz/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(woodBalance).toLocaleString('en-US', {maximumFractionDigits:1})}</div>
                            </div>

                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.commudao.xyz/ipfs/QmYLecZgsc6hgV931h3VDhvvXKeMjturKRKyGyTNDxX9JV"
                                    width="20"
                                    alt="$GEMSTONE"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: gemToken,
                                                    symbol: 'HRM-GEM',
                                                    decimals: 18,
                                                    image: 'https://gateway.commudao.xyz/ipfs/QmYLecZgsc6hgV931h3VDhvvXKeMjturKRKyGyTNDxX9JV',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(gemBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">CommuDAO Craft Products</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq"
                                    width="20"
                                    alt="$BBQ"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: bbqToken,
                                                    symbol: 'BBQ',
                                                    decimals: 18,
                                                    image: 'https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(bbqBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>

                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.commudao.xyz/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6"
                                    width="20"
                                    alt="$INF.POW"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: infpowLab,
                                                    symbol: 'INF-POW-BBQ',
                                                    decimals: 18,
                                                    image: 'https://gateway.commudao.xyz/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(infpowBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                        </div>

                        <div style={{marginTop: "40px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">CommuDAO Labs & Factories</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                {levelCraftBBQ >= 0 ? <div style={{position: "absolute", top: 15, right: 15, padding: "10px 20px", letterSpacing: 1, background: "transparent", border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="bold">LEVEL {levelCraftBBQ}</div> : <></>}
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    {levelCraftBBQ < 4 && <img src="../elements/BBQ_factory01_lv0.png" width="170" alt="$BBQ_Factory_lv0"/>}
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="https://gateway.commudao.xyz/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4" height="18" alt="$WOOD"/>
                                        <div style={{margin: "0 5px"}}>1,000</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="https://gateway.commudao.xyz/ipfs/bafkreidm3tpt3xpcmypzeaqicyxvihmygzu5mw3v74o6b2wve6ar5pdbs4" height="18" alt="$CMD"/>
                                        <div style={{margin: "0 5px"}}>0.01</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                        <div style={{margin: "0 5px"}}>
                                            {isCraftBBQ !== null ?
                                                <>
                                                    50
                                                </> :
                                                "..."
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>1 minutes</div>
                                </div>
                                {isCraftBBQ ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimBBQ === 0 ? "now" : timetoClaimBBQ}</div>
                                        </div>
                                        {timetoClaimBBQ === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainBBQHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-gavel"></i></div>
                                                    <div style={{display: "flex", flexDirection: "row"}}>
                                                        <img src="https://gateway.commudao.xyz/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4" height="18" alt="$WOOD"/>
                                                        <div style={{margin: "0 5px"}}>
                                                            {isCraftBBQ !== null ?
                                                                <>
                                                                    {levelCraftBBQ === 0 && "Upgradable soon!"}
                                                                </> :
                                                                "Loading..."
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                {isCraftBBQ !== null ?
                                                    <div style={{width: "100%", marginTop: "40px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                        {canCraftBBQ ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", borderRadius: "12px", padding: "15px"}} className="pixel button" onClick={() => craftBBQHandle(levelCraftBBQ + 1)}>Craft Barbeque</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", borderRadius: "12px", padding: "15px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                        {false ?
                                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "100px", borderRadius: "12px", padding: "15px"}} className="pixel button">UPGRADE</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "100px", borderRadius: "12px", padding: "15px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">UPGRADE</div>
                                                        }
                                                    </div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "20px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Barbeque</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px 10px 80px 10px"}}>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    <img src="https://gateway.commudao.xyz/ipfs/QmfE4Ruu1ckrrnMJBS1E6x9jejuiXhV3533AboaRtXU9cj" width="200" alt="INF.POW_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="https://gateway.commudao.xyz/ipfs/QmYLecZgsc6hgV931h3VDhvvXKeMjturKRKyGyTNDxX9JV" height="18" alt="$GEMSTONE"/>
                                        <div style={{margin: "0 5px"}}>500</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="https://gateway.commudao.xyz/ipfs/bafkreidm3tpt3xpcmypzeaqicyxvihmygzu5mw3v74o6b2wve6ar5pdbs4" height="18" alt="$CMD"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="https://gateway.commudao.xyz/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6" height="18" alt="$INF.POW"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>10 minutes</div>
                                </div>
                                {isCraftINFPOW ?
                                    <>
                                        <div style={{marginTop: "40px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimINFPOW === 0 ? "now" : timetoClaimINFPOW}</div>
                                        </div>
                                        {timetoClaimINFPOW === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainINFPOWHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftINFPOW !== null ?
                                                    <>
                                                        {canCraftINFPOW ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={craftINFPOWHandle}>Craft INF.POW</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft INF.POW</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>

                        <div style={{marginTop: "0px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">CommuDAO Transport Services</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "100%", textAlign: "left", display: "flex", flexDirection: "row"}} className='emp'>
                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="20" alt="$BBQ"/>&nbsp;
                                    $BBQ TRANSPORT HUB
                                </div>
                                <div style={{height: "80%", overflow: "scroll"}} className="pixel">
                                    {thubLvZ02 * allPowZ02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'Z02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('Z02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ02 * allPowZ02 > 0 ? <>🟢</> : <>⚪️</>} Z02 | T.HUB lv.{thubLvZ02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapZ02 * allPowZ02).toLocaleString('en-US')}</span>/{Number(allPowZ02 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA01 * allPowA01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA01 * allPowA01 > 0 ? <>🟢</> : <>⚪️</>} A01 | T.HUB lv.{thubLvA01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA01 * allPowA01).toLocaleString('en-US')}</span>/{Number(allPowA01 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA02 * allPowA02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA02 * allPowA02 > 0 ? <>🟢</> : <>⚪️</>} A02 | T.HUB lv.{thubLvA02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA02 * allPowA02).toLocaleString('en-US')}</span>/{Number(allPowA02 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA03 * allPowA03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA03 * allPowA03 > 0 ? <>🟢</> : <>⚪️</>} A03 | T.HUB lv.{thubLvA03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA03 * allPowA03).toLocaleString('en-US')}</span>/{Number(allPowA03 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA04 * allPowA04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA04 * allPowA04 > 0 ? <>🟢</> : <>⚪️</>} A04 | T.HUB lv.{thubLvA04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA04 * allPowA04).toLocaleString('en-US')}</span>/{Number(allPowA04 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA05 * allPowA05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA05 * allPowA05 > 0 ? <>🟢</> : <>⚪️</>} A05 | T.HUB lv.{thubLvA05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA05 * allPowA05).toLocaleString('en-US')}</span>/{Number(allPowA05 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA06 * allPowA06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA06 * allPowA06 > 0 ? <>🟢</> : <>⚪️</>} A06 | T.HUB lv.{thubLvA06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA06 * allPowA06).toLocaleString('en-US')}</span>/{Number(allPowA06 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA07 * allPowA07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA07 * allPowA07 > 0 ? <>🟢</> : <>⚪️</>} A07 | T.HUB lv.{thubLvA07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA07 * allPowA07).toLocaleString('en-US')}</span>/{Number(allPowA07 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA08 * allPowA08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA08 * allPowA08 > 0 ? <>🟢</> : <>⚪️</>} A08 | T.HUB lv.{thubLvA08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA08 * allPowA08).toLocaleString('en-US')}</span>/{Number(allPowA08 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA09 * allPowA09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA09 * allPowA09 > 0 ? <>🟢</> : <>⚪️</>} A09 | T.HUB lv.{thubLvA09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA09 * allPowA09).toLocaleString('en-US')}</span>/{Number(allPowA09 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA10 * allPowA10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA10 * allPowA10 > 0 ? <>🟢</> : <>⚪️</>} A10 | T.HUB lv.{thubLvA10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA10 * allPowA10).toLocaleString('en-US')}</span>/{Number(allPowA10 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA11 * allPowA11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'A11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('A11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA11 * allPowA11 > 0 ? <>🟢</> : <>⚪️</>} A11 | T.HUB lv.{thubLvA11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapA11 * allPowA11).toLocaleString('en-US')}</span>/{Number(allPowA11 * 10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ06 * allPowZ06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'Z06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('Z06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ06 * allPowZ06 > 0 ? <>🟢</> : <>⚪️</>} Z06 | T.HUB lv.{thubLvZ06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapZ06 * allPowZ06).toLocaleString('en-US')}</span>/{Number(allPowZ06 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ10 * allPowZ10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'Z10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('Z10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ10 * allPowZ10 > 0 ? <>🟢</> : <>⚪️</>} Z10 | T.HUB lv.{thubLvZ10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapZ10 * allPowZ10).toLocaleString('en-US')}</span>/{Number(allPowZ10 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB01 * allPowB01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB01 * allPowB01 > 0 ? <>🟢</> : <>⚪️</>} B01 | T.HUB lv.{thubLvB01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB01 * allPowB01).toLocaleString('en-US')}</span>/{Number(allPowB01 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB02 * allPowB02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB02 * allPowB02 > 0 ? <>🟢</> : <>⚪️</>} B02 | T.HUB lv.{thubLvB02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB02 * allPowB02).toLocaleString('en-US')}</span>/{Number(allPowB02 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB03 * allPowB03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB03 * allPowB03 > 0 ? <>🟢</> : <>⚪️</>} B03 | T.HUB lv.{thubLvB03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB03 * allPowB03).toLocaleString('en-US')}</span>/{Number(allPowB03 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB04 * allPowB04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB04 * allPowB04 > 0 ? <>🟢</> : <>⚪️</>} B04 | T.HUB lv.{thubLvB04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB04 * allPowB04).toLocaleString('en-US')}</span>/{Number(allPowB04 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB05 * allPowB05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB05 * allPowB05 > 0 ? <>🟢</> : <>⚪️</>} B05 | T.HUB lv.{thubLvB05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB05 * allPowB05).toLocaleString('en-US')}</span>/{Number(allPowB05 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB06 * allPowB06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB06 * allPowB06 > 0 ? <>🟢</> : <>⚪️</>} B06 | T.HUB lv.{thubLvB06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB06 * allPowB06).toLocaleString('en-US')}</span>/{Number(allPowB06 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB07 * allPowB07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB07 * allPowB07 > 0 ? <>🟢</> : <>⚪️</>} B07 | T.HUB lv.{thubLvB07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB07 * allPowB07).toLocaleString('en-US')}</span>/{Number(allPowB07 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB08 * allPowB08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB08 * allPowB08 > 0 ? <>🟢</> : <>⚪️</>} B08 | T.HUB lv.{thubLvB08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB08 * allPowB08).toLocaleString('en-US')}</span>/{Number(allPowB08 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB09 * allPowB09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB09 * allPowB09 > 0 ? <>🟢</> : <>⚪️</>} B09 | T.HUB lv.{thubLvB09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB09 * allPowB09).toLocaleString('en-US')}</span>/{Number(allPowB09 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB10 * allPowB10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB10 * allPowB10 > 0 ? <>🟢</> : <>⚪️</>} B10 | T.HUB lv.{thubLvB10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB10 * allPowB10).toLocaleString('en-US')}</span>/{Number(allPowB10 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB11 * allPowB11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'B11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('B11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB11 * allPowB11 > 0 ? <>🟢</> : <>⚪️</>} B11 | T.HUB lv.{thubLvB11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapB11 * allPowB11).toLocaleString('en-US')}</span>/{Number(allPowB11 * 5).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ11 * allPowZ11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'Z11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('Z11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ11 * allPowZ11 > 0 ? <>🟢</> : <>⚪️</>} Z11 | T.HUB lv.{thubLvZ11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapZ11 * allPowZ11).toLocaleString('en-US')}</span>/{Number(allPowZ11).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC01 * allPowC01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC01 * allPowC01 > 0 ? <>🟢</> : <>⚪️</>} C01 | T.HUB lv.{thubLvC01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC01 * allPowC01).toLocaleString('en-US')}</span>/{Number(allPowC01).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC02 * allPowC02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC02 * allPowC02 > 0 ? <>🟢</> : <>⚪️</>} C02 | T.HUB lv.{thubLvC02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC02 * allPowC02).toLocaleString('en-US')}</span>/{Number(allPowC02).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC03 * allPowC03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC03 * allPowC03 > 0 ? <>🟢</> : <>⚪️</>} C03 | T.HUB lv.{thubLvC03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC03 * allPowC03).toLocaleString('en-US')}</span>/{Number(allPowC03).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC04 * allPowC04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC04 * allPowC04 > 0 ? <>🟢</> : <>⚪️</>} C04 | T.HUB lv.{thubLvC04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC04 * allPowC04).toLocaleString('en-US')}</span>/{Number(allPowC04).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC05 * allPowC05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC05 * allPowC05 > 0 ? <>🟢</> : <>⚪️</>} C05 | T.HUB lv.{thubLvC05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC05 * allPowC05).toLocaleString('en-US')}</span>/{Number(allPowC05).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC06 * allPowC06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC06 * allPowC06 > 0 ? <>🟢</> : <>⚪️</>} C06 | T.HUB lv.{thubLvC06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC06 * allPowC06).toLocaleString('en-US')}</span>/{Number(allPowC06).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC07 * allPowC07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC07 * allPowC07 > 0 ? <>🟢</> : <>⚪️</>} C07 | T.HUB lv.{thubLvC07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC07 * allPowC07).toLocaleString('en-US')}</span>/{Number(allPowC07).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC08 * allPowC08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC08 * allPowC08 > 0 ? <>🟢</> : <>⚪️</>} C08 | T.HUB lv.{thubLvC08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC08 * allPowC08).toLocaleString('en-US')}</span>/{Number(allPowC08).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC09 * allPowC09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC09 * allPowC09 > 0 ? <>🟢</> : <>⚪️</>} C09 | T.HUB lv.{thubLvC09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC09 * allPowC09).toLocaleString('en-US')}</span>/{Number(allPowC09).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC10 * allPowC10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC10 * allPowC10 > 0 ? <>🟢</> : <>⚪️</>} C10 | T.HUB lv.{thubLvC10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC10 * allPowC10).toLocaleString('en-US')}</span>/{Number(allPowC10).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC11 * allPowC11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC11 * allPowC11 > 0 ? <>🟢</> : <>⚪️</>} C11 | T.HUB lv.{thubLvC11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC11 * allPowC11).toLocaleString('en-US')}</span>/{Number(allPowC11).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC12 * allPowC12 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C12' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C12')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC12 * allPowC12 > 0 ? <>🟢</> : <>⚪️</>} C12 | T.HUB lv.{thubLvC12}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC12}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC12 * allPowC12).toLocaleString('en-US')}</span>/{Number(allPowC12).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC12}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC13 * allPowC13 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C13' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C13')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC13 * allPowC13 > 0 ? <>🟢</> : <>⚪️</>} C13 | T.HUB lv.{thubLvC13}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC13}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC13 * allPowC13).toLocaleString('en-US')}</span>/{Number(allPowC13).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC13}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC14 * allPowC14 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C14' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C14')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC14 * allPowC14 > 0 ? <>🟢</> : <>⚪️</>} C14 | T.HUB lv.{thubLvC14}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC14}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC14 * allPowC14).toLocaleString('en-US')}</span>/{Number(allPowC14).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC14}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC15 * allPowC15 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C15' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C15')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC15 * allPowC15 > 0 ? <>🟢</> : <>⚪️</>} C15 | T.HUB lv.{thubLvC15}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC15}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC15 * allPowC15).toLocaleString('en-US')}</span>/{Number(allPowC15).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC15}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC16 * allPowC16 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C16' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C16')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC16 * allPowC16 > 0 ? <>🟢</> : <>⚪️</>} C16 | T.HUB lv.{thubLvC16}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC16}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC16 * allPowC16).toLocaleString('en-US')}</span>/{Number(allPowC16).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC16}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC17 * allPowC17 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C17' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C17')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC17 * allPowC17 > 0 ? <>🟢</> : <>⚪️</>} C17 | T.HUB lv.{thubLvC17}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC17}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC17 * allPowC17).toLocaleString('en-US')}</span>/{Number(allPowC17).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC17}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC18 * allPowC18 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C18' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C18')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC18 * allPowC18 > 0 ? <>🟢</> : <>⚪️</>} C18 | T.HUB lv.{thubLvC18}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC18}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC18 * allPowC18).toLocaleString('en-US')}</span>/{Number(allPowC18).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC18}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC19 * allPowC19 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C19' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C19')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC19 * allPowC19 > 0 ? <>🟢</> : <>⚪️</>} C19 | T.HUB lv.{thubLvC19}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC19}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC19 * allPowC19).toLocaleString('en-US')}</span>/{Number(allPowC19).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC19}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC20 * allPowC20 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C20' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C20')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC20 * allPowC20 > 0 ? <>🟢</> : <>⚪️</>} C20 | T.HUB lv.{thubLvC20}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC20}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC20 * allPowC20).toLocaleString('en-US')}</span>/{Number(allPowC20).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC20}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC21 * allPowC21 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C21' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C21')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC21 * allPowC21 > 0 ? <>🟢</> : <>⚪️</>} C21 | T.HUB lv.{thubLvC21}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC21}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC21 * allPowC21).toLocaleString('en-US')}</span>/{Number(allPowC21).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC21}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC22 * allPowC22 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected === 'C22' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected('C22')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC22 * allPowC22 > 0 ? <>🟢</> : <>⚪️</>} C22 | T.HUB lv.{thubLvC22}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC22}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number(thubCapC22 * allPowC22).toLocaleString('en-US')}</span>/{Number(allPowC22).toLocaleString('en-US')} $BBQ</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC22}</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div style={{width: "100%", marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <div>DESTINATION: <span className='emp'>{houseSelected}</span></div>
                                    <div>tBridge fee: 80 CMD</div>
                                </div>
                                <div style={{width: "100%", marginTop: "5px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <input
                                        style={{maxHeight: "10px", width: "180px", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                        type="number"
                                        step="1"
                                        min="1"
                                        placeholder="0.00 $BBQ"
                                        value={transportValue}
                                        onChange={(event) => setTransportValue(event.target.value)}
                                    ></input>
                                    {address !== null ? 
                                        <div style={{maxHeight: "10px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0", fontSize: "12px"}} className="button" onClick={transportHandle}>TRANSPORT</div> : 
                                        <div style={{maxHeight: "10px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed", fontSize: "12px"}} className="button">TRANSPORT</div>
                                    }
                                </div>
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px 10px 80px 10px"}}>
                                <div style={{width: "100%", textAlign: "left", display: "flex", flexDirection: "row",}} className='emp'>
                                    <img src="https://gateway.commudao.xyz/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6" height="20" alt="$INF.POW"/>&nbsp;
                                    $INF.POW TRANSPORT HUB
                                </div>
                                <div style={{height: "80%", overflow: "scroll"}} className="pixel">
                                    {thubLvZ02 * allPowZ02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'Z02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('Z02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ02 * allPowZ02 > 0 ? <>🟢</> : <>⚪️</>} Z02 | T.HUB lv.{thubLvZ02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapZ02 * allPowZ02)/10000).toLocaleString('en-US')}</span>/{Number(allPowZ02 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA01 * allPowA01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA01 * allPowA01 > 0 ? <>🟢</> : <>⚪️</>} A01 | T.HUB lv.{thubLvA01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA01 * allPowA01)/10000).toLocaleString('en-US')}</span>/{Number(allPowA01 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA02 * allPowA02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA02 * allPowA02 > 0 ? <>🟢</> : <>⚪️</>} A02 | T.HUB lv.{thubLvA02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA02 * allPowA02)/10000).toLocaleString('en-US')}</span>/{Number(allPowA02 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA03 * allPowA03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA03 * allPowA03 > 0 ? <>🟢</> : <>⚪️</>} A03 | T.HUB lv.{thubLvA03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA03 * allPowA03)/10000).toLocaleString('en-US')}</span>/{Number(allPowA03 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA04 * allPowA04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA04 * allPowA04 > 0 ? <>🟢</> : <>⚪️</>} A04 | T.HUB lv.{thubLvA04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA04 * allPowA04)/10000).toLocaleString('en-US')}</span>/{Number(allPowA04 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA05 * allPowA05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA05 * allPowA05 > 0 ? <>🟢</> : <>⚪️</>} A05 | T.HUB lv.{thubLvA05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA05 * allPowA05)/10000).toLocaleString('en-US')}</span>/{Number(allPowA05 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA06 * allPowA06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA06 * allPowA06 > 0 ? <>🟢</> : <>⚪️</>} A06 | T.HUB lv.{thubLvA06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA06 * allPowA06)/10000).toLocaleString('en-US')}</span>/{Number(allPowA06 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA07 * allPowA07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA07 * allPowA07 > 0 ? <>🟢</> : <>⚪️</>} A07 | T.HUB lv.{thubLvA07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA07 * allPowA07)/10000).toLocaleString('en-US')}</span>/{Number(allPowA07 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA08 * allPowA08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA08 * allPowA08 > 0 ? <>🟢</> : <>⚪️</>} A08 | T.HUB lv.{thubLvA08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA08 * allPowA08)/10000).toLocaleString('en-US')}</span>/{Number(allPowA08 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA09 * allPowA09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA09 * allPowA09 > 0 ? <>🟢</> : <>⚪️</>} A09 | T.HUB lv.{thubLvA09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA09 * allPowA09)/10000).toLocaleString('en-US')}</span>/{Number(allPowA09 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA10 * allPowA10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA10 * allPowA10 > 0 ? <>🟢</> : <>⚪️</>} A10 | T.HUB lv.{thubLvA10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA10 * allPowA10)/10000).toLocaleString('en-US')}</span>/{Number(allPowA10 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvA11 * allPowA11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'A11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('A11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapA11 * allPowA11 > 0 ? <>🟢</> : <>⚪️</>} A11 | T.HUB lv.{thubLvA11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeA11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapA11 * allPowA11)/10000).toLocaleString('en-US')}</span>/{Number(allPowA11 * (10 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubA11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ06 * allPowZ06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'Z06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('Z06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ06 * allPowZ06 > 0 ? <>🟢</> : <>⚪️</>} Z06 | T.HUB lv.{thubLvZ06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapZ06 * allPowZ06)/10000).toLocaleString('en-US')}</span>/{Number(allPowZ06 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ10 * allPowZ10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'Z10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('Z10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ10 * allPowZ10 > 0 ? <>🟢</> : <>⚪️</>} Z10 | T.HUB lv.{thubLvZ10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapZ10 * allPowZ10)/10000).toLocaleString('en-US')}</span>/{Number(allPowZ10 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB01 * allPowB01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB01 * allPowB01 > 0 ? <>🟢</> : <>⚪️</>} B01 | T.HUB lv.{thubLvB01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB01 * allPowB01)/10000).toLocaleString('en-US')}</span>/{Number(allPowB01 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB02 * allPowB02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB02 * allPowB02 > 0 ? <>🟢</> : <>⚪️</>} B02 | T.HUB lv.{thubLvB02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB02 * allPowB02)/10000).toLocaleString('en-US')}</span>/{Number(allPowB02 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB03 * allPowB03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB03 * allPowB03 > 0 ? <>🟢</> : <>⚪️</>} B03 | T.HUB lv.{thubLvB03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB03 * allPowB03)/10000).toLocaleString('en-US')}</span>/{Number(allPowB03 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB04 * allPowB04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB04 * allPowB04 > 0 ? <>🟢</> : <>⚪️</>} B04 | T.HUB lv.{thubLvB04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB04 * allPowB04)/10000).toLocaleString('en-US')}</span>/{Number(allPowB04 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB05 * allPowB05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB05 * allPowB05 > 0 ? <>🟢</> : <>⚪️</>} B05 | T.HUB lv.{thubLvB05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB05 * allPowB05)/10000).toLocaleString('en-US')}</span>/{Number(allPowB05 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB06 * allPowB06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB06 * allPowB06 > 0 ? <>🟢</> : <>⚪️</>} B06 | T.HUB lv.{thubLvB06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB06 * allPowB06)/10000).toLocaleString('en-US')}</span>/{Number(allPowB06 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB07 * allPowB07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB07 * allPowB07 > 0 ? <>🟢</> : <>⚪️</>} B07 | T.HUB lv.{thubLvB07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB07 * allPowB07)/10000).toLocaleString('en-US')}</span>/{Number(allPowB07 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB08 * allPowB08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB08 * allPowB08 > 0 ? <>🟢</> : <>⚪️</>} B08 | T.HUB lv.{thubLvB08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB08 * allPowB08)/10000).toLocaleString('en-US')}</span>/{Number(allPowB08 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB09 * allPowB09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB09 * allPowB09 > 0 ? <>🟢</> : <>⚪️</>} B09 | T.HUB lv.{thubLvB09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB09 * allPowB09)/10000).toLocaleString('en-US')}</span>/{Number(allPowB09 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB10 * allPowB10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB10 * allPowB10 > 0 ? <>🟢</> : <>⚪️</>} B10 | T.HUB lv.{thubLvB10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB10 * allPowB10)/10000).toLocaleString('en-US')}</span>/{Number(allPowB10 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvB11 * allPowB11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'B11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('B11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapB11 * allPowB11 > 0 ? <>🟢</> : <>⚪️</>} B11 | T.HUB lv.{thubLvB11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeB11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapB11 * allPowB11)/10000).toLocaleString('en-US')}</span>/{Number(allPowB11 * (5 / 10000)).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubB11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvZ11 * allPowZ11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'Z11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('Z11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapZ11 * allPowZ11 > 0 ? <>🟢</> : <>⚪️</>} Z11 | T.HUB lv.{thubLvZ11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeZ11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapZ11 * allPowZ11)/10000).toLocaleString('en-US')}</span>/{Number(allPowZ11 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubZ11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC01 * allPowC01 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C01' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C01')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC01 * allPowC01 > 0 ? <>🟢</> : <>⚪️</>} C01 | T.HUB lv.{thubLvC01}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC01}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC01 * allPowC01)/10000).toLocaleString('en-US')}</span>/{Number(allPowC01 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC01}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC02 * allPowC02 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C02' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C02')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC02 * allPowC02 > 0 ? <>🟢</> : <>⚪️</>} C02 | T.HUB lv.{thubLvC02}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC02}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC02 * allPowC02)/10000).toLocaleString('en-US')}</span>/{Number(allPowC02 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC02}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC03 * allPowC03 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C03' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C03')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC03 * allPowC03 > 0 ? <>🟢</> : <>⚪️</>} C03 | T.HUB lv.{thubLvC03}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC03}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC03 * allPowC03)/10000).toLocaleString('en-US')}</span>/{Number(allPowC03 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC03}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC04 * allPowC04 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C04' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C04')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC04 * allPowC04 > 0 ? <>🟢</> : <>⚪️</>} C04 | T.HUB lv.{thubLvC04}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC04}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC04 * allPowC04)/10000).toLocaleString('en-US')}</span>/{Number(allPowC04 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC04}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC05 * allPowC05 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C05' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C05')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC05 * allPowC05 > 0 ? <>🟢</> : <>⚪️</>} C05 | T.HUB lv.{thubLvC05}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC05}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC05 * allPowC05)/10000).toLocaleString('en-US')}</span>/{Number(allPowC05 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC05}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC06 * allPowC06 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C06' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C06')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC06 * allPowC06 > 0 ? <>🟢</> : <>⚪️</>} C06 | T.HUB lv.{thubLvC06}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC06}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC06 * allPowC06)/10000).toLocaleString('en-US')}</span>/{Number(allPowC06 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC06}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC07 * allPowC07 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C07' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C07')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC07 * allPowC07 > 0 ? <>🟢</> : <>⚪️</>} C07 | T.HUB lv.{thubLvC07}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC07}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC07 * allPowC07)/10000).toLocaleString('en-US')}</span>/{Number(allPowC07 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC07}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC08 * allPowC08 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C08' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C08')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC08 * allPowC08 > 0 ? <>🟢</> : <>⚪️</>} C08 | T.HUB lv.{thubLvC08}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC08}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC08 * allPowC08)/10000).toLocaleString('en-US')}</span>/{Number(allPowC08 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC08}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC09 * allPowC09 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C09' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C09')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC09 * allPowC09 > 0 ? <>🟢</> : <>⚪️</>} C09 | T.HUB lv.{thubLvC09}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC09}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC09 * allPowC09)/10000).toLocaleString('en-US')}</span>/{Number(allPowC09 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC09}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC10 * allPowC10 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C10' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C10')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC10 * allPowC10 > 0 ? <>🟢</> : <>⚪️</>} C10 | T.HUB lv.{thubLvC10}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC10}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC10 * allPowC10)/10000).toLocaleString('en-US')}</span>/{Number(allPowC10 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC10}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC11 * allPowC11 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C11' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C11')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC11 * allPowC11 > 0 ? <>🟢</> : <>⚪️</>} C11 | T.HUB lv.{thubLvC11}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC11}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC11 * allPowC11)/10000).toLocaleString('en-US')}</span>/{Number(allPowC11 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC11}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC12 * allPowC12 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C12' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C12')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC12 * allPowC12 > 0 ? <>🟢</> : <>⚪️</>} C12 | T.HUB lv.{thubLvC12}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC12}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC12 * allPowC12)/10000).toLocaleString('en-US')}</span>/{Number(allPowC12 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC12}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC13 * allPowC13 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C13' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C13')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC13 * allPowC13 > 0 ? <>🟢</> : <>⚪️</>} C13 | T.HUB lv.{thubLvC13}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC13}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC13 * allPowC13)/10000).toLocaleString('en-US')}</span>/{Number(allPowC13 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC13}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC14 * allPowC14 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C14' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C14')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC14 * allPowC14 > 0 ? <>🟢</> : <>⚪️</>} C14 | T.HUB lv.{thubLvC14}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC14}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC14 * allPowC14)/10000).toLocaleString('en-US')}</span>/{Number(allPowC14 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC14}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC15 * allPowC15 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C15' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C15')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC15 * allPowC15 > 0 ? <>🟢</> : <>⚪️</>} C15 | T.HUB lv.{thubLvC15}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC15}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC15 * allPowC15)/10000).toLocaleString('en-US')}</span>/{Number(allPowC15 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC15}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC16 * allPowC16 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C16' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C16')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC16 * allPowC16 > 0 ? <>🟢</> : <>⚪️</>} C16 | T.HUB lv.{thubLvC16}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC16}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC16 * allPowC16)/10000).toLocaleString('en-US')}</span>/{Number(allPowC16 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC16}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC17 * allPowC17 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C17' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C17')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC17 * allPowC17 > 0 ? <>🟢</> : <>⚪️</>} C17 | T.HUB lv.{thubLvC17}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC17}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC17 * allPowC17)/10000).toLocaleString('en-US')}</span>/{Number(allPowC17 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC17}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC18 * allPowC18 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C18' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C18')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC18 * allPowC18 > 0 ? <>🟢</> : <>⚪️</>} C18 | T.HUB lv.{thubLvC18}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC18}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC18 * allPowC18)/10000).toLocaleString('en-US')}</span>/{Number(allPowC18 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC18}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC19 * allPowC19 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C19' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C19')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC19 * allPowC19 > 0 ? <>🟢</> : <>⚪️</>} C19 | T.HUB lv.{thubLvC19}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC19}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC19 * allPowC19)/10000).toLocaleString('en-US')}</span>/{Number(allPowC19 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC19}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC20 * allPowC20 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C20' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C20')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC20 * allPowC20 > 0 ? <>🟢</> : <>⚪️</>} C20 | T.HUB lv.{thubLvC20}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC20}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC20 * allPowC20)/10000).toLocaleString('en-US')}</span>/{Number(allPowC20 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC20}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC21 * allPowC21 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C21' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C21')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC21 * allPowC21 > 0 ? <>🟢</> : <>⚪️</>} C21 | T.HUB lv.{thubLvC21}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC21}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC21 * allPowC21)/10000).toLocaleString('en-US')}</span>/{Number(allPowC21 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC21}</div>
                                            </div>
                                        </div>
                                    }
                                    {thubLvC22 * allPowC22 > 0 &&
                                        <div style={{marginTop: "10px", padding: "10px", border: "1px solid", cursor: "pointer", background: houseSelected2 === 'C22' ? "rgb(0, 227, 180)" : "transparent"}} onClick={() => setHouseSelected2('C22')}>
                                            <div style={{width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div>{thubCapC22 * allPowC22 > 0 ? <>🟢</> : <>⚪️</>} C22 | T.HUB lv.{thubLvC22}</div>
                                                <div>FEE: <span style={{color: "#000"}}>{thubFeeC22}%</span></div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>CAP: <span style={{color: "#000"}}>{Number((thubCapC22 * allPowC22)/10000).toLocaleString('en-US')}</span>/{Number(allPowC22 / 10000).toLocaleString('en-US')} $INF.POW</div>
                                            </div>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                                <div></div>
                                                <div>RESET ON: {nextDayThubC22}</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div style={{width: "100%", marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <div>DESTINATION: <span className='emp'>{houseSelected2}</span></div>
                                    <div>tBridge fee: 80 CMD</div>
                                </div>
                                <div style={{width: "100%", marginTop: "5px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <input
                                        style={{maxHeight: "10px", width: "180px", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                        type="number"
                                        step="1"
                                        min="1"
                                        placeholder="0.00 $INF.POW"
                                        value={transportValue2}
                                        onChange={(event) => setTransportValue2(event.target.value)}
                                    ></input>
                                    {address !== null ? 
                                        <div style={{maxHeight: "10px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0", fontSize: "12px"}} className="button" onClick={() => transportHandle2(3)}>TRANSPORT</div> : 
                                        <div style={{maxHeight: "10px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed", fontSize: "12px"}} className="button">TRANSPORT</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default BBQLabs
