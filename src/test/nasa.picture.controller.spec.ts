import {Test, TestingModule} from '@nestjs/testing';
import {FetchNasaPicturesUseCase} from '../application/fetch.nasa.pictures.use.case';
import {Response} from 'express';
import {HttpStatus} from '@nestjs/common';
import {NasaPicture} from '../domain/nasa.picture';
import {NasaRepository} from '../infrastructure/nasa.picture.repository';
import {NasaPictureController} from "../presentation/nasa.picture.controller";
import {Presentation} from "../application/presentation";
import {toPresentation} from "../application/presentation.convert";

// Mock dependencies
describe('NasaPictureController', () => {
    let controller: NasaPictureController;
    let fetchPicturesUseCase: jest.Mocked<FetchNasaPicturesUseCase>;
    let nasaRepository: jest.Mocked<NasaRepository>;

    beforeEach(async () => {
        nasaRepository = {
            findPictures: jest.fn(),
        } as jest.Mocked<NasaRepository>;

        fetchPicturesUseCase = {
            invoke: jest.fn(),
            nasaRepository,
        } as any;

        const module: TestingModule = await Test.createTestingModule({
            controllers: [NasaPictureController],
            providers: [
                {
                    provide: FetchNasaPicturesUseCase,
                    useValue: fetchPicturesUseCase,
                },
            ],
        }).compile();

        controller = module.get<NasaPictureController>(NasaPictureController);
    });

    it('should return a list of pictures', async () => {
        const mockPictures: NasaPicture[] = [
            {
                id: '1',
                date: '2025-03-19',
                title: 'Test Picture',
                explanation: 'Test explanation',
                url: 'http://example.com',
            },
        ];

        const mockPresentation = new Presentation(
            mockPictures, undefined
        )

        fetchPicturesUseCase.invoke.mockResolvedValue(mockPresentation);

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;

        await controller.create({} as any, response);

        expect(fetchPicturesUseCase.invoke).toHaveBeenCalled();
        expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
        expect(response.json).toHaveBeenCalledWith(toPresentation(mockPresentation).body);
    });

    it('should handle errors gracefully', async () => {
        // Mock the service call to throw an error
        fetchPicturesUseCase.invoke.mockRejectedValue(new Error('Something went wrong'));

        // Simulate the HTTP request and response
        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;

        // Call the controller method
        await controller.create({} as any, response);

        // Verify that the response status is INTERNAL_SERVER_ERROR
        expect(response.status).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
    });
});
