/**
 *
 * @param {String} agentName
 * @param {String} description
 */
export function agentSchema (agentName, description, domains = []) {
  return {
    agentName,
    description,
    domains
  };
}

/**
 *
 * @param {String} agentID
 * @param {String} domainName
 */
export function domainSchema (agentID, domainName) {
  return { agentID, domainName };
}

/**
 *
 * @param {String} domainID
 * @param {String} intentName
 * @param {[String]} userSays
 */
export function intentSchema (domainID, intentName, userSays = []) {
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
export function storySchema (
  domainID,
  storyName,
  intents = [],
  actions = [],
  sequences = []
) {
  return { domainID, storyName, intents, actions, sequences };
}
