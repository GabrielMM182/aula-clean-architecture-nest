import { HashRepository } from '../../src/domain/UserLogin/service/hash-repository'

export class HashSimulator implements HashRepository {
	async hash(value: string): Promise<string> {
		return value.concat('-123abc')
	}

	async compare(value: string, hash: string): Promise<boolean> {
		return value.concat('-123abc') === hash
	}
}