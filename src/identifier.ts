import { UUID } from "./uuid";

/**
 * Interface user identifier
 */
export interface Identifier {
  /**
   * Anonymous ID generated on first visit
   */
  anonymous_id(): UUID;

  /**
   * User ID provided if user is identified
   */
  user_id(): String;
}