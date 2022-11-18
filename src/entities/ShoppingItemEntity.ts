import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shopping_items")
export class ShoppingItemEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("varchar", { length: 100 })
	list_id: string;

	@Column({
		default: 0,
	})
	complete: number;

	@Column()
	order: number;
}
