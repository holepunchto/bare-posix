const binding = require('./binding')

exports.getgid = binding.getgid

exports.setgid = function setgid(id) {
  if (typeof id === 'string') id = exports.getgrnam(id).gid

  binding.setgid(id)
}

exports.getegid = binding.getegid

exports.setegid = function setegid(id) {
  if (typeof id === 'string') id = exports.getgrnam(id).gid

  binding.setegid(id)
}

exports.getuid = binding.getuid

exports.setuid = function setuid(id) {
  if (typeof id === 'string') id = exports.getpwnam(id).uid

  binding.setuid(id)
}

exports.geteuid = binding.geteuid

exports.seteuid = function seteuid(id) {
  if (typeof id === 'string') id = exports.getpwnam(id).uid

  binding.seteuid(id)
}

exports.getgroups = binding.getgroups

exports.getgrnam = function getgrnam(name) {
  validateNoNullBytes(name, 'name')

  return binding.getgrnam(name)
}

exports.getpwnam = function getpwnam(name) {
  validateNoNullBytes(name, 'name')

  return binding.getpwnam(name)
}

// The name is passed on as a C string, so a NUL would cut it short.
function validateNoNullBytes(value, name) {
  if (typeof value === 'string' && value.includes('\0')) {
    throw new TypeError(`The "${name}" argument must not contain null bytes`)
  }
}
