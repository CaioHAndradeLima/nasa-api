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
exports.NasaPictureController = void 0;
const common_1 = require("@nestjs/common");
const fetch_nasa_pictures_use_case_1 = require("../application/fetch.nasa.pictures.use.case");
const request_convert_1 = require("./request.convert");
let NasaPictureController = class NasaPictureController {
    fetchPicturesUseCase;
    constructor(fetchPicturesUseCase) {
        this.fetchPicturesUseCase = fetchPicturesUseCase;
    }
    async create(req, response) {
        try {
            return (0, request_convert_1.toRequest)(response, await this.fetchPicturesUseCase.invoke());
        }
        catch (exception) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json();
        }
    }
};
exports.NasaPictureController = NasaPictureController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object]),
    __metadata("design:returntype", Promise)
], NasaPictureController.prototype, "create", null);
exports.NasaPictureController = NasaPictureController = __decorate([
    (0, common_1.Controller)('picture'),
    __metadata("design:paramtypes", [fetch_nasa_pictures_use_case_1.FetchNasaPicturesUseCase])
], NasaPictureController);
//# sourceMappingURL=nasa.picture.controller.js.map