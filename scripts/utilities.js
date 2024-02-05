/**
 * A file for storing helpful functions.
 * Use it for those which do not directly belong
 * to anything else
 *
 * Might I suggest you create a function for generating
 * random IDs?
 * Something ala:
 * @typedef {() => number} GenerateId
 */

// let id = 0;
// export function createUniqueId() {
//   const newId = id++;
//   return newId;
// }

/* ------------------ Create Date For CreatedAt Or EditedAt ----------------- */
export function timeStamp() {
  const time = new Intl.DateTimeFormat("no-NO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
  return time;
}
