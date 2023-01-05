import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672897808817 implements MigrationInterface {
    name = 'default1672897808817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "films" ("id" SERIAL NOT NULL, "title" text NOT NULL, "author" text NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_697487ada088902377482c970d1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "films"`);
    }

}
