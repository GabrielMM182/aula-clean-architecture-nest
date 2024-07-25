import { randomUUID } from 'node:crypto'

export default class EntityUUID {
	private value: string

	toString() {
		return this.value
	}

	constructor(value?: string) {
		this.value = value ?? randomUUID()
	}
}
