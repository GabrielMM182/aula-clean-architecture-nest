import EntityUUID from "../../../core/entities/entity-uuid"
import AggregateRoot from '../../../core/entities/aggregate-root'
import { Optional } from '../../../core/types/optional'
import { UserPostCreatedEvent } from '../events/userPost-created-event'

export interface UserPostsType {
    title: string
    tags: [string]
    image: string
    isNsfw: boolean
    isAllowShare: boolean
}

export class UserPost extends AggregateRoot<UserPostsType> {

    get title() {
        return this.attributes.title
    }

    get tags() {
        return this.attributes.tags
    }

    get image() {
        return this.attributes.image
    }

    get isNsfw() {
        return this.attributes.isNsfw
    }

    get isAllowShare() {
        return this.attributes.isAllowShare
    }


    set title(title: string) {
        this.attributes.title = title;
    }

    set tags(tags: [string]) {
        this.attributes.tags = tags;
    }

    set image(image: string) {
        this.attributes.image = image;
    }

    set isAllowShare(isAllowShare: boolean) {
        this.attributes.isAllowShare = isAllowShare;
    }

    static create(data: Optional<UserPostsType, 'isAllowShare'>, id?: EntityUUID) {
        const userPost = new UserPost(
            {
                ...data,
                isAllowShare: data.isAllowShare ?? true
            },
            id
        )

        if (!id) {
            userPost.addDomainEvent(new UserPostCreatedEvent(userPost))
        }

        return userPost
    }

}