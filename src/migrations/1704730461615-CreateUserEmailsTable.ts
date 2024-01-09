import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserEmailsTable1704730461615 implements MigrationInterface {

    private table = new Table({
        name: 'emails',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true, // Auto-increment
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'integer',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'is_primary',
            type: 'boolean',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
        ],
        foreignKeys:[
            {
                name: "fk_user_emails",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"]
            }
        ]
      });
    
      public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
      }
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
      }

}
