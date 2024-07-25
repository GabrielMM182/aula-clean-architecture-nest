import EntityUUID from './entity-uuid'

export default abstract class Entity<T> {
    private entityId: EntityUUID 
    protected attributes: T 
    get id() {
        return this.entityId
    }

    protected constructor(attributes: T, id?: EntityUUID) {
        this.entityId = id ?? new EntityUUID()
        this.attributes = attributes
    }
}
