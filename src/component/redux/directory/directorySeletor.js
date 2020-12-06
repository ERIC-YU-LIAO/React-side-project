import {createSelector} from 'reselect'

// 
const selectDirectory = state => state.directory
//創建 
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)
