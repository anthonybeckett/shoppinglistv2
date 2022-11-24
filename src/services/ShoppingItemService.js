import { ShoppingItemEntity } from "../entities/ShoppingItemEntity";

export default class ShoppingItemService {
	async fetchByShoppingListId(shoppingListId) {
		return await ShoppingItemEntity.findBy({
			list_id: shoppingListId,
		});
	}

	async create(listId, name, order) {
		if (name === "") {
			throw "Name parameter cannot be null";
		}

		this.shoppingItemEntity = new ShoppingItemEntity();
		this.shoppingItemEntity.list_id = listId;
		this.shoppingItemEntity.name = name;
		this.shoppingItemEntity.item_order = order;
		this.shoppingItemEntity.id = null;
		return await this.shoppingItemEntity.save();
	}

	async destroy(id) {
		const item = await ShoppingItemEntity.findOneBy({ id: id });
		await item.remove();
	}
}
