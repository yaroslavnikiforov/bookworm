import express from "express";

const router = express.Router();

router.get("/search", (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        covers: [
          "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/i/Rich-Dad-Poor-Dad-3988701.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51zcMqY7GQL._SX331_BO1,204,203,200_.jpg"
        ],
        pages: 278
      },
      {
        goodreadsId: 2,
        title: "Cashflow Quadrant",
        author: "Robert Kiyosaki",
        covers: [
          "http://t1.gstatic.com/images?q=tbn:ANd9GcRMJwpm1gcuBKTZhV92k3IA3aNrusUJ5uGOJR3klEeJlOrBTcBb"
        ],
        pages: 372
      },
      {
        goodreadsId: 3,
        title: "Think And Grow Rich",
        author: "Napoleon Hill",
        covers: [
          "https://images-na.ssl-images-amazon.com/images/I/51Uw5tYiqsL.jpg"
        ],
        pages: 300
      }
    ]
  });
});

export default router;
