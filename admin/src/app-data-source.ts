import { DataSource } from "typeorm";
export const myDataSource = new DataSource(
  {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "node_admin",
    password: "mauFJcuf5dhRMQrjj",
    database: "node_admin",
    entities: [
      "entity/*.js"
    ],
    logging: false,
    synchronize: true
  }
);