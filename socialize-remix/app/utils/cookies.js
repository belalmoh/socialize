import { createCookie } from "remix";

export const userCookies = createCookie("_socialize_user");

export const isLoggedIn = async (cookieHeader) => {
    const cookie = await userCookies.parse(cookieHeader);
    if(cookie?.token)
        return true;
    return false;
}