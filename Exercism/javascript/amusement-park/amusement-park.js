/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  let visitorData = {
    name,
    age,
    ticketId
  }
  return visitorData
}

console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'));

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null

  return visitor
}

const visitor = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

console.log(revokeTicket(visitor));

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === null) {
      return "not sold"
    } else if(tickets[ticketId]){
      return `sold to ${tickets[ticketId]}`
    } else {
      return 'unknown ticket id'
    }
}
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

console.log(ticketStatus(tickets, '23LA9T41'))

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'
}

console.log(simpleTicketStatus(tickets, 'RE90VAW7'))

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version
}


const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

console.log(gtcVersion(visitorOld));