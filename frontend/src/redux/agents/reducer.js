const createAgent = function(id, name, description){
    return {
        id,
        name,
        description
    }
}

const initialState = {
    agentList: [
        createAgent(0, "Lily", "Lorem Ipsum"),
        createAgent(1, "Lucy", "Lorem Ipsum"),
        createAgent(2, "Leslie", "Lorem Ipsum"),
    ]
}

export default (state=initialState, action) =>{
    switch(action.type){
        default:
            return state
    }
}