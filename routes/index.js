const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model"); 

router.get("/", function(req, res) {
    let error = req.flash("error");
    res.render("index", {
        error,
        loggedin: false
    });
});

router.get("/shop", isloggedin, async function(req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", {
        products,
        success
    });
});


const PLATFORM_FEE = 20;


router.get('/cart', isloggedin, async (req, res) => {
    try {
        
        const userId = req.user._id;

        
        const user = await userModel.findById(userId)
            .populate('cart')
            .exec();

        if (!user) {
            return res.status(404).send("User not found.");
        }

       
        let grandTotal = 0;
        let totalMRP = 0;
        let totalDiscount = 0;

        user.cart.forEach(item => {
            if (item) {
                const price = Number(item.price) || 0;
                const discount = Number(item.discount) || 0;

                const itemNetCost = price - discount + PLATFORM_FEE;

                grandTotal += itemNetCost;
                totalMRP += price;
                totalDiscount += discount;
            }
        });

       
        res.render('cart', {
            user: user,
            grandTotal: grandTotal.toFixed(2),
            platformFee: PLATFORM_FEE.toFixed(2),
            totalMRP: totalMRP.toFixed(2),
            totalDiscount: totalDiscount.toFixed(2)
        });

    } catch (error) {
        console.error("Error fetching cart data:", error);
        res.status(500).send("An error occurred while loading your cart.");
    }
});


router.post('/cart/remove/:productId', isloggedin, async (req, res) => { 
    try {
        const userId = req.user._id;
        const productId = req.params.productId;

        await userModel.findByIdAndUpdate(userId, { 
            $pull: {
                cart: productId
            }
        });

        res.redirect('/cart');

    } catch (error) {
        console.error("Error removing item:", error);
        res.status(500).send("Could not remove item from cart.");
    }
});

router.get("/addtocart/:productid", isloggedin, async function(req, res) {
    let user = await userModel.findOne({
        email: req.user.email
    });

    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added To Cart");
    res.redirect("/shop");
});


module.exports = router;