const {sendContactEmail} = require ('../utils/emailService')
const contactMessage = require ('../models/contactMessage')
const contactController = {
    submitForm: async (req,res)=>{
        try{
            const {name , email , message} = req.body
            if(!name || !email || !message) return res.status(400).json({
                success:false,
                message:'All field is required'
            })
            const newMessage = new contactMessage({name, email , message})
            await newMessage.save()
            const sendEmail = await sendContactEmail({name , email , message})
            res.status(201).json({
                success:true,
                message: sendEmail ? 'Email successfully saved and sent' : 'Email saved but not sent',
                data: {
                    id: newMessage._id,
                    name,
                    email
                  }
            })
        }catch(err){
            res.status.json({
                success:false,
                message:'Internal Server Error'
            })
        }
    },
    getAllMessage: async (req,res)=>{
        try{
            const messages = await contactMessage.find().sort({createdAt:-1})
            res.status(201).json({
                success:true,
                message:messages
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:'Internal Server Error'
            })
        }
    },
    getAllMessageById : async(req,res)=>{
        try{
            const id = req.params.id
            const message = await contactMessage.findById(id)
            if(!message) return res.status(401).json({
                success:false,
                message: 'Message with given id doesnt exist'
            })
            res.status(201).json({
                success:true,
                message
            })
        }catch(err){
            res.status(500).json({
                success:false,
                message:"Internal Server Error"
            })
        }
    },
    deleteMessage : async(req,res)=>{
        try{
            const id = req.params.id
            const messageToDelete = await contactMessage.findByIdAndDelete(id)
            if(!messageToDelete) return res.status(401).json({
                success:false,
                message: 'Message to be deleted is not found'
            })
            res.json(201).json({
                success:true,
                message: "Message Successfully Deleted!!"
            })
        }catch(err) {
            res.status(500).json({
                success:false,
                message: 'Internal Server Error'
            })
        }
    }
}


module.exports = contactController