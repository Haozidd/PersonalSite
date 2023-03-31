
import mockServe from "@/api/mockServe";

export const reqMockSites =()=>{
    return mockServe.get('/sites')
}


export const reqMockSearchEngine =()=>{
    return mockServe.get('/searchEngine')
}
