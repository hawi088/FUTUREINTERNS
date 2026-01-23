import  {useEffect} from react;
const useAnalytics = (pageName)=>{
    useEffect(()=>{
        fetch('http://localhost:5000/api/analytics/track',{
            method:'POST', 
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                page:pageName,
                path:window.location.pathname
            })
        }).catch(err=>console.error('Analytics Error'),err)
    }),[pageName]
}

export default useAnalytics