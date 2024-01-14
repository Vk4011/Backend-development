const express = require('express');
const app = express();

function ticketCheckerMiddleware(req, res, next) {
    const age = req.query.a;

    if (!age || age < 14) {
        return res.json({
            error: "You are not old enough to use the service."
        });
    }

    console.log(`\n\t age: ${age}`);
    next();
}

app.use(ticketCheckerMiddleware);

app.get("/ride1", (req, res) => {
    res.json({
        msg: "You have successfully completed the ride...!",
    });
});

app.get("/ride2", (req, res) => {
    res.json({
        msg: "You have successfully completed the ride...!",
    });
});

app.get("/ride", (req, res) => {
    res.json({
        msg: "You have successfully completed the ride...!",
    });
});

const port = 4050;
app.listen(port, () => console.log(`\n\t Server is running on the port: ${port}`));
