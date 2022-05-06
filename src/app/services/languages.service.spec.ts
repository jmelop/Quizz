import { of } from 'rxjs';
import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LanguagesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return Language object', (done: DoneFn) => {

    const languageToSave = {
      id: 3,
      name: 'French'
    }

    const languageResult = {
      "message": "New language created",
      "language": {
        "id": 3,
        "name": "French"
      }
    }

    httpClientSpy.post.and.returnValue(of(languageResult));

    service.saveLanguage(languageToSave).subscribe(result => {
      expect(result).toEqual(languageResult)
      done()
    })

  })
});
