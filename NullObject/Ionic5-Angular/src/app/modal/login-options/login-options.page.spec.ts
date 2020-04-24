import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginOptionsPage } from './login-options.page';

describe('LoginOptionsPage', () => {
  let component: LoginOptionsPage;
  let fixture: ComponentFixture<LoginOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
