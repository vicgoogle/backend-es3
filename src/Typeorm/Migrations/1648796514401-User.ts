import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class Voluntary1648796514401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "voluntary",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "age",
            type: "varchar",
          },
          {
            name: "sex",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "rg",
            type: "varchar",
          },
          {
            name: "occupation",
            type: "varchar",
          },

          {
            name: "disponibility",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("voluntary");
  }
}
