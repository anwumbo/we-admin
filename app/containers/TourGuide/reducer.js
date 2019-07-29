import produce from 'immer';

export const initialState = {
  loading: false,
  listTourGuide: [
    {
      id: '1',
      title: 'Wumbo',
      forResident: '1',
      status: '1',
      image: 'image',
    },
    {
      id: '2',
      title: 'Wumbo',
      forResident: '1',
      status: '1',
      image: 'image',
    },
    {
      id: '3',
      title: 'Wumbo',
      forResident: '1',
      status: '1',
      image: 'image',
    },
    {
      id: '4',
      title: 'Wumbo',
      forResident: '1',
      status: '1',
      image: 'image',
    },
    {
      id: '5',
      title: 'Wumbo',
      forResident: '1',
      status: 0,
      image: 'image',
    },
  ],
  pagination: {
    totalPages: 1,
    currentPage: 1,
  },
};

const tourGuideReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default tourGuideReducer;
