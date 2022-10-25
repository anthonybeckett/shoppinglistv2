import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class HomeListEntity extends BaseEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;
}
