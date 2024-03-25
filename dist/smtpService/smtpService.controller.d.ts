import { SMTPService } from "./smtpService.service";
export declare class SMTPServiceController {
    private readonly smtpService;
    constructor(smtpService: SMTPService);
    sendMail(data: any): Promise<string>;
}
