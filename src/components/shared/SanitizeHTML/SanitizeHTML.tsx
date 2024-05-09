import { HTMLAttributes, createElement } from "react"
import sanitize from 'sanitize-html'

type SanitizeHTMLProps = {
  tag: string,
  children: string,
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'string']
  });

  return createElement(tag, {
    ...rest
  }, sanitizedHTML)
}