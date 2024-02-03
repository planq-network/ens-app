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
    ensAddress: '0x451098F7c22b7404450293D82853596052D79FaF',
  },
  ensAddress
}) {
  let option = {
    reloadOnAccountsChange: false,
    enforceReadonly: enforceReadOnly,
    enforceReload: enforceReload,
    customProvider: customProvider,
    customNetwork: customNetwork,
    ensAddress: ensAddress
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
