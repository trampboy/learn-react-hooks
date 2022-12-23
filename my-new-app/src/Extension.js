import plugins from 'js-plugin'

/**
 * Created by JingHongGang on 2022/12/23.
 */
export default function Extension({name, ...args}) {
  return plugins.invoke(name, args)
}