/**
 * @typedef {Object} Task
 * @property {boolean} completed
 * @property {number} id
 * @property {string} title
 * @property {number} userId
 */

class Task {
  constructor() {
    this.completed = false;
    this.id = 0;
    this.title = '';
    this.userId = 0;
  }
}

export default Task;
