export class NasaPicture {
    constructor(
        public date: string,
        public explanation: string,
        public title: string,
        public url: string,
        public id: string
    ) {
    }

    validate(): void {
        if (!this.date || !this.explanation || !this.title || !this.url || !this.id) {
            throw new Error("All fields are required");
        }
    }
}
