import { Test, TestingModule } from '@nestjs/testing';
import { NasaRepository } from '../infrastructure/nasa.picture.repository';
import { NasaPicture } from '../domain/nasa.picture';
import {FetchNasaPicturesUseCase} from "../application/fetch.nasa.pictures.use.case";
import {Presentation} from "../application/presentation";
import {toPresentation} from "../application/presentation.convert";
import {ResultApi} from "../domain/result.api";

// Mock dependencies
describe('FetchNasaPicturesUseCase', () => {
    let useCase: FetchNasaPicturesUseCase;
    let nasaRepository: jest.Mocked<NasaRepository>;

    beforeEach(() => {
        // Manually mocking the methods of NasaRepository
        nasaRepository = {
            findPictures: jest.fn(),
        } as jest.Mocked<NasaRepository>;

        // Instantiating the use case with the mocked repository
        useCase = new FetchNasaPicturesUseCase(nasaRepository);
    });

    it('should return mock data from the repository', async () => {
        const mockPictures: NasaPicture[] = [
            {
                id: '1',
                date: '2025-03-19',
                title: 'Test Picture',
                explanation: 'Test explanation',
                url: 'http://example.com',
            },
        ];

        const resultMock = new ResultApi(mockPictures, undefined)
        // Mocking the repository method to return mock data
        nasaRepository.findPictures.mockResolvedValue(resultMock);

        // Call the use case
        const result: Presentation<NasaPicture[]> = await useCase.invoke();

        // Verify that the repository method was called
        expect(nasaRepository.findPictures).toHaveBeenCalled();

        // Verify the result
        expect(result).toEqual(toPresentation(resultMock));
    });
});
