import { Service, ServiceBroker, Context } from 'moleculer';
import { MessageType } from './@types/message.type'

export default class UserService extends Service {
  public constructor(broker: ServiceBroker){
    super(broker);
    this.parseServiceSchema({
      name: 'user',
      actions: {
        hello: {
          rest: {
            method: 'GET',
            path: '/hello'
          },
          async handler(): Promise<MessageType> {
            return this.ActionHello();
          }
        }
      },
      methods: {
        ActionHello(): MessageType {
          return { message: 'Bem vindo'}
        }
      }
    })
  }
}