"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1651082788395 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsers1651082788395 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('users', true, true, true);
    }
}
exports.CreateTableUsers1651082788395 = CreateTableUsers1651082788395;
