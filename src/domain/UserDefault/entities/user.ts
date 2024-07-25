import Entity from '../../../core/entities/entity'
import EntityUUID from '../../../core/entities/entity-uuid'

export interface UserType {
    name: string
    email: string
    password: string
}

export class User extends Entity<UserType> {
	get name() {
		return this.attributes.name
	}

	get email() {
		return this.attributes.email
	}

	get password() {
		return this.attributes.password
	}

	set name(name: string) {
		this.attributes.name = name
	}

	set email(email: string) {
		this.attributes.email = email
	}

	set password(password: string) {
		this.attributes.password = password
	}

	static create(data: UserType, id?: EntityUUID) {
		return new User(data, id)
	}
}
