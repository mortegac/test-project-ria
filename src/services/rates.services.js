import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import CONFIG from '../constants/config';

const ENDPOINT_GET_RATES = `${CONFIG.uri_api}/latest?base=${CONFIG.base_currency}&symbols=MXN,AUD,HKD`;
const ENDPOINT_GET_HISTORIC = `${CONFIG.uri_api}/history?`;
const headerSpecific = 
{
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'accept-encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
};
export const getRatesList = async () => {
    try{
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

    } catch (error) {
        return [];
    }  
};

export const getRatesHistoric = async ({start_at, end_at, symbols}) => {
    try {
        
        let { data:{rates} } = await axios.get(`${ENDPOINT_GET_HISTORIC}start_at=${start_at}&end_at=${end_at}&symbols=${symbols}`, headerSpecific);    
        
        let dataRates = [];
        Object.entries(rates).forEach(item => {
            const priceArray = Object.entries(item[1]);
            const obj = {
                date: item[0],
                value: priceArray[0][0],
                price: priceArray[0][1],
            }
            dataRates = [...dataRates, {...obj} ];
        });  
        
        const sortedArray = await _.orderBy(dataRates, (o) => moment(o.date).format("YYYY-MM-DD"), ['asc']);
        
        return [...sortedArray];
    } catch (error) {
        return [];
    }    
};

export default { getRatesList, getRatesHistoric };