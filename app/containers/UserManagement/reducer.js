import produce from 'immer';

export const initialState = {
  loading: false,
  users: [
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asssadasdet',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asssadasdet',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asset',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
    {
      avatar: 'asssadasdet',
      fullName: 147,
      email: 'aabd@gmail.com',
      role: 'Appliances',
      status: '1',
      bod: '27/3/2019',
    },
  ],
  pagination: {
    totalPages: 1,
    currentPage: 1,
  },
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default userReducer;
