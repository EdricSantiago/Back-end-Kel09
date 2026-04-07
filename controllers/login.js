const mongoose = require("mongoose");

await User.updateOne({
    username: "luisdewa",
});


await User.deleteOne({
    username: "luisdewa",
    password: "LuissukaPakJansen"
});