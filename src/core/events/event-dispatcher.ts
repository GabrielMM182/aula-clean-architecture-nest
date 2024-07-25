import AggregateRoot from '../entities/aggregate-root'
import { DomainEvent } from './interfaces/domain-event'

type EventHandlerCallback = (event: unknown) => void

export class EventDispatcher {
	private static handlers: Record<string, EventHandlerCallback[]> = {}
	private static aggregates: AggregateRoot<unknown>[] = []

	static pushAggregateForDispatch(aggregate: AggregateRoot<unknown>) {
		const aggregateExists = this.aggregates.find(
			item => item.id === aggregate.id
		)

		if (!aggregateExists) {
			this.aggregates.push(aggregate)
		}
	}

	static dispatchEventAggregate(aggregate: AggregateRoot<unknown>) {
		const aggregateFound = this.aggregates.find(
			item => item.id === aggregate.id
		)

		if (aggregateFound) {
			aggregateFound.domainEvents.forEach(event => this.dispatch(event))
			aggregateFound.clearDomainEvents()
			const aggregateIndex = this.aggregates.findIndex(
				item => item.id === aggregate.id
			)

			this.aggregates.splice(aggregateIndex, 1)
		}
	}

	static register(eventName: string, eventHandler: EventHandlerCallback) {
		if (!this.handlers[eventName]) {
			this.handlers[eventName] = []
		}

		this.handlers[eventName].push(eventHandler)
	}

	static dispatch(event: DomainEvent) {
		const eventName = event.constructor.name

		if (this.handlers[eventName]) {
			this.handlers[eventName].forEach(handler => handler(event))
		}
	}
}
