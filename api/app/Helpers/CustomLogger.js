const Logger = use('Logger')

function _log(level, msg, tabSize){
  Logger[level](`${tabSize}${new Date().toLocaleString()} - ${msg}`)
}

class CustomLogger {

  debug(msg){
    _log('debug', msg, '  ')
  }

  info(msg){
    _log('info', msg, '   ')
  }

  notice(msg){
    _log('notice', msg, ' ')
  }

  warning(msg){
    _log('warning', msg, '')
  }

  error(msg){
    _log('error', msg, '  ')
  }

  crit(msg){
    _log('crit', msg, '   ')
  }

  alert(msg){
    _log('alert', msg, '  ')
  }

  emerg(msg){
    _log('emerg', msg, '  ')
  }
}

global.logger = new CustomLogger()
