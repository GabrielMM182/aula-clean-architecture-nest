import Entity from '../../../core/entities/entity'
import EntityUUID from '../../../core/entities/entity-uuid'
import Email from '../../shared/email'

export interface UserType {
    name: string
    email: Email
    password: string
}

export class UserLogin extends Entity<UserType> {
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

	set email(email: Email) {
		this.attributes.email = email
	}

	set password(password: string) {
		this.attributes.password = password
	}

	static create(data: UserType, id?: EntityUUID) {
		return new UserLogin(data, id)
	}
}
