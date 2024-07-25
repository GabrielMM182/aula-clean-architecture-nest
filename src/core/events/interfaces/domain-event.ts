import AggregateRoot from '../../entities/aggregate-root'

export interface DomainEvent {
	ocurredAt: Date
	aggregate: AggregateRoot<unknown>
}
