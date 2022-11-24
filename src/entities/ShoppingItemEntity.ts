import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shopping_items")
export class ShoppingItemEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	list_id: number;

	@Column()
	name: string;

	@Column({
		default: 0,
	})
	complete: number;

	@Column()
	item_order: number;
}
