


 export interface IBook {
  title: string;
  author?: string;
  genre: "SCIENCE" | "FANTASY" | "OTHER";
  isbn: string;
  description?: string;
  copies?: number;
  available?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
