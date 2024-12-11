import { isEmpty, isEmptyArray, isNullOrUndefined } from './index'

// 👉 Required Validator
export const requiredValidator = value => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
        return 'Esse campo é obrigatório'

    return !!String(value).trim().length || 'Esse campo é obrigatório'
}

// 👉 Email Validator
export const emailValidator = value => {
    if (isEmpty(value))
        return true
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (Array.isArray(value))
        return value.every(val => re.test(String(val))) || 'O campo Email deve ser um email válido'

    return re.test(String(value)) || 'O campo Email deve ser um email válido'
}