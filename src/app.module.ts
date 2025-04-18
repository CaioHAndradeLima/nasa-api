import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {NasaPictureModule} from "./presentation/picture/nasa.picture.module";
import {HealthModule} from "./presentation/health/health.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        NasaPictureModule, HealthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}