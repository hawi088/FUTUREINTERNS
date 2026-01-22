const analytics = require('../models/analytics')
const {v4:uuid} = require('uuid')

const analyticsController  = {
    trackPageView: async(req,res)=>{
        try{
            const {page , path} = req.body
            const userAgent = req.headers['user-agent'] || ""
            if(!page || ! path ) return res.status(401).json({
                success:false,
                message:'Page and Path are required'
            })
            let deviceType = 'unknown'
            if(/mobile/i.test(userAgent)) deviceType='mobile'
            else if(/bot|crawler/i.test(userAgent)) deviceType ='bot'
            else if(/tablet/i.test(userAgent)) deviceType = 'tablet'
            else deviceType = 'desktop'

            let browser = 'unknown'
            if(/chrome/i.test(userAgent)) browser='Chrome'
            else if (/safari/i.test(userAgent)) browser = 'Safari'
            else if (/firefox/i.test(userAgent)) browser = 'Firefox'
            else if(/edge/i.test(userAgent)) browser = 'Edge'
            
            const os = "unknown"
            if (/windows/i.test(userAgent)) os= 'Windows';
            else if (/mac os x/i.test(userAgent)) os= 'macOS';
            else if (/linux/i.test(userAgent)) os= 'Linux';
            else if (/android/i.test(userAgent)) os =  'Android';
            else if (/iphone|ipad|ipod/i.test(userAgent)) os = 'iOS';

            const analyticsRecord = new analytics({
                page,
                path,
                ipAddress: req.ip,
                userAgent,
                referrer : req.header['referrer'] || "",
                deviceType,
                browser,

            })
            await analyticsRecord.save()
            res.json(201).status({
                success:true,
                message:'Tracked'
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:"Something went wrong. Tracking failed"
            })
        }
    },
    getStat: async(req,res)=>{
        try{
            const totalViews = await analytics.countDocuments()
            const last24Hours = await analytics.countDocuments({
                timestamp:{$gte: new Date(Date.now()- 24*60*60*1000)}
            })
            const pageStat = await analytics.aggregate([
                {$group:{_id:'$page',count:{$sum:1}}},
                {$sort :{count : -1}}
            ])
            const deviceStat = await analytics.aggregate([
                {$group :{_id:'$deviceType',count:{$sum : 1}}}
            ])
            res.status(201).json({
                success:true,
                data:{
                    totalViews,
                    last24Hours,
                    pageStat,
                    deviceStat,
                    lastUpdated : Date.now()
                }
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:'Something went wrong. Failed to get status'
            })
        }
    }
}

module.exports = analyticsController