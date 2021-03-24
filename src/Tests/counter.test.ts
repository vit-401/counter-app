import {
    changeValueAC,
    checkingForErrorsAC,
    counterReduser,
    resetValueeAC, setMaxValueInSettingsAC,
    setValueInSettingsAC, setValueSettingsAC
} from "../bll/counter-reduser";

test('counter value shod be inc', () => {
    let startState = {
        value: 0,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }
    const endState = counterReduser(startState, changeValueAC())
    expect(endState.value).toBe(1)
    expect(startState.value).toBe(0)
})
test('test 2', () => {
    let startState = {
        value: 0,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }

    const endState = counterReduser(startState, setValueInSettingsAC(12))
    expect(endState.valueInSettings.startValue).toBe(12)
    expect(endState.value).toBe(12)
    expect(startState.valueInSettings.startValue).toBe(0)
    expect(startState.value).toBe(0)
})

test('test 3', () => {
    let startState = {
        value: 0,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }

    const endState = counterReduser(startState, checkingForErrorsAC(6))

    expect(endState.error).toBe(true)
    expect(endState.value).toBe(6)
    expect(startState.value).toBe(0)
    expect(startState.error).toBe(false)
})

test('test 5', () => {
    let startState = {
        value: 0,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }

    const endState = counterReduser(startState, setValueSettingsAC())

    expect(startState.valueSettings).toBe(false)
    expect(endState.valueSettings).toBe(true)
})

test('test 6', () => {
    let startState = {
        value: 0,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }

    const endState = counterReduser(startState, setMaxValueInSettingsAC(12))

    expect(startState.valueInSettings.maxValue).toBe(5)
    expect(endState.valueInSettings.maxValue).toBe(12)
})
test('test 7', () => {
    let startState = {
        value: 12,
        valueInSettings: {
            startValue: 0,
            maxValue: 5
        },
        valueSettings: false,
        error: false
    }

    const endState = counterReduser(startState, resetValueeAC())

    expect(startState.value).toBe(12)
    expect(endState.value).toBe(0)
})