import { DataSource } from "typeorm";
export const myDataSource = new DataSource(
  {
    type: "mongodb",
    host: "localhost",
    database: "node_user",
    synchronize: true,
    logging: false,
    entities: [
      "entity/*.js"
    ]
  }
);
