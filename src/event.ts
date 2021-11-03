import { Identifier } from "./identifier";

/**
 * Interface needs to be included in any event object
 */
export interface Event {
  /**
   * Return events creation timestamp
   */
  created_at() : Date;

  /**
   * Return the event's ID
   */
  id() : Identifier;
}