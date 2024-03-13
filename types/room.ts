export default interface room {
    roomCode: string | string[] | undefined;
    roomName: string;
    names: {name: string}[];
}