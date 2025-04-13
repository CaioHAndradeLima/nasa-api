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
exports.FetchNasaPicturesUseCase = void 0;
const presentation_convert_1 = require("./presentation.convert");
const nasa_picture_repository_1 = require("../infrastructure/nasa.picture.repository");
const common_1 = require("@nestjs/common");
let FetchNasaPicturesUseCase = class FetchNasaPicturesUseCase {
    nasaRepository;
    constructor(nasaRepository) {
        this.nasaRepository = nasaRepository;
    }
    async invoke() {
        return (0, presentation_convert_1.toPresentation)(await this.nasaRepository.findPictures());
    }
};
exports.FetchNasaPicturesUseCase = FetchNasaPicturesUseCase;
exports.FetchNasaPicturesUseCase = FetchNasaPicturesUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nasa_picture_repository_1.NasaRepository])
], FetchNasaPicturesUseCase);
//# sourceMappingURL=fetch.nasa.pictures.use.case.js.map