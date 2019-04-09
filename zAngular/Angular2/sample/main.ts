===========  main.ts ===========
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

We import the two things we need to launch the application:
Angular's browser platformBrowserDynamic function and the application module, AppModule.
Then we call platformBrowserDynamic().bootstrapModule with AppComponent.

Tell Angular to load the app module. 
We launch an application by bootstrapping its root module. 
During development we're likely to bootstrap the AppModule in a main.ts file.
