import { InjectionToken } from "@angular/core";
import { MessageCreator } from "./message-creator";

export const MESSAGE_CREATOR_TOKEN = new InjectionToken<MessageCreator>('MESSAGE_CREATOR_TOKEN')
