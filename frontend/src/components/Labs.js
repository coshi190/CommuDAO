import React from 'react'
import { ethers } from 'ethers'
import { getBalance, readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
const { ethereum } = window
const kyc = '0xfB046CF7dBA4519e997f1eF3e634224a9BFf5A2E'
const cmjToken = "0xE67E280f5a354B4AcA15fA7f0ccbF667CF74F97b"
const woodField = '0xc2744Ff255518a736505cF9aC1996D9adDec69Bd'
const bbqToken = '0x7004757e595409568Bd728736e1b0c79FDc94e1c'
const bbqLab = '0x9D73C97edC9489935B2dF250a097917d4860C60e'
const stOPT = '0x435BeAF4B83A6dc57927E9dB194a3Ccf54100F7a'
const pzaLab = '0x09DcdCFc6C48803681a3422997c679E773656763'
const cuToken = '0x42F5213C7b6281FC6fb2d6F10576F70DB0a4C841'
const silToken = '0x2a081667587c35956d34A4cC3bf92b9CA0ef2C6f'
const silLab = '0xfEe9af37FBee37DbA1A830080b20Caa99b41741A'
const goldToken = '0x7d5346E33889580528e6F79f48BdEE94D8A9E144'
const goldLab = '0xc69F46334a86F4617Fa17432F430c641c2e10139'
const platToken = '0x3Bd00B6cd18281E3Ef13Ba348ad2783794dcb2bD'
const platLab = '0xFFBADf348b97055cA8E60a848718cAEf29df50A7'
const platLab2 = '0xB080353ccD9CC565C0844Bb22e2997EdB2b6B7f0'
const dunJasper = '0xe83567Cd0f3Ed2cca21BcE05DBab51707aff2860'
const plutoToken = '0x70a74ec50bcceae43dd16f48492552a8b25403ea'
const plutoLab = '0x907bcCa99052c195BA8181aca07181D18E1C7555'
const fbtcToken = '0x8656268C82cffda9062387F8F117166F01e8Ef2E'
const fbtcLab = '0x1ef5A1CbBc5Ea2058105Cb96073A0faC450F07D7'
const x4Token = '0x0DF9D160489440D630a247fBC830DA74779928b1'
const x4Lab = '0xaB58A9dEc0FC7FEcE936BF5aBe3C1fC23cdee156'
const tunaField = "0x09676315DC0c85F6bd5e866C5f1363A00Eec4381"
const ctunaLab = "0xD9Be0e64053c8E0A0F868577F379C0ced5A28aF0"
const fieldMice = '0x09DE640ecd50e1c81bCB266279e3ffC2719873df'
const sx31Lab = '0xd431d826d7a4380b9259612176f00528b88840a7'
const taomeme = '0xdbCCc9F8920e7274eeC62e695084D3bCe443c3dd'
const gearField = '0x0E2610730A3c42fd721B289BEe092D9AD1C76890'
const iiLab = '0x523AA3aB2371A6360BeC4fEea7bE1293adb32241'
const dunEE = '0xF663c756b6D57724C3B41c8839aB9c7Af83c9751'
const vabag = '0x495d66c9Fd7c63807114d06802A48BdAA60a0426'
const swarLab = '0x5e18a8B78d5395371308C54719fead810Ce2aCd2'
const dunANGB = '0x59c1C2f5FA76DB933B97b7c54223129e2A398534'
const starLab = '0x7A7Bc613e93aD729141D4BbB94375b5aD19d0Cbf'
const doijibToken = '0x7414e2D8Fb8466AfA4F85A240c57CB8615901FFB'
const doistarToken = '0x27Fd1c088Cb0750e66a20f407b12c1ACa3AD77dd'
const doistarLab = '0x028b5FEd156972f97ebd69E271c56B61d748De92'

const Labs = ({ config, callMode, navigate, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, ctunaLabABI, sx31LabABI, bbqLab01ABI, pzaLabABI, cmdao20lab01ABI, erc20Abi, kycABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [isKYC, setIsKYC] = React.useState(null)
    const [cmjBalance, setCmjBalance] = React.useState(0)
    const [woodBalance, setWoodBalance] = React.useState(0)
    const [bbqBalance, setBbqBalance] = React.useState(0)
    const [tunaBalance, setTunaBalance] = React.useState(0)
    const [ctunaBalance, setCTunaBalance] = React.useState(0)
    const [miceBalance, setMiceBalance] = React.useState(0)
    const [sx31Balance, setSx31Balance] = React.useState(0)
    const [pzaBalance, setPzaBalance] = React.useState(0)
    const [copperBalance, setCopperBalance] = React.useState(0)
    const [silverBalance, setSilverBalance] = React.useState(0)
    const [goldBalance, setGoldBalance] = React.useState(0)
    const [platBalance, setPlatBalance] = React.useState(0)
    const [jaspBalance, setJaspBalance] = React.useState(0)
    const [plutoBalance, setPlutoBalance] = React.useState(0)
    const [fbtcBalance, setFbtcBalance] = React.useState(0)
    const [x4Balance, setX4Balance] = React.useState(0)
    const [doijibBalance, setDoijibBalance] = React.useState(0)
    const [doistarBalance, setDoistarBalance] = React.useState(0)
    const [stOPTBalance, setStOPTBalance] = React.useState(0)
    const [vabagBalance, setVabagBalance] = React.useState(0)
    const [swarBalance, setSwarBalance] = React.useState(0)
    const [angbBalance, setAngbBalance] = React.useState(0)
    const [starBalance, setStarBalance] = React.useState(0)
    const [tmBalance, setTmBalance] = React.useState(0)
    const [gearBalance, setGearBalance] = React.useState(0)
    const [iiBalance, setIiBalance] = React.useState(0)
    const [eeBalance, setEeBalance] = React.useState(0)
    const [levelCraftBBQ, setLevelCraftBBQ] = React.useState(0)
    const [isCraftBBQ, setIsCraftBBQ] = React.useState(null)
    const [timetoClaimBBQ, setTimeToClaimBBQ] = React.useState(0)
    const [canCraftBBQ, setCanCraftBBQ] = React.useState(false)
    const [isCraftPZA, setIsCraftPZA] = React.useState(null)
    const [timetoClaimPZA, setTimeToClaimPZA] = React.useState(0)
    const [canCraftPZA, setCanCraftPZA] = React.useState(false)
    const [isCraftSIL, setIsCraftSIL] = React.useState(null)
    const [timetoClaimSIL, setTimeToClaimSIL] = React.useState(0)
    const [canCraftSIL, setCanCraftSIL] = React.useState(false)
    const [isCraftGOLD, setIsCraftGOLD] = React.useState(null)
    const [timetoClaimGOLD, setTimeToClaimGOLD] = React.useState(0)
    const [canCraftGOLD, setCanCraftGOLD] = React.useState(false)
    const [isCraftPLAT, setIsCraftPLAT] = React.useState(null)
    const [timetoClaimPLAT, setTimeToClaimPLAT] = React.useState(0)
    const [canCraftPLAT, setCanCraftPLAT] = React.useState(false)
    const [isCraftPLAT2, setIsCraftPLAT2] = React.useState(null)
    const [timetoClaimPLAT2, setTimeToClaimPLAT2] = React.useState(0)
    const [canCraftPLAT2, setCanCraftPLAT2] = React.useState(false)
    const [isCraftPLUTO, setIsCraftPLUTO] = React.useState(null)
    const [timetoClaimPLUTO, setTimeToClaimPLUTO] = React.useState(0)
    const [canCraftPLUTO, setCanCraftPLUTO] = React.useState(false)
    const [isCraftFBTC, setIsCraftFBTC] = React.useState(null)
    const [timetoClaimFBTC, setTimeToClaimFBTC] = React.useState(0)
    const [canCraftFBTC, setCanCraftFBTC] = React.useState(false)
    const [isCraftX4, setIsCraftX4] = React.useState(null)
    const [timetoClaimX4, setTimeToClaimX4] = React.useState(0)
    const [canCraftX4, setCanCraftX4] = React.useState(false)
    const [isCraftDOISTAR, setIsCraftDOISTAR] = React.useState(null)
    const [timetoClaimDOISTAR, setTimeToClaimDOISTAR] = React.useState(0)
    const [canCraftDOISTAR, setCanCraftDOISTAR] = React.useState(false)
    const [isCraft1, setIsCraft1] = React.useState(null)
    const [timetoClaim1, setTimeToClaim1] = React.useState(0)
    const [canCraft1, setCanCraft1] = React.useState(false)
    const [isCraft2, setIsCraft2] = React.useState(null)
    const [craft2machine, setCraft2machine] = React.useState(0)
    const [timetoClaim2, setTimeToClaim2] = React.useState(0)
    const [timetoClaim2_2, setTimeToClaim2_2] = React.useState(0)
    const [canCraft2, setCanCraft2] = React.useState(false)
    const [canCraft2_2, setCanCraft2_2] = React.useState(false)
    const [isCraftSWAR, setIsCraftSWAR] = React.useState(null)
    const [timetoClaimSWAR, setTimeToClaimSWAR] = React.useState(0)
    const [canCraftSWAR, setCanCraftSWAR] = React.useState(false)
    const [isCraftSTAR, setIsCraftSTAR] = React.useState(null)
    const [timetoClaimSTAR, setTimeToClaimSTAR] = React.useState(0)
    const [canCraftSTAR, setCanCraftSTAR] = React.useState(false)
    const [isCraftII, setIsCraftII] = React.useState(null)
    const [timetoClaimII, setTimeToClaimII] = React.useState(0)
    const [canCraftII, setCanCraftII] = React.useState(false)
    const [craftIImachine, setCraftIImachine] = React.useState(0)
    const [timetoClaimII2, setTimeToClaimII2] = React.useState(0)
    const [canCraftII2, setCanCraftII2] = React.useState(false)
    
    React.useEffect(() => {    
        window.scrollTo(0, 0)  
        console.log("Connected to " + address)
        
        const thefetch = async () => {
            const jbcBal = chain !== undefined && chain.id === 8899 && address !== null ?
                await getBalance(config, { address: address, }) :
                {formatted: 0}
            const data = chain !== undefined && chain.id === 8899 && address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: cmjToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: woodField,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: tunaField,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: ctunaLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: fieldMice,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: sx31Lab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: stOPT,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: pzaLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: cuToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: silToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: goldToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: kyc,
                        abi: kycABI,
                        functionName: 'kyc',
                        args: [1, address],
                    },
                    {
                        address: ctunaLab,
                        abi: ctunaLabABI,
                        functionName: 'tunaSupplier',
                        args: [address],
                    },
                    {
                        address: sx31Lab,
                        abi: sx31LabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: bbqLab,
                        abi: bbqLab01ABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: pzaLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: silLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: goldLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: plutoLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: plutoToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: platToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: platLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: vabag,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: swarLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: swarLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: dunANGB,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: starLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: starLab,
                        abi: cmdao20lab01ABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: taomeme,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: gearField,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: iiLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: iiLab,
                        abi: cmdao20lab01ABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: dunEE,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: platLab2,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: dunJasper,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: doijibToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: doistarToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: fbtcToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: x4Token,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: doistarLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: fbtcLab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: x4Lab,
                        abi: pzaLabABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                ],
            }) : [
                {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, 
                {result: 0}, {result: 0}, {result: false}, {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, machineIndex: 0, laststamp: 0}}, {result: {isCraft: false, machineIndex: 0, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}},
                {result: 0}, {result: 0}, {result: {isCraft: false, laststamp: 0}}, {result: 0}, {result: 0}, {result: {isCraft: false, laststamp: 0}}, {result: 0}, {result: 0}, {result: {isCraft: false, laststamp: 0}}, {result: 0},
                {result: 0}, {result: 0}, {result: {isCraft: false, laststamp: 0}}, {result: 0}, {result: {isCraft: false, laststamp: 0}}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0},
                {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}}, {result: {isCraft: false, laststamp: 0}},

            ]
            const cmjBal = data[0].result
            const woodBal = data[1].result
            const bbqBal = data[2].result
            const tunaBal = data[3].result
            const ctunaBal = data[4].result
            const miceBal = data[5].result
            const sx31Bal = data[6].result
            const stOPTBal = data[7].result
            const pzaBal = data[8].result
            const cuBal = data[9].result
            const silBal = data[10].result
            const goldBal = data[11].result
            const isDionysus = data[12].result
            const labLog = data[13].result
            const labLog2 = data[14].result
            const labLogBBQ = data[15].result
            const labLogPZA = data[16].result
            const labLogSIL = data[17].result
            const labLogGOLD = data[18].result
            const labLogPLUTO = data[19].result
            const plutoBal = data[20].result
            const platBal = data[21].result
            const labLogPLAT = data[22].result
            const vaBagBal = data[23].result
            const swarBal = data[24].result
            const labLogSWAR = data[25].result
            const angbBal = data[26].result
            const starBal = data[27].result
            const labLogSTAR = data[28].result
            const tmBal = data[29].result
            const gearBal = data[30].result
            const iiBal = data[31].result
            const labLogII = data[32].result
            const eeBal = data[33].result
            const labLogPlat2 = data[34].result
            const jaspBal = data[35].result
            const doijibBal = data[36].result
            const doistarBal = data[37].result
            const fbtcBal = data[38].result
            const x4Bal = data[39].result
            const labLogDOISTAR = data[40].result
            const labLogFBTC = data[41].result
            const labLogX4 = data[42].result
            const _canCraft1 = Number(ethers.utils.formatEther(tunaBal)) >= 50 && Number(ethers.utils.formatEther(cmjBal)) >= 10 ? true : false
            const _canCraft2 = Number(ethers.utils.formatEther(miceBal)) >= 50 && Number(ethers.utils.formatEther(cmjBal)) >= 9 ? true : false
            const _canCraft2_2 = Number(ethers.utils.formatEther(miceBal)) >= 500 && Number(ethers.utils.formatEther(cmjBal)) >= 90 ? true : false
            const _canCraftBBQ = Number(ethers.utils.formatEther(woodBal)) >= 100 && Number(jbcBal.formatted) >= 0.01 ? true : false
            const _canCraftPZA = Number(ethers.utils.formatEther(stOPTBal)) >= 1 && Number(ethers.utils.formatEther(bbqBal)) >= 10000 ? true : false
            const _canCraftSIL = Number(ethers.utils.formatEther(cmjBal)) >= 1 && Number(ethers.utils.formatEther(cuBal)) >= 150000 ? true : false
            const _canCraftGOLD = Number(ethers.utils.formatEther(sx31Bal)) >= 5 && Number(ethers.utils.formatEther(silBal)) >= 10000 ? true : false
            const _canCraftPLUTO = Number(ethers.utils.formatUnits(jaspBal, 'gwei')) >= 100 && Number(ethers.utils.formatEther(cmjBal)) >= 5 ? true : false
            const _canCraftPLAT = Number(ethers.utils.formatEther(goldBal)) >= 300 && Number(ethers.utils.formatEther(ctunaBal)) >= 5 ? true : false
            const _canCraftSWAR = Number(ethers.utils.formatEther(vaBagBal)) >= 10 && Number(ethers.utils.formatEther(cmjBal)) >= 1 ? true : false
            const _canCraftSTAR = Number(ethers.utils.formatEther(angbBal)) >= 40 && Number(ethers.utils.formatEther(cmjBal)) >= 1 ? true : false
            const _canCraftII = Number(ethers.utils.formatEther(gearBal)) >= 888 && Number(ethers.utils.formatEther(tmBal)) >= 8 ? true : false
            const _canCraftII2 = Number(ethers.utils.formatEther(gearBal)) >= 88888 && Number(ethers.utils.formatEther(tmBal)) >= 128 ? true : false
            const _canCraftPLAT2 = Number(ethers.utils.formatEther(eeBal)) >= 888 && Number(ethers.utils.formatEther(cmjBal)) >= 1 ? true : false
            const _canCraftDOISTAR = Number(ethers.utils.formatEther(starBal)) >= 1 && Number(ethers.utils.formatEther(doijibBal)) >= 100000 ? true : false
            const _canCraftFBTC = Number(ethers.utils.formatUnits(plutoBal, 'gwei')) >= 20 && Number(ethers.utils.formatEther(doistarBal)) >= 10 ? true : false
            const _canCraftX4 = Number(fbtcBal) >= 10 && Number(ethers.utils.formatEther(platBal)) >= 1000 ? true : false

            return [
                isDionysus, jbcBal, cmjBal, woodBal, bbqBal, tunaBal, ctunaBal, miceBal, sx31Bal, stOPTBal, pzaBal, cuBal, silBal, goldBal,
                labLog, _canCraft1, labLog2, _canCraft2, _canCraft2_2, labLogBBQ, _canCraftBBQ,
                labLogPZA, _canCraftPZA, labLogSIL, _canCraftSIL, labLogGOLD, _canCraftGOLD,
                plutoBal, labLogPLUTO, _canCraftPLUTO, platBal, labLogPLAT, _canCraftPLAT,
                vaBagBal, swarBal, labLogSWAR, _canCraftSWAR, angbBal, starBal, labLogSTAR, _canCraftSTAR,
                tmBal, gearBal, iiBal, labLogII, _canCraftII, _canCraftII2, eeBal, labLogPlat2, _canCraftPLAT2, jaspBal, 
                doijibBal, doistarBal, fbtcBal, x4Bal, labLogDOISTAR, _canCraftDOISTAR, labLogFBTC, _canCraftFBTC, labLogX4, _canCraftX4,
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
            setIsKYC(result[0])
            setCmjBalance(ethers.utils.formatEther(result[2]))
            setWoodBalance(ethers.utils.formatEther(result[3]))
            setBbqBalance(ethers.utils.formatEther(result[4]))
            setTunaBalance(ethers.utils.formatEther(result[5]))
            setCTunaBalance(ethers.utils.formatEther(result[6]))
            setMiceBalance(ethers.utils.formatEther(result[7]))
            setSx31Balance(ethers.utils.formatEther(result[8]))
            setStOPTBalance(ethers.utils.formatEther(result[9]))
            setPzaBalance(ethers.utils.formatEther(result[10]))
            setCopperBalance(ethers.utils.formatEther(result[11]))
            setSilverBalance(ethers.utils.formatEther(result[12]))
            setGoldBalance(ethers.utils.formatEther(result[13]))
            setIsCraft1(result[14][0])
            const nextHour = new Date((Number(result[14][1]) * 1000) + (3600 * 1000))
            Date.now() - (Number(result[14][1]) * 1000) <= (3600 * 1000) ?
                setTimeToClaim1(nextHour.toLocaleString('es-CL')) :
                setTimeToClaim1(0)
            setCanCraft1(result[15])
            setIsCraft2(result[16][0])
            setCraft2machine(Number(result[16][1]))
            let nextHour2 = 0
            if (Number(result[16][1]) === 1) {
                nextHour2 = new Date((Number(result[16][2]) * 1000) + (3600 * 1 * 1000))
                Date.now() - (Number(result[16][2]) * 1000) <= (3600 * 1 * 1000) ?
                    setTimeToClaim2(nextHour2.toLocaleString('es-CL')) :
                    setTimeToClaim2(0)
            } else if (Number(result[16][1]) === 431826) {
                nextHour2 = new Date((Number(result[16][2]) * 1000) + (3600 * 8 * 1000))
                Date.now() - (Number(result[16][2]) * 1000) <= (3600 * 8 * 1000) ?
                    setTimeToClaim2_2(nextHour2.toLocaleString('es-CL')) :
                    setTimeToClaim2_2(0)
            }
            setCanCraft2(result[17])
            setCanCraft2_2(result[18])
            setLevelCraftBBQ(Number(result[19][0]))
            setIsCraftBBQ(Number(result[19][1]) > 0)
            const nextObtainBBQ = new Date((Number(result[19][2]) * 1000) + (300 * 1000))
            Date.now() - (Number(result[19][2]) * 1000) <= (300 * 1000) ?
                setTimeToClaimBBQ(nextObtainBBQ.toLocaleString('es-CL')) :
                setTimeToClaimBBQ(0)
            setCanCraftBBQ(result[20])
            setIsCraftPZA(Number(result[21][0]) > 0)
            const nextHourPZA = new Date((Number(result[21][1]) * 1000) + (3600 * 24 * 1000))
            Date.now() - (Number(result[21][1]) * 1000) <= (3600 * 24 * 1000) ?
                setTimeToClaimPZA(nextHourPZA.toLocaleString('es-CL')) :
                setTimeToClaimPZA(0)
            setCanCraftPZA(result[22])
            setIsCraftSIL(Number(result[23][0]) > 0)
            const nextHourSIL = new Date((Number(result[23][1]) * 1000) + (3600 * 2 * 1000))
            Date.now() - (Number(result[23][1]) * 1000) <= (3600 * 2 * 1000) ?
                setTimeToClaimSIL(nextHourSIL.toLocaleString('es-CL')) :
                setTimeToClaimSIL(0)
            setCanCraftSIL(result[24])
            setIsCraftGOLD(Number(result[25][0]) > 0)
            const nextHourGOLD = new Date((Number(result[25][1]) * 1000) + (3600 * 4 * 1000))
            Date.now() - (Number(result[25][1]) * 1000) <= (3600 * 4 * 1000) ?
                setTimeToClaimGOLD(nextHourGOLD.toLocaleString('es-CL')) :
                setTimeToClaimGOLD(0)
            setCanCraftGOLD(result[26])
            setPlutoBalance(ethers.utils.formatUnits(String(result[27]), "gwei"))
            setIsCraftPLUTO(Number(result[28][0]) > 0)
            const nextHourPLUTO = new Date((Number(result[28][1]) * 1000) + (3600 * 2 * 1000))
            Date.now() - (Number(result[28][1]) * 1000) <= (3600 * 2 * 1000) ?
                setTimeToClaimPLUTO(nextHourPLUTO.toLocaleString('es-CL')) :
                setTimeToClaimPLUTO(0)
            setCanCraftPLUTO(result[29])
            setPlatBalance(ethers.utils.formatEther(result[30]))
            setIsCraftPLAT(Number(result[31][0]) > 0)
            const nextHourPLAT = new Date((Number(result[31][1]) * 1000) + (3600 * 8 * 1000))
            Date.now() - (Number(result[31][1]) * 1000) <= (3600 * 8 * 1000) ?
                setTimeToClaimPLAT(nextHourPLAT.toLocaleString('es-CL')) :
                setTimeToClaimPLAT(0)
            setCanCraftPLAT(result[32])
            setVabagBalance(ethers.utils.formatEther(result[33]))
            setSwarBalance(ethers.utils.formatEther(result[34]))
            setIsCraftSWAR(Number(result[35][0]) > 0)
            const nextHourSWAR = new Date((Number(result[35][1]) * 1000) + (3600 * 8 * 1000))
            Date.now() - (Number(result[35][1]) * 1000) <= (3600 * 8 * 1000) ?
                setTimeToClaimSWAR(nextHourSWAR.toLocaleString('es-CL')) :
                setTimeToClaimSWAR(0)
            setCanCraftSWAR(result[36])
            setAngbBalance(ethers.utils.formatEther(result[37]))
            setStarBalance(ethers.utils.formatEther(result[38]))
            setIsCraftSTAR(Number(result[39][0]) > 0)
            const nextHourSTAR = new Date((Number(result[39][1]) * 1000) + (3600 * 72 * 1000))
            Date.now() - (Number(result[39][1]) * 1000) <= (3600 * 72 * 1000) ?
                setTimeToClaimSTAR(nextHourSTAR.toLocaleString('es-CL')) :
                setTimeToClaimSTAR(0)
            setCanCraftSTAR(result[40])
            setTmBalance(ethers.utils.formatEther(result[41]))
            setGearBalance(ethers.utils.formatEther(result[42]))
            setIiBalance(ethers.utils.formatEther(result[43]))
            setIsCraftII(Number(result[44][0]) > 0)
            setCraftIImachine(Number(result[44][0]))
            let nextHourII = 0
            if (Number(result[44][0]) === 1) {
                nextHourII = new Date((Number(result[44][1]) * 1000) + (60 * 30 * 1000))
                Date.now() - (Number(result[44][1]) * 1000) <= (60 * 30 * 1000) ?
                    setTimeToClaimII(nextHourII.toLocaleString('es-CL')) :
                    setTimeToClaimII(0)
            } else if (Number(result[44][0]) === 2) {
                nextHourII = new Date((Number(result[44][1]) * 1000) + (60 * 1440 * 1000))
                Date.now() - (Number(result[44][1]) * 1000) <= (60 * 1440 * 1000) ?
                    setTimeToClaimII2(nextHourII.toLocaleString('es-CL')) :
                    setTimeToClaimII2(0)
            }
            setCanCraftII(result[45])
            setCanCraftII2(result[46])
            setEeBalance(ethers.utils.formatEther(result[47]))
            setIsCraftPLAT2(Number(result[48][0]) > 0)
            const nextHourPLAT2 = new Date((Number(result[48][1]) * 1000) + (60 * 15 * 1000))
            Date.now() - (Number(result[48][1]) * 1000) <= (60 * 15 * 1000) ?
                setTimeToClaimPLAT2(nextHourPLAT2.toLocaleString('es-CL')) :
                setTimeToClaimPLAT2(0)
            setCanCraftPLAT2(result[49])
            setJaspBalance(ethers.utils.formatUnits(result[50], 'gwei'))
            setDoijibBalance(ethers.utils.formatEther(result[51]))
            setDoistarBalance(ethers.utils.formatEther(result[52]))
            setFbtcBalance(result[53])
            setX4Balance(ethers.utils.formatEther(result[54]))
            setIsCraftDOISTAR(Number(result[55][0]) > 0)
            const nextHourDOISTAR = new Date((Number(result[55][1]) * 1000) + (60 * 30 * 1000))
            Date.now() - (Number(result[55][1]) * 1000) <= (60 * 30 * 1000) ?
                setTimeToClaimDOISTAR(nextHourDOISTAR.toLocaleString('es-CL')) :
                setTimeToClaimDOISTAR(0)
            setCanCraftDOISTAR(result[56])
            setIsCraftFBTC(Number(result[57][0]) > 0)
            const nextHourFBTC = new Date((Number(result[57][1]) * 1000) + (3600 * 4 * 1000))
            Date.now() - (Number(result[57][1]) * 1000) <= (3600 * 4 * 1000) ?
                setTimeToClaimFBTC(nextHourFBTC.toLocaleString('es-CL')) :
                setTimeToClaimFBTC(0)
            setCanCraftFBTC(result[58])
            setIsCraftX4(Number(result[59][0]) > 0)
            const nextHourX4 = new Date((Number(result[59][1]) * 1000) + (3600 * 8 * 1000))
            Date.now() - (Number(result[59][1]) * 1000) <= (3600 * 8 * 1000) ?
                setTimeToClaimX4(nextHourX4.toLocaleString('es-CL')) :
                setTimeToClaimX4(0)
            setCanCraftX4(result[60])
        })

    }, [config, address, chain, txupdate, erc20Abi, ctunaLabABI, sx31LabABI, bbqLab01ABI, pzaLabABI, cmdao20lab01ABI, kycABI])

    const craft1Handle = async () => {
        setisLoading(true)
        try {
            const tunaAllow = await readContract(config, {
                address: tunaField,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, ctunaLab],
            })
            if (Number(ethers.utils.formatEther(tunaAllow)) < 50) {
                let { request } = await simulateContract(config, {
                    address: tunaField,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [ctunaLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, ctunaLab],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 50) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [ctunaLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: ctunaLab,
                abi: ctunaLabABI,
                functionName: 'craft',
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
    const claim1Handle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: ctunaLab,
                abi: ctunaLabABI,
                functionName: 'claim',
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

    const craft2Handle = async (_machine) => {
        setisLoading(true)
        try {
            const miceAllow = await readContract(config, {
                address: fieldMice,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, sx31Lab],
            })
            if (Number(ethers.utils.formatEther(miceAllow)) < 500) {
                let { request } = await simulateContract(config, {
                    address: fieldMice,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [sx31Lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, sx31Lab],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 100) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [sx31Lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: sx31Lab,
                abi: sx31LabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtain2Handle = async (_machine) => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: sx31Lab,
                abi: sx31LabABI,
                functionName: 'obtain',
                args: [_machine],
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

    const craftBBQHandle = async (_machine) => {
        setisLoading(true)
        try {
            const woodAllow = await readContract(config, {
                address: woodField,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, bbqLab],
            })
            if (Number(ethers.utils.formatEther(woodAllow)) < 100) {
                let { request } = await simulateContract(config, {
                    address: woodField,
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
                address: bbqLab,
                abi: bbqLab01ABI,
                functionName: 'obtain',
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
    const upgradeBBQHandle = async (_level) => {
        setisLoading(true)
        try {
            const woodAllow = await readContract(config, {
                address: woodField,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, bbqLab],
            })
            let woodUsage = 0
            if (_level === 1) {
                woodUsage = 6000
            } else if (_level === 2) {
                woodUsage = 60000
            } else if (_level === 3) {
                woodUsage = 600000
            }
            if (Number(ethers.utils.formatEther(woodAllow)) < woodUsage) {
                let { request } = await simulateContract(config, {
                    address: woodField,
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
                functionName: 'upgrade',
                args: [_level]
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

    const craftPzaHandle = async (_index) => {
        setisLoading(true)
        try {
            const bbqAllow = await readContract(config, {
                address: bbqToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, pzaLab],
            })
            if (Number(ethers.utils.formatEther(bbqAllow)) < 10000) {
                let { request } = await simulateContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [pzaLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const stOPTAllow = await readContract(config, {
                address: stOPT,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, pzaLab],
            })
            if (Number(ethers.utils.formatEther(stOPTAllow)) < 1) {
                let { request } = await simulateContract(config, {
                    address: stOPT,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [pzaLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: pzaLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_index],
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
    const obtainPzaHandle = async (_index) => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: pzaLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftSILHandle = async (_machine) => {
        setisLoading(true)
        try {
            const cuAllow = await readContract(config, {
                address: cuToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, silLab],
            })
            if (Number(ethers.utils.formatEther(cuAllow)) < 150000) {
                let { request } = await simulateContract(config, {
                    address: cuToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [silLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, silLab],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 1) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [silLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: silLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainSILHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: silLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftGOLDHandle = async (_machine) => {
        setisLoading(true)
        try {
            const silAllow = await readContract(config, {
                address: silToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, goldLab],
            })
            if (Number(ethers.utils.formatEther(silAllow)) < 10000) {
                let { request } = await simulateContract(config, {
                    address: silToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [goldLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const sx31Allow = await readContract(config, {
                address: sx31Lab,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, goldLab],
            })
            if (Number(ethers.utils.formatEther(sx31Allow)) < 5) {
                let { request } = await simulateContract(config, {
                    address: sx31Lab,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [goldLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: goldLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainGOLDHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: goldLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftPLATHandle = async (_machine) => {
        setisLoading(true)
        try {
            const goldAllow = await readContract(config, {
                address: goldToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, platLab],
            })
            if (Number(ethers.utils.formatEther(goldAllow)) < 300) {
                let { request } = await simulateContract(config, {
                    address: goldToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [platLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const ctunaAllow = await readContract(config, {
                address: ctunaLab,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, platLab],
            })
            if (Number(ethers.utils.formatEther(ctunaAllow)) < 5) {
                let { request } = await simulateContract(config, {
                    address: ctunaLab,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [platLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: platLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainPLATHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: platLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftPLAT2Handle = async (_machine) => {
        setisLoading(true)
        try {
            const eeAllow = await readContract(config, {
                address: dunEE,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, platLab2],
            })
            if (Number(ethers.utils.formatEther(eeAllow)) < 888) {
                let { request } = await simulateContract(config, {
                    address: dunEE,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [platLab2, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, platLab2],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 1) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [platLab2, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: platLab2,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainPLAT2Handle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: platLab2,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftPLUTOHandle = async (_machine) => {
        setisLoading(true)
        try {
            const jaspAllow = await readContract(config, {
                address: dunJasper,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, plutoLab],
            })
            if (Number(ethers.utils.formatUnits(jaspAllow, 'gwei')) < 100) {
                let { request } = await simulateContract(config, {
                    address: dunJasper,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [plutoLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, plutoLab],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 5) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [plutoLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: plutoLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainPLUTOHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: plutoLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftDOISTARHandle = async (_machine) => {
        setisLoading(true)
        try {
            const doijibAllow = await readContract(config, {
                address: doijibToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, doistarLab],
            })
            if (Number(ethers.utils.formatEther(doijibAllow)) < 100000) {
                let { request } = await simulateContract(config, {
                    address: doijibToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [doistarLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const starAllow = await readContract(config, {
                address: starLab,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, doistarLab],
            })
            if (Number(ethers.utils.formatEther(starAllow)) < 1) {
                let { request } = await simulateContract(config, {
                    address: starLab,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [doistarLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: doistarLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainDOISTARHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: doistarLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftFBTCHandle = async (_machine) => {
        setisLoading(true)
        try {
            const plutoAllow = await readContract(config, {
                address: plutoToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, fbtcLab],
            })
            if (Number(ethers.utils.formatUnits(plutoAllow, 'gwei')) < 20) {
                let { request } = await simulateContract(config, {
                    address: plutoToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [fbtcLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const doistarAllow = await readContract(config, {
                address: doistarToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, fbtcLab],
            })
            if (Number(ethers.utils.formatEther(doistarAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: doistarToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [fbtcLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: fbtcLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainFBTCHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: fbtcLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftX4Handle = async (_machine) => {
        setisLoading(true)
        try {
            const fbtcAllow = await readContract(config, {
                address: fbtcToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, x4Lab],
            })
            if (Number(fbtcAllow) < 10) {
                let { request } = await simulateContract(config, {
                    address: fbtcToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [x4Lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const platAllow = await readContract(config, {
                address: platToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, x4Lab],
            })
            if (Number(ethers.utils.formatEther(platAllow)) < 1000) {
                let { request } = await simulateContract(config, {
                    address: platToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [x4Lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: x4Lab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainX4Handle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: x4Lab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftSWARHandle = async (_machine) => {
        setisLoading(true)
        try {
            const vabagAllow = await readContract(config, {
                address: vabag,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, swarLab],
            })
            if (Number(ethers.utils.formatEther(vabagAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: vabag,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [swarLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, swarLab],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [swarLab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: swarLab,
                abi: pzaLabABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainSWARHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: swarLab,
                abi: pzaLabABI,
                functionName: 'obtain',
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

    const craftCMDAO20Lab01Handle = async (_index, _machine) => {
        setisLoading(true)
        let lab = '0x0000000000000000000000000000000000000000'
        let res1 = '0x0000000000000000000000000000000000000000'
        let res1Amount = 0
        let curr = '0x0000000000000000000000000000000000000000'
        let currAmount = 0
        if (_index === 1) {
            lab = starLab
            res1 = dunANGB
            res1Amount = 40
            curr = cmjToken
            currAmount = 10
        } else if (_index === 2 && _machine === 1) {
            lab = iiLab
            res1 = gearField
            res1Amount = 888
            curr = taomeme
            currAmount = 8
        } else if (_index === 2 && _machine === 2) {
            lab = iiLab
            res1 = gearField
            res1Amount = 88888
            curr = taomeme
            currAmount = 128
        }
        try {
            const res1Allow = await readContract(config, {
                address: res1,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, lab],
            })
            if (Number(ethers.utils.formatEther(res1Allow)) < res1Amount) {
                let { request } = await simulateContract(config, {
                    address: res1,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const currAllow = await readContract(config, {
                address: curr,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, lab],
            })
            if (Number(ethers.utils.formatEther(currAllow)) < currAmount) {
                let { request } = await simulateContract(config, {
                    address: curr,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [lab, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: lab,
                abi: cmdao20lab01ABI,
                functionName: 'craft',
                args: [_machine],
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
    const obtainCMDAO20Lab01Handle = async (_index) => {
        let lab = '0x0000000000000000000000000000000000000000'
        if (_index === 1) {
            lab = starLab
        } else if (_index === 2) {
            lab = iiLab
        }
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: lab,
                abi: cmdao20lab01ABI,
                functionName: 'obtain',
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
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner" style={{flexDirection: "column"}}>
                    <div style={{fontSize: "75px", width: "fit-content"}} className="pixel">Labs</div>
                    <div style={{fontSize: "17px", width: "fit-content", marginTop: "30px", letterSpacing: "1px"}} className="pixel">Craft, Await and Obtain!</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="./background/labslogo.png" width="150" alt="Labs_Logo" />
                </div>
            </div>

            {address !== null && chain !== undefined && chain.id !== 8899 ?
                <div style={{zIndex: "999"}} className="centermodal">
                    <div className="wrapper">
                        <div className="pixel" style={{border: "1px solid rgb(70, 55, 169)", boxShadow: "6px 6px 0 #00000040", width: "500px", height: "fit-content", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", fontSize: "40px", letterSpacing: "3px"}}>
                        <div style={{width: "90%", textAlign: "left", fontSize: "36px"}} className="emp">MISMATCH CHAIN!</div>
                        <div style={{marginTop: "20px", width: "90%", textAlign: "left", fontSize: "14px"}}>Please switch your network to JIBCHAIN L1.</div>
                        <div className="button" style={{marginTop: "40px", width: "50%"}} onClick={() => open({ view: 'Networks' })}>SWITCH NETWORK</div>
                        <div className="button" style={{marginTop: "10px", width: "50%", background: "gray"}} onClick={() => {callMode(0); navigate('/');}}>BACK TO HOME</div>
                        </div>
                    </div>
                </div> :
                <div className="collection">
                    <div style={{textAlign: "left", height: "fit-content", width: "90%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}} className="pixel">
                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Cryptocurrency</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img 
                                    src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png"
                                    width="20"
                                    alt="$CMJ"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: cmjToken,
                                                    symbol: 'CMJ',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(cmjBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img 
                                    src="/tokens/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm.png"
                                    width="20"
                                    alt="$JTAO"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: taomeme,
                                                    symbol: 'JTAO',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(tmBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">CommuDAO Resources</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4.png"
                                    width="20"
                                    alt="$WOOD"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: woodField,
                                                    symbol: 'WOOD',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(woodBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreibtp4almzmdovhvygxeyykw5fa6pqe76cbdum4quispehlddqgp2e.png"
                                    width="20"
                                    alt="$stOPT"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: stOPT,
                                                    symbol: 'stOPT',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreibtp4almzmdovhvygxeyykw5fa6pqe76cbdum4quispehlddqgp2e.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(stOPTBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq.png"
                                    width="20"
                                    alt="$CU"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: cuToken,
                                                    symbol: 'CU',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(copperBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy.png"
                                    width="20"
                                    alt="$JASP"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunJasper,
                                                    symbol: 'JASP',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(jaspBalance).toLocaleString('en-US', {maximumFractionDigits:0})} GWEI</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">Partner Resources</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png"
                                    width="20"
                                    alt="$TUNA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: tunaField,
                                                    symbol: 'TUNA',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(tunaBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreidcakmgzpqytuzlvvok72r2hg2n5tqb25jfwecymelylaysdzkd6i.png"
                                    width="20"
                                    alt="$MICE"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: fieldMice,
                                                    symbol: 'MICE',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreidcakmgzpqytuzlvvok72r2hg2n5tqb25jfwecymelylaysdzkd6i.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(miceBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreia6rbj3o47qbw7o3vqd6ogylwjcjay5phsve5pixfvmw7nexwx3re.png"
                                    width="20"
                                    alt="$VABAG"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: vabag,
                                                    symbol: 'VABAG',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreia6rbj3o47qbw7o3vqd6ogylwjcjay5phsve5pixfvmw7nexwx3re.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(vabagBalance).toLocaleString('en-US', {maximumFractionDigits:4})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m.png"
                                    width="20"
                                    alt="$ANGB"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunANGB,
                                                    symbol: 'ANGB',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(angbBalance).toLocaleString('en-US', {maximumFractionDigits:4})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4.png"
                                    width="20"
                                    alt="$GEAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: gearField,
                                                    symbol: 'GEAR',
                                                    decimals: 18,
                                                    image: '/tokens/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(gearBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi.png"
                                    width="20"
                                    alt="$DOIJIB"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: doijibToken,
                                                    symbol: 'DOIJIB',
                                                    decimals: 18,
                                                    image: '/tokens/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(doijibBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">CommuDAO Craft Products</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq.png"
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
                                                    image: '/tokens/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(bbqBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu.png"
                                    width="20"
                                    alt="$PZA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: pzaLab,
                                                    symbol: 'PZA',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(pzaBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde.png"
                                    width="20"
                                    alt="$SIL"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: silToken,
                                                    symbol: 'SIL',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(silverBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm.png"
                                    width="20"
                                    alt="$GOLD"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: goldToken,
                                                    symbol: 'GOLD',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(goldBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa.png"
                                    width="20"
                                    alt="$PLAT"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: platToken,
                                                    symbol: 'PLAT',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(platBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw.png"
                                    width="20"
                                    alt="$PLUTO"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: plutoToken,
                                                    symbol: 'PLUTO',
                                                    decimals: 18,
                                                    image: '/tokens/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(plutoBalance).toLocaleString('en-US', {maximumFractionDigits:0})} GWEI</div>
                            </div>
                        </div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC.png"
                                    width="20"
                                    alt="$F.BTC"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: fbtcToken,
                                                    symbol: 'F.BTC',
                                                    decimals: 18,
                                                    image: '/tokens/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(fbtcBalance).toLocaleString('en-US', {maximumFractionDigits:0})} SAT</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/Qma5JyeNz8ME6H1XFxJCF4HmduDSC8mqLqmUs3SaMJbwzh.png"
                                    width="20"
                                    alt="$X4"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: x4Token,
                                                    symbol: 'X4',
                                                    decimals: 18,
                                                    image: '/tokens/Qma5JyeNz8ME6H1XFxJCF4HmduDSC8mqLqmUs3SaMJbwzh.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(x4Balance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                        </div>
                    
                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">Partner Craft Products</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i.png"
                                    width="20"
                                    alt="$CTUNA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: ctunaLab,
                                                    symbol: 'CTUNA',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(ctunaBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4.png"
                                    width="20"
                                    alt="$SX31"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: sx31Lab,
                                                    symbol: 'SX31',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(sx31Balance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi.png"
                                    width="20"
                                    alt="$SWAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: swarLab,
                                                    symbol: 'SWAR',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(swarBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafybeideve73vg6mtnwzjjmrol66idxoe3orfxrjbdairhwbumyj3a46eu.png"
                                    width="20"
                                    alt="$STAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: starLab,
                                                    symbol: 'AP-STAR',
                                                    decimals: 18,
                                                    image: '/tokens/bafybeideve73vg6mtnwzjjmrol66idxoe3orfxrjbdairhwbumyj3a46eu.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(starBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q.png"
                                    width="20"
                                    alt="$II"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: iiLab,
                                                    symbol: 'TDM - II',
                                                    decimals: 18,
                                                    image: '/tokens/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(iiBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm.png"
                                    width="20"
                                    alt="$EE"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunEE,
                                                    symbol: 'TDM-EE',
                                                    decimals: 18,
                                                    image: '/tokens/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(eeBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                        </div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/QmVpWGEYVs1J27STXuFUVScpPSrJtRKHBjzWNADerykPEJ.png"
                                    width="20"
                                    alt="$DOISTAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: doistarToken,
                                                    symbol: 'DOISTAR',
                                                    decimals: 18,
                                                    image: '/tokens/QmVpWGEYVs1J27STXuFUVScpPSrJtRKHBjzWNADerykPEJ.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(doistarBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                        </div>

                        <div style={{marginTop: "40px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">CommuDAO Labs & Factories</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                {levelCraftBBQ >= 0 ? <div style={{position: "absolute", top: 15, right: 15, padding: "10px 20px", letterSpacing: 1, background: "transparent", border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="bold">LEVEL {levelCraftBBQ}</div> : <></>}
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    {isCraftBBQ !== null || levelCraftBBQ < 4 ? <img src="/elements/BBQ_factory01_lv0.png" width="170" alt="$BBQ_Factory_lv0"/> : <></>}
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4.png" height="18" alt="$WOOD"/>
                                        <div style={{margin: "0 5px"}}>100</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" height="18" alt="$JBC"/>
                                        <div style={{margin: "0 5px"}}>0.01</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq.png" height="18" alt="$BBQ"/>
                                        <div style={{margin: "0 5px"}}>
                                            {isCraftBBQ !== null ?
                                                <>
                                                    {levelCraftBBQ === 0 ? "5" : ""}
                                                    {levelCraftBBQ === 1 ? "10" : ""}
                                                    {levelCraftBBQ === 2 ? "20" : ""}
                                                    {levelCraftBBQ === 3 ? "40" : ""}
                                                </> :
                                                "..."
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>5 minutes</div>
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
                                                        <img src="/tokens/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4.png" height="18" alt="$WOOD"/>
                                                        <div style={{margin: "0 5px"}}>
                                                            {isCraftBBQ !== null ?
                                                                <>
                                                                    {levelCraftBBQ === 0 ? "6,000" : ""}
                                                                    {levelCraftBBQ === 1 ? "60,000" : ""}
                                                                    {levelCraftBBQ === 2 ? "600,000" : ""}
                                                                    {levelCraftBBQ === 3 ? "Upgradable soon!" : ""}
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
                                                        {(levelCraftBBQ === 0 && woodBalance >= 6000) || (levelCraftBBQ === 1 && woodBalance >= 60000) || (levelCraftBBQ === 2 && woodBalance >= 600000) ?
                                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "100px", borderRadius: "12px", padding: "15px"}} className="pixel button" onClick={() => upgradeBBQHandle(levelCraftBBQ + 1)}>UPGRADE</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "100px", borderRadius: "12px", padding: "15px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">UPGRADE</div>
                                                        }
                                                    </div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Barbeque</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    <img src="/elements/QmXQdWZs4VTcbUFJCv42onZCqXjhYJ4S1ek9fAZGfbeVSi.png" width="200" alt="Pizza_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq.png" height="18" alt="$BBQ"/>
                                        <div style={{margin: "0 5px"}}>10,000</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreibtp4almzmdovhvygxeyykw5fa6pqe76cbdum4quispehlddqgp2e.png" height="18" alt="$stOPT"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu.png" height="18" alt="$PZA"/>
                                        <div style={{margin: "0 5px"}}>500</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>24 hour</div>
                                </div>
                                {isCraftPZA ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimPZA === 0 ? "now" : timetoClaimPZA}</div>
                                        </div>
                                        {timetoClaimPZA === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtainPzaHandle(1)}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftPZA !== null ?
                                                    <>
                                                        {canCraftPZA ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftPzaHandle(1)}>Craft Pizza</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Pizza</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    <img src="/elements/QmdpfkSTFj8BY8f6RjtLzp4e1P1eF76zWo9qngx9FPmogv.png" width="210" alt="$SIL_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq.png" height="18" alt="$CU"/>
                                        <div style={{margin: "0 5px"}}>150,000</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde.png" height="18" alt="$SIL"/>
                                        <div style={{margin: "0 5px"}}>5,000</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>2 hour</div>
                                </div>
                                {isCraftSIL ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimSIL === 0 ? "now" : timetoClaimSIL}</div>
                                        </div>
                                        {timetoClaimSIL === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainSILHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftSIL !== null ?
                                                    <>
                                                        {canCraftSIL ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftSILHandle(1)}>Craft Silver</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Silver</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>

                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible"}}>
                                    <img src="/elements/QmWhS1SzApFMZA9DGYyv6BcW48d8EEn97dnHmfs7cCNRLM.png" width="220" alt="$GOLD_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde.png" height="18" alt="$SIL"/>
                                        <div style={{margin: "0 5px"}}>10,000</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4.png" height="18" alt="$SX31"/>
                                        <div style={{margin: "0 5px"}}>5</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm.png" height="18" alt="$GOLD"/>
                                        <div style={{margin: "0 5px"}}>500</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>4 hour</div>
                                </div>
                                {isCraftGOLD ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimGOLD === 0 ? "now" : timetoClaimGOLD}</div>
                                        </div>
                                        {timetoClaimGOLD === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainGOLDHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftGOLD !== null ?
                                                    <>
                                                        {canCraftGOLD ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftGOLDHandle(1)}>Craft Gold</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Gold</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible"}}>
                                    <img src="/elements/QmXuWRk4JQuepXzEM5N2f64StpwpypfEBtVzfjRqmHivUE.png" width="230" alt="$PLAT_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm.png" height="18" alt="$GOLD"/>
                                        <div style={{margin: "0 5px"}}>300</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i.png" height="18" alt="$CTUNA"/>
                                        <div style={{margin: "0 5px"}}>5</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa.png" height="18" alt="$PLAT"/>
                                        <div style={{margin: "0 5px"}}>100</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>8 hour</div>
                                </div>
                                {isCraftPLAT ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimPLAT === 0 ? "now" : timetoClaimPLAT}</div>
                                        </div>
                                        {timetoClaimPLAT === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainPLATHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftPLAT !== null ?
                                                    <>
                                                        {canCraftPLAT ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftPLATHandle(1)}>Craft Platinum</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Platinum</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible"}}>
                                    <img src="/elements/QmXEZM8Pm1puJwoxRzTBeeuxtyb81XJVL1A47mDEEtYpoG.png" width="230" alt="$PLUTO_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy.png" height="18" alt="$JASP"/>
                                        <div style={{margin: "0 5px"}}>100 GWEI</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>5</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw.png" height="18" alt="$PLUTO"/>
                                        <div style={{margin: "0 5px"}}>5 GWEI</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>2 hour</div>
                                </div>
                                {isCraftPLUTO ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimPLUTO === 0 ? "now" : timetoClaimPLUTO}</div>
                                        </div>
                                        {timetoClaimPLUTO === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainPLUTOHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftPLUTO !== null ?
                                                    <>
                                                        {canCraftPLUTO ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftPLUTOHandle(1)}>Craft Plutonium</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Plutonium</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>

                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible"}}>
                                    <img src="/elements/QmctFaWmze1R6rKCFJkGBS6zBeABX5X6r3Nuv9M46AvJxr.png" width="200" alt="$F.BTC_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw.png" height="18" alt="$PLUTO"/>
                                        <div style={{margin: "0 5px"}}>20 GWEI</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/QmVpWGEYVs1J27STXuFUVScpPSrJtRKHBjzWNADerykPEJ.png" height="18" alt="$DOISTAR"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC.png" height="18" alt="$F.BTC"/>
                                        <div style={{margin: "0 5px"}}>1 SAT</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>4 hour</div>
                                </div>
                                {isCraftFBTC ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimFBTC === 0 ? "now" : timetoClaimFBTC}</div>
                                        </div>
                                        {timetoClaimFBTC === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainFBTCHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftFBTC !== null ?
                                                    <>
                                                        {canCraftFBTC ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftFBTCHandle(1)}>Craft Fake Bitcoin</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Fake Bitcoin</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px 10px 80px 10px"}}>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible"}}>
                                    <img src="/elements/QmReQu734pS2Dt474RBME1LYUec2f2XgE2EDWAKCeX5RJg.png" width="220" alt="$X4_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC.png" height="18" alt="$F.BTC"/>
                                        <div style={{margin: "0 5px"}}>10 SAT</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa.png" height="18" alt="$PLATINUM"/>
                                        <div style={{margin: "0 5px"}}>1,000</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/Qma5JyeNz8ME6H1XFxJCF4HmduDSC8mqLqmUs3SaMJbwzh.png" height="18" alt="$X4"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>8 hour</div>
                                </div>
                                {isCraftX4 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimX4 === 0 ? "now" : timetoClaimX4}</div>
                                        </div>
                                        {timetoClaimX4 === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainX4Handle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftX4 !== null ?
                                                    <>
                                                        {canCraftX4 ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftX4Handle(1)}>Craft X4</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft X4</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                        
                        <div style={{marginTop: "0px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Partner Labs & Factories</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center"}} className="bold">
                                    <img src="/maps/bafybeifgqrnqujzsozg56l4wfvqwxgf72kgjjwtwq6aedeywwfmvlg7on4.png" width="30px" alt="CM" />
                                    <div className='light' style={{marginLeft: "10px"}}>CM Digital</div>
                                </div>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    <img src="/elements/ctunafactory.png" width="200" alt="$CTUNA_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" height="18" alt="$TUNA"/>
                                        <div style={{margin: "0 5px"}}>50</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i.png" height="18" alt="$CTUNA"/>
                                        <div style={{margin: "0 5px"}}>50</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>1 hour</div>
                                </div>
                                {isCraft1 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaim1 === 0 ? "now" : timetoClaim1}</div>
                                        </div>
                                        {timetoClaim1 === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={claim1Handle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraft1 !== null ?
                                                    <>
                                                        {canCraft1 ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={craft1Handle}>Craft Canned Tuna</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Canned Tuna</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center"}} className="bold">
                                    <img src="/maps/bafybeifgqrnqujzsozg56l4wfvqwxgf72kgjjwtwq6aedeywwfmvlg7on4.png" width="30px" alt="CM" />
                                    <div className='light' style={{marginLeft: "10px"}}>CM Digital</div>
                                </div>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                    <img src="/elements/sx31factory.png" width="200" alt="$SX31_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidcakmgzpqytuzlvvok72r2hg2n5tqb25jfwecymelylaysdzkd6i.png" height="18" alt="$MICE"/>
                                        <div style={{margin: "0 5px"}}>50</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>9</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4.png" height="18" alt="$SX31"/>
                                        <div style={{margin: "0 5px"}}>50</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>1 hour</div>
                                </div>
                                {isCraft2 && craft2machine === 1 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaim2 === 0 ? "now" : timetoClaim2}</div>
                                        </div>
                                        {timetoClaim2 === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtain2Handle(1)}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraft2 === false ?
                                                    <>
                                                        {canCraft2 ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craft2Handle(1)}>Craft Sphinx31</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Sphinx31</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeifgqrnqujzsozg56l4wfvqwxgf72kgjjwtwq6aedeywwfmvlg7on4.png" width="30px" alt="CM" />
                                    <div className='light' style={{marginLeft: "10px"}}>CM Digital</div>
                                </div>
                                <div style={{width: "200px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 2}}>
                                    <img src="/elements/QmZmfbTakZsWQhZP7achSgqUJjqyajrziTq8YyNVndtuQ1.png" width="220" alt="Large_SX31_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidcakmgzpqytuzlvvok72r2hg2n5tqb25jfwecymelylaysdzkd6i.png" height="18" alt="$MICE"/>
                                        <div style={{margin: "0 5px"}}>500</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>90</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4.png" height="18" alt="$SX31"/>
                                        <div style={{margin: "0 5px"}}>500</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>8 hour</div>
                                </div>
                                {isKYC ?
                                    <>
                                    {isCraft2 && craft2machine === 431826 ?
                                        <>
                                            <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                                <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                                <div>{timetoClaim2_2 === 0 ? "now" : timetoClaim2_2}</div>
                                            </div>
                                            {timetoClaim2_2 === 0 ?
                                                <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtain2Handle(431826)}>Obtain</div> :
                                                <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                            }
                                        </> :
                                        <>
                                            {isCraft2 === false ?
                                                <>
                                                    {canCraft2_2 ?
                                                        <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craft2Handle(431826)}>Craft Sphinx31</div> :
                                                        <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                    }
                                                </> :
                                                <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Sphinx31</div>
                                            }
                                        </>
                                    }
                                    </> :
                                    <div style={{display: "flex", justifyContent: "center", width: "195px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Reserved for Dionysus</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4.png" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/bafybeiaetddgerc54omjenjo65653ez37uezi4lgib64uc3uwsc522lcx4.png" width="220" alt="$SW_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreia6rbj3o47qbw7o3vqd6ogylwjcjay5phsve5pixfvmw7nexwx3re.png" height="18" alt="$VABAG"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi.png" height="18" alt="$SWAR"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>8 hour</div>
                                </div>
                                {isCraftSWAR ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimSWAR === 0 ? "now" : timetoClaimSWAR}</div>
                                        </div>
                                        {timetoClaimSWAR === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainSWARHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftSWAR !== null ?
                                                    <>
                                                        {canCraftSWAR ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftSWARHandle(1)}>Craft Supply War</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Supply War</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4.png" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/bafybeib5uqywe3cpzmxofduwgii7ooawzcyoe62jys34rltqprxes5uhja.png" width="250" alt="$STAR_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m.png" height="18" alt="$ANGB"/>
                                        <div style={{margin: "0 5px"}}>40</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafybeideve73vg6mtnwzjjmrol66idxoe3orfxrjbdairhwbumyj3a46eu.png" height="18" alt="$STAR"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>72 hour</div>
                                </div>
                                {isCraftSTAR ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimSTAR === 0 ? "now" : timetoClaimSTAR}</div>
                                        </div>
                                        {timetoClaimSTAR === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtainCMDAO20Lab01Handle(1)}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftSTAR !== null ?
                                                    <>
                                                        {canCraftSTAR ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftCMDAO20Lab01Handle(1, 1)}>Craft AP-STAR</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft AP-STAR</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus & DOIJIB</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/QmYdNTzX1mGY2Wuk5DVv8M9vJEQKR9MFxYGmcrx5S9GZP8.png" width="220" alt="$DOISTAR_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafybeideve73vg6mtnwzjjmrol66idxoe3orfxrjbdairhwbumyj3a46eu.png" height="18" alt="$STAR"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi.png" height="18" alt="$DOIJIB"/>
                                        <div style={{margin: "0 5px"}}>100,000</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/QmVpWGEYVs1J27STXuFUVScpPSrJtRKHBjzWNADerykPEJ.png" height="18" alt="$DOISTAR"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>30 minutes</div>
                                </div>
                                {isCraftDOISTAR ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimDOISTAR === 0 ? "now" : timetoClaimDOISTAR}</div>
                                        </div>
                                        {timetoClaimDOISTAR === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainDOISTARHandle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftDOISTAR !== null ?
                                                    <>
                                                        {canCraftDOISTAR ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftDOISTARHandle(1)}>Craft Doistar</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Doistar</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>

                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce.png" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>Taodum & Taomeme</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/QmfQhrhSNw5Ldegjeu8vF2wSv432uWesQYe5kyW1cWgntV.png" width="170" alt="$II_Factory"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4.png" height="18" alt="$GEAR"/>
                                        <div style={{margin: "0 5px"}}>888</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm.png" height="18" alt="$JTAO"/>
                                        <div style={{margin: "0 5px"}}>8</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q.png" height="18" alt="$II"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>30 minutes</div>
                                </div>
                                {isCraftII && craftIImachine === 1 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimII === 0 ? "now" : timetoClaimII}</div>
                                        </div>
                                        {timetoClaimII === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtainCMDAO20Lab01Handle(2)}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftII !== null ?
                                                    <>
                                                        {canCraftII ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftCMDAO20Lab01Handle(2, 1)}>Craft TDM-II</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft TDM-II</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px 10px 80px 10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce.png" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>Taodum & Taomeme</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/bafybeiabwndglvszkrvnpfgqfxuidtqa22zxdfkpiivkpvqpjiwe2cxrbu.png" width="210" alt="$II_Factory02"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4.png" height="18" alt="$GEAR"/>
                                        <div style={{margin: "0 5px"}}>88,888</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm.png" height="18" alt="$JTAO"/>
                                        <div style={{margin: "0 5px"}}>128</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q.png" height="18" alt="$II"/>
                                        <div style={{margin: "0 5px"}}>8</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>24 hours</div>
                                </div>
                                {isCraftII && craftIImachine === 2 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimII2 === 0 ? "now" : timetoClaimII2}</div>
                                        </div>
                                        {timetoClaimII2 === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => obtainCMDAO20Lab01Handle(2)}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftII !== null ?
                                                    <>
                                                        {canCraftII2 ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftCMDAO20Lab01Handle(2, 2)}>Craft TDM-II</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft TDM-II</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "center", margin: "10px"}}>
                                <div style={{position: "absolute", top: 15, right: 15, padding: "7.5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="/maps/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce.png" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>Taodum & Taomeme</div>
                                </div>
                                <div style={{width: "350px", height: "218.18px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "visible", zIndex: 2}}>
                                    <img src="/elements/bafybeigs7ilnbpesbmxgnucbiqjsiy7dpovhjhkrkl2ubdczzteaqfn62e.png" width="220" alt="$PLAT_Factory02"/>
                                </div>
                                <div style={{marginTop: "30px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm.png" height="18" alt="$EE"/>
                                        <div style={{margin: "0 5px"}}>888</div>
                                        <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                        <img src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" height="18" alt="$CMJ"/>
                                        <div style={{margin: "0 5px"}}>1</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa.png" height="18" alt="$PLAT"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>15 minutes</div>
                                </div>
                                {isCraftPLAT2 ?
                                    <>
                                        <div style={{marginTop: "10px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{timetoClaimPLAT2 === 0 ? "now" : timetoClaimPLAT2}</div>
                                        </div>
                                        {timetoClaimPLAT2 === 0 ?
                                            <div style={{background: "#67BAA7", display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={obtainPLAT2Handle}>Obtain</div> :
                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "10px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain</div>
                                        }
                                    </> :
                                    <>
                                        {address !== null ?
                                            <>
                                                {isCraftPLAT2 !== null ?
                                                    <>
                                                        {canCraftPLAT2 ?
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px"}} className="pixel button" onClick={() => craftPLAT2Handle(1)}>Craft Platinum</div> :
                                                            <div style={{display: "flex", justifyContent: "center", width: "170px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Lack of Raw Mat...</div>
                                                        }
                                                    </> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "170px",marginTop: "40px", borderRadius: "12px", padding: "15px 40px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft Platinum</div>
                                                }
                                            </> :
                                            <div style={{display: "flex", justifyContent: "center", width: "185px", marginTop: "40px", borderRadius: "12px", padding: "15px 40px",  background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Labs
