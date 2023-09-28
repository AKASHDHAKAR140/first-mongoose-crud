const express = require("express");
const router = new express.Router();
const {signup2,signin} = require("../Controllers/usercontroler")
const UserList1 = require("../models/signup2");


//Post Data to
router.post("/signup2",signup2);
router.post("/signin", signin);

// Get Data to
// router.get("/signup2", async (req, res)  => {
//     try {
//         const getMens =  await UserList1.find({});
//         res.send(getMens);
    
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// //Get Special One Data
// router.get("/signup2/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const getMen = await UserList1.findById({_id});
//         res.send(getMen);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// //Patch Special One Data
// router.patch("/mens/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
//             new: true,
//         });
//         res.send(getMen);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// // Delete the data
// router.delete("/mens/:id", async (req, res) => {
//     try {
//         // const _id = req.params.id;
//         const getMen = await MensRanking.findByIdAndDelete(req.params.id);
//         res.send("Successgful Deleted");
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

module.exports = router;
