import sys
import os
import string
import glob

import optparse
import subprocess
import shlex
import time
import getopt

import pprint

def clean(s):
  return s.replace('""', "'").replace('"', "").replace('  ', ' ').strip()

TARGET1 = 'const AT_COMMAND_MAP = {'
TARGET2 = '};'

def ATCommandsToObject(commands):

  def getKeyboardCommands(data, command, mode, at):
    i = data.find(mode)
    if i > 0:
      if commandsObj.get(command) == None:
        commandsObj[command] = {}

      if commandsObj[command].get(mode) == None:
        commandsObj[command][mode] = {}

      i = data.find(at, i+1)
      if i > 0:
        i = commandData.find('[', i+1)
        if i > 0:
          i += 1
          j = commandData.find(']', i)
          if j > 0:
            keys = commandData[i:j].strip()
            commandsObj[command][mode][at] = []
            for k in keys.split(','):
              k = k.strip()
              if len(k):
                commandsObj[command][mode][at].append(k)

            for k in commandsObj[command][mode][at]:
              print('[reading][' + command + '][' + mode + '][' + at + ']: ' + k)
            return

    print('[reading][' + command + '][' + mode + '][' + at + ']: not found')

  commandsObj = {}

  a = commands.split(TARGET1)
  before = a[0] + TARGET1
  commands = a[1]
  if len(commands) > 0:
    b = commands.find(TARGET2, len(before) + 1)
    after = commands[b:]
    commands = commands[0:b]

    i = 0
    j = 0;
    while i >= 0:

      i = commands.find('"', j)
      if i > 0:
        j = commands.find('"', i+1)
        print()
        if j > 0:
          j += 1
          command = commands[i+1:j-1]
          commandsObj[command] = {}
          k = commands.find('"', j)
          if k < 0:
            k = len(commands) - 1

          commandData = commands[j+1:k-1]

          getKeyboardCommands(commandData, command, 'reading', 'jaws')
          getKeyboardCommands(commandData, command, 'reading', 'nvda')
          getKeyboardCommands(commandData, command, 'reading', 'voiceover')
          getKeyboardCommands(commandData, command, 'interaction', 'jaws')
          getKeyboardCommands(commandData, command, 'interaction', 'nvda')
          getKeyboardCommands(commandData, command, 'interaction', 'voiceover')

  return [before, commands, after, commandsObj]


if len(sys.argv) != 2:
  print('usage: python create-at-commands.py [at-commands.csv]')
  exit()

ccf = open(os.path.join('../../resources/', 'at-commands.mjs'), 'r')
newCommands = ccf.read()

newCommands = ATCommandsToObject(newCommands)
newCommandsCSV = open(sys.argv[1], 'r')
count = 0
commands = ''
command = ''
lastCommand = 'x'

for row in newCommandsCSV:
  cells = row.split(',')

  if count > 1:
    command = clean(cells[1])
    if command != lastCommand:
      print()

    mode = clean(cells[2])
    at = clean(cells[3])

    nc = newCommands[3]

    if nc.get(command) == None:
      nc[command] = {}

    if nc[command].get(mode) == None:
      nc[command][mode] = {}

    if nc[command][mode].get(at) == None:
      nc[command][mode][at] = []

    i = 4
    key = clean(cells[i])
    while len(key):

      space = key.find(' ');
      if space >= 0:
        key = "`${keys." + key[0:space] + "}" + key[space:] + "`"
      else:
        key = 'keys.' + key

      nc[command][mode][at].append(key)
      print ('[adding][' + command + '][' + mode + '][' + at + ']: ' + key)
      i += 1
      key = clean(cells[i])

  lastCommand = command
  count += 1

ncStr = '\n'
for command in nc:
  ncStr += '  "' + command + '": {\n'

  for mode in nc[command]:
    ncStr += '    ' + mode + ': {\n'

    for at in nc[command][mode]:
      ncStr += '      ' + at + ': [\n'
      flag = False
      for key in nc[command][mode][at]:
        ncStr += '        ' + key + ',\n'
        flag = True

      if flag:
        ncStr = ncStr[:-2] + '\n      ],\n'
      else:
        ncStr = ncStr[:-1] + '],\n'

    ncStr = ncStr[:-2] + '\n    },\n'
  ncStr = ncStr[:-2] + '\n  },\n'
ncStr = ncStr[:-2] + '\n'

ncf = open('at-commands.mjs', 'w')
ncf.write(newCommands[0]+ncStr+newCommands[2])
ncf.close()
