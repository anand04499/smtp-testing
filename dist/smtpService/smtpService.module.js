"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTPServiceModule = void 0;
const common_1 = require("@nestjs/common");
const smtpService_controller_1 = require("./smtpService.controller");
const smtpService_service_1 = require("./smtpService.service");
const mailer_1 = require("@nestjs-modules/mailer");
let SMTPServiceModule = class SMTPServiceModule {
    constructor() { }
};
exports.SMTPServiceModule = SMTPServiceModule;
exports.SMTPServiceModule = SMTPServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    service: "gmail",
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    logger: true,
                    debug: true,
                    auth: {
                        user: "electricmeteremdee@gmail.com",
                        pass: "qrlo nppr trvn jygf",
                    },
                    tls: {
                        rejectUnauthorized: true,
                    }
                }
            })
        ],
        controllers: [smtpService_controller_1.SMTPServiceController],
        providers: [smtpService_service_1.SMTPService]
    }),
    __metadata("design:paramtypes", [])
], SMTPServiceModule);
//# sourceMappingURL=smtpService.module.js.map