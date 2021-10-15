import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
import { User } from "../src/models/User";

export class Test1634285136779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "weed",
        type: "int",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "weed");
  }
}
