import { NgModule } from '@angular/core';
import { PublicationDurationPipe } from './publicationDuration';
import { TranslaterPipe } from './translater';

@NgModule({
    imports: [],
    declarations: [
        PublicationDurationPipe,
        TranslaterPipe
    ],
    exports: [
        PublicationDurationPipe,
        TranslaterPipe
    ],
})

export class PipeModule {

    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}
