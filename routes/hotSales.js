const express = require("express");
const HotSales = require("../models/hotSales");
const auth = require("../auth");
const router = express.Router();

router.route("/")
    .get((req, res, next) => {
        HotSales.find()
            .populate({
                path: 'product'
            })
            .then((hotSales) => {
                if (hotSales == null) throw new Error("No feedbacks available.");
                res.json(hotSales);
            }).catch(next)
    })
    .post((req, res, next) => {
        let hotSale = new HotSales(req.body);
        hotSale.save()
            .then((hotSales) => {
                res.json(hotSales);
            }).catch(next)
    })

    .put((req, res, next) => {
        res.statusCode = 405;
        res.json({ message: "Method not allowed" });
    })

    .delete((req, res, next) => {
        HotSales.deleteMany()
            .then(response => {
                console.log("All products had been removed.")
                res.json(response);
            })
            .catch(next);
    })

//ROUTES FOR OPERATING SPECIFIC Feedbacks
router.route('/:hid')
    // .get(auth.verifyUser, (req, res, next) => {
    //     Feedback.findOne({ _id: req.params.fid })
    //         .populate({
    //             path: 'customer'
    //         })
    //         .then((feedback) => {
    //             if (feedback == null) throw new Error("Feedback seems to be removed.");
    //             res.json(feedback);
    //         }).catch(next)

    // })
    // .post(auth.verifyUser, (req, res, next) => {
    //     res.statusCode = 405;
    //     res.json({ message: "Method not allowed" });
    // })
    // .put(auth.verifyUser, (req, res, next) => {
    //     Feedback.findOneAndUpdate(
    //         { customer: req.user._id, _id: req.params.fid },
    //         { $set: req.body },
    //         { new: true }
    //     )
    //         .then(reply => {
    //             if (reply == null) throw new Error("Sorry, feedback update failed.");
    //             res.json(reply);
    //         })
    //         .catch(next)
    // })

    .delete((req, res, next) => {
        HotSales.findOneAndDelete({ _id: req.params.hid })
            .then(response => {
                console.log("Items has been removed")
                res.json(response);
            })
            .catch(next);
    })

module.exports = router;