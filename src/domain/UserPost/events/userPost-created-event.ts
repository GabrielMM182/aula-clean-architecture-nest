import { DomainEvent } from '../../../core/events/interfaces/domain-event'
import { UserPost } from '../entities/userPost'

export class UserPostCreatedEvent implements DomainEvent {
	public ocurredAt: Date
	public aggregate: UserPost

	constructor(userPost: UserPost) {
		this.ocurredAt = new Date()
		this.aggregate = userPost
	}
}
