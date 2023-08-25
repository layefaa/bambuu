export interface link {
    name: string
    url: string
    classes?: string
    animate?: boolean
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