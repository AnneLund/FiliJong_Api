const express = require("express");
const app = express();
const PORT = process.env.PORT || 3123;

const { UserRouter } = require("./Routes/user.router.js");
const { initRouter } = require("./Routes/init.sequelize.router.js");
const { AuthRouter } = require("./Routes/auth.router.js");
const { RoleRouter } = require("./Routes/role.router.js");
const { Member1Router } = require("./Routes/member1.router.js");
const { Member2Router } = require("./Routes/member2.router.js");
const { Member3Router } = require("./Routes/member3.router.js");
const { Member4Router } = require("./Routes/member4.router.js");
const { AllMembersRouter } = require("./Routes/allmembers.router.js");
const { TestRouter } = require("./Routes/test.router.js");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, Accept-Language, X-Authorization, X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware

  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ limit: "1mb" }));

app.use(UserRouter);
app.use(initRouter);
app.use(AuthRouter);
app.use(RoleRouter);
app.use(Member1Router);
app.use(Member2Router);
app.use(Member3Router);
app.use(Member4Router);
app.use(AllMembersRouter);
app.use(TestRouter);

app.listen(PORT, () => {
  console.log(`Kører på port ${PORT}`);
});

module.exports = { app };
