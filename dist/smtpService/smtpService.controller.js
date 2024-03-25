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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTPServiceController = void 0;
const common_1 = require("@nestjs/common");
const smtpService_service_1 = require("./smtpService.service");
let SMTPServiceController = class SMTPServiceController {
    constructor(smtpService) {
        this.smtpService = smtpService;
    }
    sendMail(data) {
        let email = data.email;
        let pdfData = data.apiData;
        let name = data.name;
        let fromDate = data.fromDate;
        let toDate = data.toDate;
        return this.smtpService.sendPdfMail(email, pdfData, name, fromDate, toDate);
    }
};
exports.SMTPServiceController = SMTPServiceController;
__decorate([
    (0, common_1.Post)("/sendMail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SMTPServiceController.prototype, "sendMail", null);
exports.SMTPServiceController = SMTPServiceController = __decorate([
    (0, common_1.Controller)('mailer'),
    __metadata("design:paramtypes", [smtpService_service_1.SMTPService])
], SMTPServiceController);
//# sourceMappingURL=smtpService.controller.js.map