// import { Sequelize } from "sequelize-typescript";
// // import aws from './utils/aws'
// // import { dbConfig } from './utils/env'

// // const parameters = aws.ps.getParametersByPathSync(dbConfig, {
// //   accessKeyId: process.env.AWS_ACCESS_KEY,
// //   secretAccessKey: process.env.AWS_SECRET_KEY,
// //   region: 'eu-central-1',
// // })

// // const database = parameters.find((x) => x.Name == `${dbConfig}/db-name`)?.Value
// // const username = parameters.find((x) => x.Name == `${dbConfig}/db-username`)?.Value
// // const password = parameters.find((x) => x.Name == `${dbConfig}/db-password`)?.Value
// // const host = parameters.find((x) => x.Name == `${dbConfig}/db-url`)?.Value

const database = process.env.DB_NAME // "asiti";
const username = process.env.DB_USERNAME //"postgres";
const password = process.env.DB_PASSWORD //"123123!A";
const host = process.env.DB_HOST //"localhost";

import { connect } from "http2"
// export const sequelize = new Sequelize({
//   host,
//   database,
//   dialect: "postgres",
//   username,
//   password,
//   models: [__dirname + "/models/*.model.*"],
//   modelMatch: (filename, member) => {
//     return (
//       filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
//     );
//   },
//   logging: false,
// });

import "reflect-metadata"
import { createConnection } from "typeorm"
import { User } from "./models/User"

export default async function () {
  try {
    await createConnection({
      type: "postgres",
      host,
      port: 5432,
      username,
      password,
      database,
      entities: [__dirname + "/models/*.ts"],
      synchronize: true,
      logging: false,
    })
  } catch {
    throw Error("Can't connect to database")
  }
}
