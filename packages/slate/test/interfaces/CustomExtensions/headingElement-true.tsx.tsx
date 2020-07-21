// show that regular methods that are imported work as expected
import { Element } from 'slate'
import { HeadingElement } from './custom-types'

export const input: Element = {
  type: 'heading',
  level: 5,
  children: [],
}

export const test = (element: Element): element is HeadingElement => {
  return element.type === 'heading'
}

export const output = true
