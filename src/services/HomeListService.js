import { HomeListEntity } from "../entities/HomeListEntity";

export default class HomeListService {
	async fetchAll() {
		return await HomeListEntity.find();
	}

	async create(name) {
		if (name === "") {
			throw "Name parameter cannot be null";
		}

		this.homeListEntity = new HomeListEntity();
		this.homeListEntity.name = name;
		return await this.homeListEntity.save();
	}
}
