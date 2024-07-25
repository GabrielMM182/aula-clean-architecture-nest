import { TokenRepository } from '../../src/domain/UserLogin/service/token-repository'

export class TokenSimulator implements TokenRepository {
	generate(data: Record<string, unknown>): string {
		return JSON.stringify(data)
	}
}
