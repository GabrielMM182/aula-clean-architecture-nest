import { UserLogin } from '../entities/userLogin'

export abstract class UserLoginRepository {
	abstract create(userLogin: UserLogin): Promise<UserLogin>
	abstract save(userLogin: UserLogin): Promise<void>
	abstract findById(id: string): Promise<UserLogin | null>
	abstract findByEmail(email: string): Promise<UserLogin | null>
	abstract delete(id: string): Promise<void>
	abstract findMany(): Promise<UserLogin[]>
}
