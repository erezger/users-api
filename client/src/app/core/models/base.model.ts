export class BaseModel{
    
    public readonly createdOn?: Date | string
    public readonly updatedOn?: Date |string
    public readonly deletedOn?: Date | string
    public readonly createdBy?: string
    public readonly updatedBy?: string

    public constructor(init?: Partial<BaseModel>) {
		Object.assign(this, init)
    }
}