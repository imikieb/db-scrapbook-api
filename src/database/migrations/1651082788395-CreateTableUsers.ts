import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1651082788395 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true, true, true);
    }
}
