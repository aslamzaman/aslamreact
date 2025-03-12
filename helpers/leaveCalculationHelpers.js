
export const registerEntry = (balanceCl, balanceEl, requestedLeave) => {
    //--------- Consume --------------------
    const consumeCl = 20 - balanceCl;
    const consumeEl = 18 - balanceEl;
    let newBalanceCl = 0;

    const totalReqCl = consumeCl + requestedLeave;
    let extraCl = 0;

    if (totalReqCl > 20) {
        extraCl = totalReqCl - 20;
        newBalanceCl = 0;
    } else {
        extraCl = 0;
        newBalanceCl = 20 - totalReqCl;
    }
    const totalReqEl = extraCl + consumeEl;
    const newBalanceEl = 18 - totalReqEl;
    return { newBalanceCl, newBalanceEl };
}




export const leftSide = (balanceCl, balanceEl, requestedLeave) => {
    const consumeCl = 20 - balanceCl;
    const consumeEl = 18 - balanceEl;
    const totalConsume = consumeCl + consumeEl + requestedLeave;
    return { consumeCl, consumeEl, requestedLeave, totalConsume }

}



export const rightSide = (balanceCl, balanceEl, requestedLeave) => {
    const registerBalance = registerEntry(balanceCl, balanceEl, requestedLeave);
    const totalConsume = 38 - (registerBalance.newBalanceCl + registerBalance.newBalanceEl);
    let quarter = 0;
    if (totalConsume > 20) {
        quarter = 38;
    } else {
        quarter = 20;
    }
    const lastConsume = totalConsume - requestedLeave;
    const balance = quarter - (lastConsume + requestedLeave);
    return { quarter, lastConsume, requestedLeave, balance };
}


