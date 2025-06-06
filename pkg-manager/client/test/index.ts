/// <reference path="../../../__typings__/index.d.ts"/>
import { createClient, createResolver } from '@pnpm/client'

test('createClient()', () => {
  const client = createClient({
    authConfig: { registry: 'https://registry.npmjs.org/' },
    cacheDir: '',
    rawConfig: {},
    registries: {
      default: 'https://reigstry.npmjs.org/',
    },
  })
  expect(typeof client === 'object').toBeTruthy()
})

test('createResolver()', () => {
  const { resolve } = createResolver({
    authConfig: { registry: 'https://registry.npmjs.org/' },
    cacheDir: '',
    rawConfig: {},
    registries: {
      default: 'https://reigstry.npmjs.org/',
    },
  })
  expect(typeof resolve === 'function').toBeTruthy()
})
