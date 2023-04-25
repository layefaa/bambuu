export interface IButton {
  label: string,
  onClick?: () => void,
  type: 'button' | 'tab' | 'submit',
  active?: boolean
}

export interface ISocialIcon {
  strokeColor: string,
  dir?: string
}

export interface ILink {
  name: string,
  route: string,
  clickEvent?: ()=> void
}