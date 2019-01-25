/**
 *
 * @param {String} agentName
 * @param {String} description
 * @param {String} language
 * @param {[String]} fallbackResponses
 */
export function agentSchema (
  agentName,
  description,
  language,
  fallbackResponses
) {
  return {
    agentName,
    description,
    language,
    fallbackResponses
  };
}

/**
 *
 * @param {String} actionName
 * @param {String} description
 * @param {[String]} templates
 */
export function actionSchema (
  actionName,
  description,
  templates
) {
  return {
    actionName,
    description,
    templates
  };
}

/**
 *
 * @param {Number} agentID
 * @param {String} domainName
 * @param {Number} intentThreshold
 */
export function domainSchema (agentID, domainName, intentThreshold) {
  return { agentID, domainName, intentThreshold };
}

/**
 *
 * @param {Number} agentID
 * @param {Number} domainID
 * @param {String} intentName
 * @param {exampleIntentSchema} examples
 */
export function intentSchema (agentID, domainID, intentName, examples) {
  return {
    agentID,
    domainID,
    intentName,
    examples
  };
}

/**
 *
 * @param {String} userSays
 * @param {intentEntitySchema} entities
 */
export function exampleIntentSchema (userSays, entities = []) {
  return {
    userSays,
    entities
  };
}

/**
 *
 * @param {Number} end
 * @param {String} value
 * @param {String} entity
 * @param {Number} entityID
 * @param {String} extractor
 */
export function intentEntitySchema (end, value, entity, entityID, extractor) {
  return {
    end,
    value,
    entity,
    entityID,
    extractor
  };
}
