import { kirbySite } from '#nuxt-kql'

/**
 * Access the global site context, similar to Kirby's `$site` global variable
 */
export function useSite() {
  return readonly(shallowRef(kirbySite))
}
