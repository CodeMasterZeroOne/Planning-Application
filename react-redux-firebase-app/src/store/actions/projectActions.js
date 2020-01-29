export const createProject = ( project ) => {
    return (dispatch, getState) => {
        // make async call to databsae
        dispatch ({ type: 'CREATE_PROJECT', project: project });
    }
}