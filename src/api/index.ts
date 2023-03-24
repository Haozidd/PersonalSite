
import mockServe from "@/api/mockServe";

export const reqMockData =()=>{
    return mockServe.get('/site')
}
