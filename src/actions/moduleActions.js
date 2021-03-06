export const CREATE_MODULE = "CREATE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";

export const updateModule = (newModule) => ({
    type: UPDATE_MODULE,
    module: newModule
})

export const createModule = (newModule) => ({
    type: CREATE_MODULE,
    module: newModule
})

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const findModulesForCourse = (modules) => ({
    type: FIND_MODULES_FOR_COURSE,
    modules: modules
})


