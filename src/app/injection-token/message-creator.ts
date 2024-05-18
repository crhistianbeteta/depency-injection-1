export interface MessageCreator {
  info(message: string): string
  error(message: string): string
  warning(message: string): string
}


export class IconMessageCreator implements MessageCreator {
  info(message: string): string {
    return `⛿ INFO: ${message}`
  }
  error(message: string): string {
    return `⛔ ERROR: ${message}`
  }
  warning(message: string): string {
    return `⚠ WARNING: ${message}`
  }

}


export class DateMessageCreator implements MessageCreator {

  private getDate(): string {
    return new Date().toISOString();

  }
  info(message: string): string {
    return `${this.getDate()} INFO: ${message}`
  }
  error(message: string): string {
    return `${this.getDate()} ERROR: ${message}`
  }
  warning(message: string): string {
    return `${this.getDate()} WARNING: ${message}`
  }

}
