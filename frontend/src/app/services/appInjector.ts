import { Injector } from '@angular/core';

export class AppInjector {

    private static _injector: Injector;

    public static set injector(injector: Injector) {
        this._injector = injector;
    }

    public static get injector(): Injector {
        return this._injector;
    }
}