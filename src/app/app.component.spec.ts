import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// JasmineJS
// Group of Test Specs
describe('AppComponent', () => {
  // Before each test case running -- the following would be executed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Test Spec
  it('should create the app', () => {
    // taking the unit / component for testing
    const fixture = TestBed.createComponent(AppComponent);
    // creating component instance for testing
    const app = fixture.componentInstance;
    // Create an expectation for a spec.
    expect(app).toBeTruthy();
  });

  // Test Spec
  it(`should have as title 'my-unit-testing'`, () => {
    // taking the unit / component for testing
    const fixture = TestBed.createComponent(AppComponent);
    // creating component instance for testing -- comp.ts would be tested
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-unit-testing!');
  });

  // Test Spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     // taking the comp.html for testing
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-unit-testing! app is running!');
  });

  it('should have welcome text in h1', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     // taking the comp.html for testing
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Welcome');
  });

  it('should add two numbers', () =>{
     // taking the unit / component for testing
     const fixture = TestBed.createComponent(AppComponent);
     // creating component instance for testing -- comp.ts would be tested
     const app = fixture.componentInstance;
     expect(app.add(10, 20)).toEqual(30);
     expect(app.add(1, 2)).toEqual(3);
     expect(app.add(100, 200)).toEqual(300);
  });


});
