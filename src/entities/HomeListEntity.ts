import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("homelist")
export class HomeListEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
