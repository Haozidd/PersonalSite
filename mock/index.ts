import mockjs from 'mockjs'
import {nanoid} from "nanoid";
import realSites from './site.json'

let initSites:object[] = []
for (const initSitesKey in realSites) {
    initSites=initSites.concat(realSites[initSitesKey as keyof typeof realSites])
    console.log('@@@',realSites)
}




const oMockSiteList = mockjs.mock({
    'initSites':initSites,
    'sites|8':[{
        title:'@first',
        svg:'src/assets/svg/vite.svg',
        url:'@url'
    }]
})

export default {
    method:'get',
    url:'/mock/site',
    response:({body:{}})=>{
        return{
            code:200,
            msg:'success',
            data:oMockSiteList
        }
    }
}