import { Event } from "./event";

/**
 * Event queue stores all incoming events and sends them
 * to server async'ly
 */
export class EventQueue {
  push(event: Event) : boolean {
    console.log(event);
    return false;
  }

  send() : boolean {
    return false;
  }
}