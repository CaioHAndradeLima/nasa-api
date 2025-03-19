"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NasaPictureModule = void 0;
const common_1 = require("@nestjs/common");
const fetch_nasa_pictures_use_case_1 = require("../application/fetch.nasa.pictures.use.case");
const nasa_picture_repository_1 = require("../infrastructure/nasa.picture.repository");
const nasa_picture_controller_1 = require("./nasa.picture.controller");
let NasaPictureModule = class NasaPictureModule {
};
exports.NasaPictureModule = NasaPictureModule;
exports.NasaPictureModule = NasaPictureModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            nasa_picture_repository_1.NasaRepository,
            fetch_nasa_pictures_use_case_1.FetchNasaPicturesUseCase,
        ],
        controllers: [nasa_picture_controller_1.NasaPictureController],
    })
], NasaPictureModule);
//# sourceMappingURL=nasa.picture.module.js.map