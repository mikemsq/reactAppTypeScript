const ADD_USER = 'ADD-USER';
const UPDATE_USERS = 'UPDATE-USERS';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

type DialogType = {
    id: number
    name: string
    ava: string | null
}

type MessageType = {
    id: number
    msg: string
    }

type DialogsInitialStateType = {
    dialogs: Array<DialogType>
    currentMessage: string
    messages: Array<MessageType>
    }

let initialState: DialogsInitialStateType = {
    dialogs: [
        { id: 0, name: "Mike", ava: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" },
        { id: 1, name: "Andris", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU" },
        { id: 2, name: "Kandrat", ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" },
        { id: 3, name: "Anela", ava: "https://alitech.com.ng/wp-content/uploads/2020/06/IMG_20200603_114713-e1592183490881.jpg" },
        { id: 4, name: "Jakub", ava: "https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1" },
    ],

    currentMessage: "New message here",

    messages: [
        { id: 0, msg: "Hello hru", },
        { id: 1, msg: "Good, thx. And u", },
        { id: 2, msg: "Nothing much", },
    ]
}

const messageReducer = (state: DialogsInitialStateType = initialState, action: any): DialogsInitialStateType => {
    switch (action.type) {
        case UPDATE_USERS:
            // TODO: case 'UPDATE-USERS'
            return state;
        case ADD_USER: // action.newUserName required
            let userName: string = action.newUserName === "" ? "Noname" : action.newUserName;
            let newUser: DialogType = {
                id: state.dialogs[state.dialogs.length - 1].id + 1,
                name: userName,
                ava: "https://spec.iile.ru/wp-content/uploads/2022/01/noname.jpg"
            }
            state.dialogs.push(newUser);
            return state;
        case UPDATE_MESSAGE_TEXT: //action.newMessageText required
            state.currentMessage = action.newMessageText;
            return state;
        case ADD_MESSAGE:
            if (state.currentMessage !== "") {
                let newMessage: MessageType = {
                    id: state.messages[state.messages.length - 1].id + 1,
                    msg: state.currentMessage
                }

                state.messages.push(newMessage);
                state.currentMessage = '';
            }
            return state;
        default:
            state.currentMessage = action.newMessageText;
            return state;
    }
}

type AddMessageActionType = { type: typeof ADD_MESSAGE }

export const addMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE })

type updateMessageTextActionCreatorType = {
    type: typeof UPDATE_MESSAGE_TEXT
    newMessageText: string
    }

export const updateMessageTextActionCreator = (text: string): updateMessageTextActionCreatorType => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default messageReducer;