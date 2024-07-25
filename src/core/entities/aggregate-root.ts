import { EventDispatcher } from '../events/event-dispatcher'
import { DomainEvent } from '../events/interfaces/domain-event'
import Entity from './entity'

export default abstract class AggregateRoot<T> extends Entity<T> {
	private _domainEvents: DomainEvent[] = []

	get domainEvents() {
		return this._domainEvents
	}

	protected addDomainEvent(domainEvent: DomainEvent) {
		this._domainEvents.push(domainEvent)
		EventDispatcher.pushAggregateForDispatch(this)
	}

	clearDomainEvents() {
		this._domainEvents = []
	}
}
