export interface UserType {
    avatar_url: string,
    username: string,
    location: string | null,
    followers: number | null,
    following: number,
    bio: string | null,
    html_url: string,
    email: string | null
}

export interface UserPresent {
    isUserPresent: boolean
}