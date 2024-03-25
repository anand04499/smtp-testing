/// <reference types="node" />
import { MailerService } from '@nestjs-modules/mailer';
export declare class SMTPService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendPdfMail(email: string, apiData: any, name: string, fromDate: any, toDate: any): Promise<string>;
    generateHtmlContent(apiData: any, columns: any, fromDate: any, toDate: any, name: string): Promise<string>;
    generatePdfBuffer(htmlContent: string): Promise<Buffer>;
}
