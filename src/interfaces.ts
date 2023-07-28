export interface link {
    name: string
    url: string
}

export interface IButton {
    label: string,
    onClick?: () => void
    type: 'button' | 'tab' | 'submit'
    active?: boolean,
    isSuccess?: boolean
    isLoading?: boolean
    isError?: boolean
}