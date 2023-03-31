import mockjs from 'mockjs'
import realSites from './site.json'
import searchEngines from './searchEngine.json'
let initSites: object[] = []
for (const initSitesKey in realSites) {
    initSites = initSites.concat(realSites[initSitesKey as keyof typeof realSites])
}

const oMockSiteList = mockjs.mock({
    'initSites': initSites,
    'sites|8': [{
        title: '@first',
        svg: 'src/assets/svg/default.svg',
        url: '@url'
    }]
})
const oSiteResponse = {
    url: '/mock/sites',
    response: ({body: {}}) => ({
        code: 200,
        msg: 'success',
        data: oMockSiteList
    })
}

const oMockSearchEnginList = mockjs.mock({...searchEngines})
const oSearchEngineResponse = {
    url: '/mock/searchEngine',
    response:{
        ...oMockSearchEnginList
    }
}
const exportArray = [oSiteResponse,oSearchEngineResponse]

export default exportArray