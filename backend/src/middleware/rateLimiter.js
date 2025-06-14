import rateLimit from "../confiq/upstash.js"

const ratelimiter=async(req,res,next) => {
    try {
        const {success }=await rateLimit.limit("my-rate-limit")
        if(!success ){
            return res.status(429).json({
                message:"Too many request,PLease try again later"
            })
        }
        next()
    } catch (error) {
        console.log("Rate limit error:",error)
    }
    

}

export default ratelimiter