import { HomeListEntity } from "../entities/HomeListEntity";
import { database } from "../config/database";

export default class AddShoppingListService {
	create(name) {
		if (name === "") {
			throw "Name parameter cannot be null";
		}

		this.homeListEntity = new HomeListEntity();
		this.homeListEntity.name = name;
		this.homeListEntity.save();

		return true;
	}
}
