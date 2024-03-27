import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  //console.log(day);
  var dayType = "a weekday";
  var advice = "it's time to work hard!";

  if (day === 0 || day === 6) {
    res.render("index.ejs", {
      dayType: "weekend",
      advice: "it's time to have fun!",
    });
  }
  
  res.render("index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
