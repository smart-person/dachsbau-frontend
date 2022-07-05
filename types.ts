/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InjectionKey, Ref } from 'vue'
import type { KirbyBlock, KirbyLayout, KirbyQueryResponse } from '#nuxt-kql'

export const containerInjectionKey = Symbol('container') as InjectionKey<
  Ref<HTMLElement | undefined>
>

export interface KirbyFile {
  id: string
  filename: string
  url: string
  srcset: string
  caption: string
  alt: string
}

export interface KirbySite {
  title: string
  description: string
  children: {
    id: string
    title: string
    isListed: boolean
  }[]
  cover: KirbyFile
  footer: {
    id: string
    title: string
  }[]
}

export interface KirbyDefaultPageQuery {
  query: `kirby.page("${string}")`
  select: {
    id: string | boolean
    title: string | boolean
    description: string | boolean
    text?: string | boolean
    layouts?: string | boolean
    files: {
      query: string
      select: string[] | Record<string, any>
    }
  }
}

export interface KirbyDefaultPage extends KirbyQueryResponse {
  result?: {
    id: string
    title: string
    description: string
    text?: KirbyBlock[]
    layouts?: KirbyLayout[]
    files: KirbyFile[]
  }
}
