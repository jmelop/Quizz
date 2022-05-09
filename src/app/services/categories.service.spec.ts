import { of } from 'rxjs';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new CategoriesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return Category object', (done: DoneFn) => {

    const categoryToSave = {
      id: 3,
      name: 'Animals'
    }

    const categoryResult = {
      "message": "New category created",
      "category": {
        "id": 3,
        "name": "Animals"
      }
    }

    httpClientSpy.post.and.returnValue(of(categoryResult));

    service.saveCategory(categoryToSave).subscribe(result => {
      expect(result).toEqual(categoryResult)
      done()
    })

  })
});
