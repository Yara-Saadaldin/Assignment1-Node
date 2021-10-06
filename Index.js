//Requiring express
const express = require('express');

//Initializes the express app
const app = express();

//Specifies a port to listen on --> localhost: 9000
const port = 9000;

//API / URLs
app.get('/', (req, res) => {
    res.send("Express server is working!");
});

//Returns dummy data
    //10 Fun facts about coffee
app.get('/api/coffee', (req, res) => {
    const coffee = ["Coffee was originally chewed,   Instant coffee has been around for 250 years,   Coffee was discovered by a goat herder,   Coffee is a fruit,   You cannot become dehydrated from coffee,   Coffee accelerates metabolism,   Cream makes your coffee stay warm,   You'll get more caffeine from a brewed coffee than an espresso,   Light roast coffee has more caffeine than dark roast,   Starbucks was founded by two teachers"];
    res.send(JSON.stringify(coffee));
});

//Returns dummy data
    //10 Fun facts about plants
app.get('/api/plants', (req, res) => {
    const plants = ["Plants can identify insects by their saliva,   All plants can talk,   Tulips were more valuable than gold,   More than 85% of plant life is found in the ocean,   Water travels in the upward direction from the roots to its stem and then into the plant leaves,   Flowers did not always exist they first appeared 140 million years ago,   Fungus helps trees grow, White flowers smell stronger than colorful ones,   There are more microorganisms in one teaspoon of soil than there are people on earth,   A little baking soda can help you grow sweeter tomatoes"];
    res.send(JSON.stringify(plants));
});

//Runs the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on port", port);
});