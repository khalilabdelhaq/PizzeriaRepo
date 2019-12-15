export function nextPage()
{
    return {
    type:'NEXT_PAGE',
    }
}

export function previousPage()
{
    return {
    type:'PREVIOUS_PAGE',
    }
}

export function saveCommande(commande)
{
    return {
        type:'SAVE_COMMANDE',
        payload:commande
        }

}
export function livrerCommande(id)
{
    return {
        type:'LIVRER_COMMANDE',
        payload:id
        }

}