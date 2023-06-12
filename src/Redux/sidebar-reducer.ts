type MenuButtonType = {
    id: number,
    link: string,
    navLink: string
    }

let initialState: Array<MenuButtonType> = [
        { id: 0, link: "MyMyMy Profile", navLink: "/profile" },
        { id: 1, link: "MyMyMy Messages", navLink: "/dialogs" },
        { id: 2, link: "MyMyMy News", navLink: "/news" },
        { id: 3, link: "Music", navLink: "/music" },
        { id: 4, link: "Friends", navLink: "/friends" },
        { id: 5, link: "Settings", navLink: "/settings" },
]

const sidebarReducer = (state: Array<MenuButtonType> = initialState, action: any): Array<MenuButtonType> => state;

export default sidebarReducer;