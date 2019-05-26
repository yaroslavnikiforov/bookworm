import express from "express";
import request from "request-promise";
import { parseString } from "xml2js";
import authenticate from "../middlewares/authenticate";
var rp = require("request-promise");

const router = express.Router();
router.use(authenticate);

router.get("/search", (req, res) => {
  request
    .get(
      `https://www.goodreads.com/search/index.xml?key=zTPSCDePMIbin6rZi757Xw&q=${
        req.query.q
      }`
    )
    .then(result =>
      parseString(result, (err, goodreadsResult) =>
        res.json({
          books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
            work => ({
              goodreadsId: work.best_book[0].id[0]._,
              title: work.best_book[0].title[0],
              author: work.best_book[0].author[0].name[0],
              covers: [work.best_book[0].image_url[0]]
            })
          )
        })
      )
    );
  /*res.json({
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
  });*/
});

export default router;
