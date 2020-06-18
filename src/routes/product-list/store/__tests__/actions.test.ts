import { setItemsData } from '../actions';
import { SET_ITEMS_DATA } from '../constants';

describe('ListItems Actions', () => {
  it('deve retornar a action com o type e payload corretamente.', () => {
    const mockData = [
      { id: '1', brand: '', name: 'name', amount: '1.5', qtd: '13', unit: 'g' },
    ];

    const result = setItemsData(mockData);

    expect(result).toEqual({
      type: SET_ITEMS_DATA,
      payload: {
        itemsData: mockData,
      },
    });
  });
});
