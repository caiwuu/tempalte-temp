type logType = 'log' | 'info' | 'warn' | 'error'
const log = {
  log: logHelp('log'),
  info: logHelp('info'),
  warn: logHelp('warn'),
  error: logHelp('error'),
}
const colorMap = {
  log: '#67C23A',
  info: '#909399',
  warn: '#E6A23C',
  error: '#F56C6C',
}
function logHelp(type: logType) {
  return function (title: string, detail?: any) {
    if (import.meta.env.PROD) return
    console.log(1234, detail)

    if (!detail) return console[type](title)
    console.group(
      `%c${title}:`,
      `background: ${colorMap[type]}; color: white; padding: 4px; font-weight: bold;`,
    )
    console.table(detail)
    console.groupEnd()
  }
}

export default log
