import mockjs from 'mockjs'
import {nanoid} from "nanoid";
import initSites from './site.json'




const oMockSiteList = mockjs.mock({
    'initSites':initSites.documentation,
    'sites|20':[{
        name:'@first',
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