import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class HomeList {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;
}
