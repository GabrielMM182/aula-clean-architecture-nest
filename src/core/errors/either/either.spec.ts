import { Either, left, right } from './either'

const testValue = (value: boolean): Either<string, number> => {
	if (value) {
		return right(1)
	}
	return left('invalid')
}

describe('Retorno de Error e Success', () => {
	test('Deve retornar um erro', () => {
		const result = testValue(false)

		expect(result.isRight()).toBe(false)
		expect(result.isLeft()).toBe(true)
	})

	test('Deve retornar sucesso', () => {
		const result = testValue(true)

		expect(result.isRight()).toBe(true)
		expect(result.isLeft()).toBe(false)
	})
})
