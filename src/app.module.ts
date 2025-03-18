import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {NasaPictureModule} from "@/presentation/nasa_picture_module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        NasaPictureModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}