export function setIsSignedIn (isSignedIn){
    return {
        type: "SET_ISSIGNEDIN",
        payload:isSignedIn
    }
}

export function setUsermail (email){
    return {
        type:"SET_USER",
        payload:email
    }
}