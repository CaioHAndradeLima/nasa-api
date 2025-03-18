import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import 'dotenv';
import {BadRequestException, ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        disableErrorMessages: false,
        exceptionFactory: (errors) => {
            console.log(errors);
            return new BadRequestException(errors);
        }
    }));


    await app.listen(3000);
}

bootstrap();