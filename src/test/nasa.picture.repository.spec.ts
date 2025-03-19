import axios from "axios";
import {NasaRepository} from "src/infrastructure/nasa.picture.repository";
import {ResultApi} from "src/domain/result.api";
import {NasaPicture} from "src/domain/nasa.picture";
import {NasaIOException} from "src/exception/nasa.io.exception";
import {InvalidResponseCodeException} from "../exception/invalid.response.code.exception";

jest.mock("axios");

describe("NasaRepository", () => {
    let nasaRepository: NasaRepository;

    beforeEach(() => {
        nasaRepository = new NasaRepository();
        jest.clearAllMocks();
    });

    it("when api request was success should return correct information", async () => {
        const mockResponse = {
            status: 200,
            data: [
                {
                    date: "2025-03-19",
                    explanation: "space image",
                    title: "Space",
                    url: "https://example.com/image.jpg",
                    id: "12345",
                },
            ],
        };

        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const result = await nasaRepository.findPictures();

        expect(result).toBeInstanceOf(ResultApi);
        expect(result.body).toHaveLength(1);
        expect(result.body).toBeInstanceOf(Array);
        expect(result.body?.at(0)).toBeInstanceOf(NasaPicture);
        expect(result.body?.at(0)?.date).toEqual("2025-03-19");
        expect(result.error).toBeUndefined();
    });

    it("when returned error != 200 should return InvalidResponseCodeException", async () => {
        const mockResponse = { status: 500, data: {} };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        const result = await nasaRepository.findPictures();

        expect(result).toBeInstanceOf(ResultApi);
        expect(result.body).toBeUndefined();
        expect(result.error).toBeInstanceOf(InvalidResponseCodeException);
    });

    it("when occur exception scenario should return NasaIOException", async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

        const result = await nasaRepository.findPictures();

        expect(result).toBeInstanceOf(ResultApi);
        expect(result.body).toBeUndefined();
        expect(result.error).toBeInstanceOf(NasaIOException);
    });
});
