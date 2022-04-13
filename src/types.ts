
export interface NoteEntity {
    _id:string;
    title:string;
    text:string;
}

export type NoteResponse = Omit<NoteEntity, "_id">