import "reflect-metadata";
// import { sequelize } from "./sequelize";
import fastify from "fastify";
import mercurius from "mercurius";
import buildContext from "./context/buildContext";
import buildAppSchema from "./schema/buildAppSchema";
import cors from "fastify-cors";
import typeOrm from "./type-orm";
// import { sequelize } from "./sequelize";
// import i18next from "i18next";

// import en from "./locales/en.json";
// import he from "./locales/he.json";

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;
const ADDRESS =
  ENV != "development" ? "0.0.0.0" : process.env.ADDRESS || undefined;

const main = async () => {
  console.log("Initiating application");

  if (ENV == "production") {
    const _msg = "=============== PRODUCTION MODE ===============";
    const msg = `\u001b[31m${_msg}\u001b[0m`;
    console.log(msg);
    console.log(msg);
    console.log(msg);
  }

  const schema = await buildAppSchema();
  //   await sequelize.sync();
  await typeOrm();

  //   i18next.init({
  //     resources: { en, he },
  //     fallbackLng: "en",
  //     keySeparator: false,
  //     interpolation: {
  //       escapeValue: false,
  //     },
  //   });

  await fastify()
    .register(cors)
    .register(mercurius, {
      schema,
      context: buildContext,
      graphiql: "playground",
      jit: 1,
    })
    .listen(PORT, ADDRESS)
    .then((url) => {
      console.log(`🚀  Server ready at ${url}`);
    });
};

main();
