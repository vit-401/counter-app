const initialState = {
    value: 0,
    valueInSettings: {
        startValue: 0,
        maxValue: 5
    },
    valueSettings: false,
    error: false
}
type initialStateType = typeof initialState

export const counterReduser = (state: initialStateType = initialState, action: ACTypes) => {
    const stateCopy = {...state}
    switch (action.type) {
        case 'INC-VALUE':
            let value = state.value + 1
            if (value >= state.valueInSettings.maxValue) {
                stateCopy.error = true
            } else {
                stateCopy.error = false
            }
            return {...stateCopy, value}
        case 'RESET-VALUE':
            return {...stateCopy, value: 0}
        case 'SET-VALUE-SETTINGS':
            return {...stateCopy, valueSettings: !state.valueSettings}
        case 'SET-VALUE-IN-SETTINGS': {
            let copyValueInSet = {...stateCopy.valueInSettings, startValue: action.num}
            return {...stateCopy, value: action.num, valueInSettings: copyValueInSet}
        }
        case 'SET-MAX-VALUE': {
            let copyValueInSet = {...stateCopy.valueInSettings, maxValue: action.num}
            return {...stateCopy, valueInSettings: copyValueInSet}
        }
        case 'CHECK-FOR-ERROR': {
            let stateWithErr
            if (action.num >= state.valueInSettings.maxValue) {
                stateWithErr = {...stateCopy, value: action.num, error: true}
                console.log(stateWithErr)
            } else {
                stateWithErr = {...stateCopy, error: false}
                console.log(stateWithErr)
            }
            return stateWithErr
        }
        case 'SET-ERROR': {
            return {...stateCopy, error: action.value}
        }
        default:
            return stateCopy
    }
}

export const changeValueAC = () => ({type: 'INC-VALUE' as const})
export const resetValueeAC = () => ({type: 'RESET-VALUE' as const})
export const setValueSettingsAC = () => ({type: 'SET-VALUE-SETTINGS' as const})
export const setValueInSettingsAC = (num: number) => ({type: 'SET-VALUE-IN-SETTINGS' as const, num})
export const setMaxValueInSettingsAC = (num: number) => ({type: 'SET-MAX-VALUE' as const, num})
export const checkingForErrorsAC = (num: number) => ({type: 'CHECK-FOR-ERROR' as const, num})
export const setErrorAC = (value: boolean) => ({type: 'SET-ERROR' as const, value})

export type changeValueType = ReturnType<typeof changeValueAC>
export type resetValueeType = ReturnType<typeof resetValueeAC>
export type setValueSettingsType = ReturnType<typeof setValueSettingsAC>
export type setValueInSettingsType = ReturnType<typeof setValueInSettingsAC>
export type setMaxValueInSettingsType = ReturnType<typeof setMaxValueInSettingsAC>
export type checkingForErrorsType = ReturnType<typeof checkingForErrorsAC>
export type setErrorType = ReturnType<typeof setErrorAC>
export type ACTypes = changeValueType
    | resetValueeType
    | setValueSettingsType
    | setValueInSettingsType
    | setMaxValueInSettingsType
    | checkingForErrorsType
    | setErrorType