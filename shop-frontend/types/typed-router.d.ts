/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/account/email_verification': RouteRecordInfo<'/account/email_verification', '/account/email_verification', Record<never, never>, Record<never, never>>,
    '/account/forget_password': RouteRecordInfo<'/account/forget_password', '/account/forget_password', Record<never, never>, Record<never, never>>,
    '/account/recover_done': RouteRecordInfo<'/account/recover_done', '/account/recover_done', Record<never, never>, Record<never, never>>,
    '/account/register': RouteRecordInfo<'/account/register', '/account/register', Record<never, never>, Record<never, never>>,
    '/account/register_done': RouteRecordInfo<'/account/register_done', '/account/register_done', Record<never, never>, Record<never, never>>,
    '/admin': RouteRecordInfo<'/admin', '/admin', Record<never, never>, Record<never, never>>,
    '/admin/': RouteRecordInfo<'/admin/', '/admin', Record<never, never>, Record<never, never>>,
    '/admin/categories/': RouteRecordInfo<'/admin/categories/', '/admin/categories', Record<never, never>, Record<never, never>>,
    '/admin/categories/[name]_[id]': RouteRecordInfo<'/admin/categories/[name]_[id]', '/admin/categories/:name()_:id', { name: ParamValue<true>, id: ParamValue<true> }, { name: ParamValue<false>, id: ParamValue<false> }>,
    '/admin/categories/create': RouteRecordInfo<'/admin/categories/create', '/admin/categories/create', Record<never, never>, Record<never, never>>,
    '/admin/orders/': RouteRecordInfo<'/admin/orders/', '/admin/orders', Record<never, never>, Record<never, never>>,
    '/admin/products/': RouteRecordInfo<'/admin/products/', '/admin/products', Record<never, never>, Record<never, never>>,
    '/admin/products/[id]': RouteRecordInfo<'/admin/products/[id]', '/admin/products/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/admin/products/create': RouteRecordInfo<'/admin/products/create', '/admin/products/create', Record<never, never>, Record<never, never>>,
    '/category/[name]_[id]': RouteRecordInfo<'/category/[name]_[id]', '/category/:name()_:id', { name: ParamValue<true>, id: ParamValue<true> }, { name: ParamValue<false>, id: ParamValue<false> }>,
    '/order/cart': RouteRecordInfo<'/order/cart', '/order/cart', Record<never, never>, Record<never, never>>,
    '/order/checkout': RouteRecordInfo<'/order/checkout', '/order/checkout', Record<never, never>, Record<never, never>>,
    '/order/complete': RouteRecordInfo<'/order/complete', '/order/complete', Record<never, never>, Record<never, never>>,
    '/order/pay': RouteRecordInfo<'/order/pay', '/order/pay', Record<never, never>, Record<never, never>>,
    '/products/[name]_[id]': RouteRecordInfo<'/products/[name]_[id]', '/products/:name()_:id', { name: ParamValue<true>, id: ParamValue<true> }, { name: ParamValue<false>, id: ParamValue<false> }>,
    '/profile/order/': RouteRecordInfo<'/profile/order/', '/profile/order', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}