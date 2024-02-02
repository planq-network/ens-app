import { setupENS } from '@ensdomains/ui'
import { isENSReadyReactive } from '../reactiveVars'

let ens = {},
  registrar = {},
  ensRegistryAddress = undefined

export async function setup({
  reloadOnAccountsChange,
  enforceReadOnly,
  enforceReload,
  customProvider,
  customNetwork =  {
    chainId: 7070,
    name: 'Planq',
    ensAddress: '0xF02135bdE2C85F6F0909438ed631f3eb36203e72',
  },
  ensAddress
}) {
  let option = {
    reloadOnAccountsChange: false,
    enforceReadOnly,
    enforceReload,
    customProvider,
    customNetwork,
    ensAddress
  }
  const {
    ens: ensInstance,
    registrar: registrarInstance,
    providerObject
  } = await setupENS(option)
  ens = ensInstance
  registrar = registrarInstance
  ensRegistryAddress = ensAddress
  isENSReadyReactive(true)
  return { ens, registrar, providerObject }
}

export function getRegistrar() {
  return registrar
}

export function getEnsAddress() {
  return ensRegistryAddress
}

export default function getENS() {
  return ens
}
