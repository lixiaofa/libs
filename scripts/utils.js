/*
<<<<<<< HEAD
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2021-07-15 11:58:59
 * @LastEditTime: 2021-07-15 15:58:37
 * @LastEditors: 司马老贼
=======
 * @Descripttion: 
 * @Date: 2021-07-06 14:51:00
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-09 20:52:36
 * @Author: Sima thief
>>>>>>> 1830bb18d808e5007bbdb3c162001392a084075d
 */
const fs = require('fs')
const chalk = require('chalk')

const targets = (exports.targets = fs.readdirSync('packages').filter(f => {
  console.log('f1111' , f)
  if (!fs.statSync(`packages/${f}`).isDirectory()) {
    return false
  }
  
  const pkg = require(`../packages/${f}/package.json`)
  if (pkg.private && !pkg.buildOptions) {
    return false
  }
  return true
}))

exports.fuzzyMatchTarget = (partialTargets, includeAllMatching) => {
  const matched = []
  partialTargets.forEach(partialTarget => {
    for (const target of targets) {
      if (target.match(partialTarget)) {
        matched.push(target)
        if (!includeAllMatching) {
          break
        }
      }
    }
  })
  if (matched.length) {
    return matched
  } else {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `Target ${chalk.underline(partialTargets)} not found!`
      )}`
    )
    console.log()

    process.exit(1)
  }
}
