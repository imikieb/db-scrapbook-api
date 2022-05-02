"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableNotes1651109352169 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableNotes1651109352169 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'notes',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true
                },
                {
                    name: 'note',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('notes', true, true, true);
    }
}
exports.CreateTableNotes1651109352169 = CreateTableNotes1651109352169;
