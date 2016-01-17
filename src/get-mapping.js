'use strict';

const mappingTable = require('./mapping.json');

export function getMapping (id, mapping) {
  if (mapping === 'standard') {
    return mappingTable.standard;
  }

  var deviceMap = mappingTable[`${id}-${mapping}`];
  if (!deviceMap) {
    deviceMap = mappingTable[mapping];
  }
  if (!deviceMap) {
    deviceMap = mappingTable.standard;
  }

  return deviceMap;
}