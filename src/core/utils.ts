const addressGuess = (add:string) =>
{
    const address = add.toLowerCase()
    if(address.length == 44)
    {
        //Token or user address
        const isPump = address.slice(address.length-4,address.length);
        if(isPump == "pump")
        {
            return JSON.stringify(
                {
                    token:add
                }
            )
        }
        return JSON.stringify(
            {
                user:add
            }
        )
    }else{
        //Guess it it hash
        return JSON.stringify(
            {
                hash:add
            }
        )
    }
}

export {
    addressGuess
}