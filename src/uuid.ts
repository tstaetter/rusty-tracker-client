/**
 * Error indicating an invalid UUID
 */
class InvalidUuidError extends Error {
  constructor(m?: string) {
    super(m || "Error: invalid UUID !");

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidUuidError.prototype);
  }

}


/**
 * Class representing UUID
 */
export class UUID
{
  protected m_str: string;

  constructor(str?: string) {
    this.m_str = str || UUID.newUuid().toString();

    let reg:RegExp = new RegExp("[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}", "i")
    if(!reg.test(this.m_str))
      throw new InvalidUuidError();
  }

  toString() {
    return this.m_str;
  }

  public static newUuid(version?:number) :UUID
  {
    version = version || 4;


    // your favourite guid generation function could go here
    // ex: http://stackoverflow.com/a/8809472/188246
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    }
    let uuid:string = ('xxxxxxxx-xxxx-' + version.toString().substr(0,1) + 'xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return new UUID(uuid);
  }
}