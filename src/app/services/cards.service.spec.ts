import { of } from 'rxjs';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new CardsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return Card object', (done: DoneFn) => {

    const cardToSave = {
      spanish: 'Manzana',
      translation: 'Apfel',
      group: 1,
      category: {
        id: 1,
        name: 'Fruit'
      },
      language: {
        id: 2,
        name: 'German'
      },
      favorite: true
    }

    const cardResult = {
      "message": "New card created",
      "card": {
        "id": 11,
        "spanish": "Manzana",
        "translation": "Apfel",
        "group": 1,
        "category": {
          "id": 1,
          "name": "Fruit"
        },
        "language": {
          "id": 1,
          "name": "German"
        },
        "createAt": "2022-05-08T20:46:50.795+00:00",
        "favorite": true
      }
    }

    httpClientSpy.post.and.returnValue(of(cardResult));

    service.post(cardToSave).subscribe(result => {
      expect(result).toEqual(cardResult)
      done()
    })

  })
});
