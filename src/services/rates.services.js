import axios from 'axios';
import CONFIG from '../constants/config';

const ENDPOINT_GET_RATES = `${CONFIG.uri_api}/latest?base=${CONFIG.base_currency}&symbols=MXN,AUD,HKD`;

export const getRatesList = async () => {
    
    console.log(`--ENDPOINT_GET_RATES: ${ENDPOINT_GET_RATES}`)

    const headerSpecific = 
    {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'accept-encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
    };
    
    let { data:{rates} } = await axios.get(`${ENDPOINT_GET_RATES}`, headerSpecific);    
    
    let dataRates = [];
    Object.entries(rates).forEach(item => {
        const obj = {
            id: item[0],
            value: item[1] 
        }
        dataRates = [...dataRates, {...obj} ];
    });  

    const dataRatesSorted = dataRates
    .sort((a, b) => a.id.localeCompare(b.id, undefined, { caseFirst: "upper" }));

  
    return [...dataRatesSorted];
};


export default { getRatesList };