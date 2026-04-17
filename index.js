const binding = require('./binding')

exports.getgid = binding.getgid

exports.setgid = function setgid(id) {
  if (typeof id === 'string') id = exports.getgrnam(id).groupname

  binding.setgid(id)
}

exports.getegid = binding.getegid

exports.setegid = function setegid(id) {
  if (typeof id === 'string') id = exports.getgrnam(id).groupname

  binding.setegid(id)
}

exports.getuid = binding.getuid

exports.geteuid = binding.geteuid

exports.getgroups = binding.getgroups

exports.getgrnam = binding.getgrnam

exports.getpwnam = binding.getpwnam
