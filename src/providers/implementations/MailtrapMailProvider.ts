import { 
  IMailProvider,
  IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer' 
import 'dotenv/config'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {

  private transporter:Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: process.env.PORT_MAIL,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}