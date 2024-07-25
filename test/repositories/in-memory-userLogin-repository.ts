import { UserLogin } from '../../src/domain/UserLogin/entities/userLogin'
import { UserLoginRepository } from '../../src/domain/UserLogin/repositories/userLogin-repository'

export class InMemoryUserLoginRepository implements UserLoginRepository {
	items: UserLogin[] = []

	async create(userLogin: UserLogin) {
		this.items.push(userLogin)
		return userLogin
	}

	async save(userLogin: UserLogin) {
		const itemIndex = this.items.findIndex(item => item.id === userLogin.id)
		this.items[itemIndex] = userLogin
	}

	async findById(id: string) {
		const userLogin = this.items.find(item => item.id.toString() === id)

		if (!userLogin) {
			return null
		}

		return userLogin
	}

	async findByEmail(email: string) {
		const userLogin = this.items.find(item => item.email.value === email)

		if (!userLogin) {
			return null
		}

		return userLogin
	}

	async findMany() {
		return this.items
	}

	async delete(id: string) {
		const itemIndex = this.items.findIndex(
			item => item.id.toString() === id
		)
		this.items.splice(itemIndex, 1)
	}
}
