export const fire = (player, i, j) => {
    return {
        type: "fire",
        player: player,
        i: i,
        j: j,
    };
};

export const setBoard = (player, i, j) => {
    return {
        type: "setBoard",
        player: player,
        i: i,
        j: j,
    };
};


export const resetBoard = ()=>{
    return {
        type: "resetBoard",
    };
}