import { ShoppingItemEntity } from "../entities/ShoppingItemEntity";

export default class ShoppingItemService {
	async fetchItemQtyById(shoppingListId) {
		const results = await this.fetchByShoppingListId(shoppingListId);

		return results.length;
	}

	async fetchByShoppingListId(shoppingListId) {
		return await ShoppingItemEntity.fetchOrderedItemsByShoppingListId(shoppingListId);
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

	async completeItemById(id){
		const item = await ShoppingItemEntity.findOneBy({ id: id });
		item.complete = item.complete === 0 ? 1 : 0;
		await item.save();
	}
}
