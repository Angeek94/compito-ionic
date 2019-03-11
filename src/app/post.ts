export interface Post {
    author:string,
    image:string,
    message:string,
    likes:[],
    comments:Comment[]

}
export interface Comment{
    author: string,
    message: string
}
