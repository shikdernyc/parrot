/**
 *
 * @param {String} agentName
 * @param {String} description
 */
export function agentSchema (agentName, description) {
  return {
    agentName,
    description
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
 */
export function domainSchema (agentID, domainName) {
  return { agentID, domainName };
}

/**
 *
 * @param {String} domainID
 * @param {String} actionName
 * @param {String} agentResponse
 */
export function actionSchema (domainID, actionName, agentResponse) {
  return {
    domainID,
    actionName,
    agentResponse
  };
}

/**
 *
 * @param {String} domainID
 * @param {String} intentName
 * @param {[String]} userSays
 */
export function intentSchema (domainID, intentName, userSays) {
  return {
    domainID,
    intentName,
    userSays
  };
}

/**
 *
 * @param {String} domainID
 * @param {String} storyName
 * @param {[id]} intents
 * @param {[id]} actions
 * @param {[STRING_ENUM(Intent | Action)]} sequences
 */
export function storySchema (domainID, storyName, intents, actions, sequences) {
  return { domainID, storyName, intents, actions, sequences };
}
