const mongoose = require("mongoose");

await User.updateOne({
    username: "luisdewa",
    password: "LuissukaPakJansen"
});


await User.deleteOne({
    username: "luisdewa",
    password: "LuissukaPakJansen"
});