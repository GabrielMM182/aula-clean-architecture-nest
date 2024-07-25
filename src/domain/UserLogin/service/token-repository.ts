export abstract class TokenRepository {
	abstract generate(data: Record<string, unknown>): string
}
