const express=require('express');
const router=express.Router();

router.post('/auth',(req,res)=>{
    const { username, password } = req.body;
    if (username && password) {
        res.status(200).json({
            success:true,
            message: "Authentication successful" ,
            user:{
                name : "Paras Waghela",
                refCode : "Paras077",
                TotalDonationsRaised: 1000,
            }
        });
    } else {
        res.status(400).json({ message: "Authentication failed" });
    }
})

router.get('/getLeaderBoardInfo',(req,res)=>{
    const leaderBoardData = [
        { name: "Paras Waghela", refCode: "Paras077", TotalDonationsRaised: 1000 },
        { name: "John Doe", refCode: "John123", TotalDonationsRaised: 800 },
        { name: "Jane Smith", refCode: "Jane456", TotalDonationsRaised: 600 },
        { name: "Alice Johnson", refCode: "Alice789", TotalDonationsRaised: 500 },
        { name: "Bob Brown", refCode: "Bob101", TotalDonationsRaised: 300 }
    ];
    res.status(200).json(leaderBoardData);
})

module.exports=router;