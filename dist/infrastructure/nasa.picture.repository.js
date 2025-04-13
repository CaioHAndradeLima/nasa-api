"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NasaRepository = void 0;
const axios_1 = require("axios");
const nasa_picture_1 = require("../domain/nasa.picture");
const uuid_1 = require("uuid");
const nasa_io_exception_1 = require("../exception/nasa.io.exception");
const result_api_1 = require("../domain/result.api");
const common_1 = require("@nestjs/common");
const invalid_response_code_exception_1 = require("../exception/invalid.response.code.exception");
let NasaRepository = class NasaRepository {
    async findPictures() {
        try {
            const response = await axios_1.default.get(process.env.NASA_URL);
            if (response.status !== 200) {
                return new result_api_1.ResultApi(undefined, new invalid_response_code_exception_1.InvalidResponseCodeException(response.status));
            }
            return new result_api_1.ResultApi(response.data.map((item) => new nasa_picture_1.NasaPicture(item.date, item.explanation, item.title, item.url, item.id ?? (0, uuid_1.v4)())), undefined);
        }
        catch (error) {
            return new result_api_1.ResultApi(undefined, new nasa_io_exception_1.NasaIOException());
        }
    }
};
exports.NasaRepository = NasaRepository;
exports.NasaRepository = NasaRepository = __decorate([
    (0, common_1.Injectable)()
], NasaRepository);
//# sourceMappingURL=nasa.picture.repository.js.map