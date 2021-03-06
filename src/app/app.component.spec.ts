import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatListModule, MatCardModule } from '@angular/material';
import { BroadcastService, MsalService, MsalAngularConfiguration } from '@azure/msal-angular';
import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { Configuration } from 'msal';
import { msalConfig, apiConfig, isIE } from './config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatCardModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MsalService,
        {
          provide: MSAL_CONFIG,
          useValue: msalConfig as Configuration
        },
        {
          provide: MSAL_CONFIG_ANGULAR,
          useValue: {
            popUp: !isIE,
            consentScopes: apiConfig.b2cScopes,
            unprotectedResources: [],
            protectedResourceMap: [
              [apiConfig.webApi, apiConfig.b2cScopes],
          ],
          } as MsalAngularConfiguration
        },
        BroadcastService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Azure AD B2C'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Azure AD B2C');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Azure AD B2C');
  });
});
