export class Article{
    id?: number;
    slug: string;
    subject: string;
    title: string;
    content: string;
    meta_tag: string;
    description: string;
    author: User;
}


interface User{
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}