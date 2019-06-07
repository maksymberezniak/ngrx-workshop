import * as todoActions from './to-do.actions';
import { todoReducer } from './to-do.reducer';

describe(`companyReducer`, () => {
    describe(`deleteTodoAction`, () => {
        it(`should delete a company`, () => {
            const currentState = [
                {
                    asignee: 'Keenan Quitzon III',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg',
                    description: 'Totam quis consequatur doloremque ut dolores est.',
                    email: 'Thelma89@yahoo.com',
                    id: 10,
                    priority: 'high',
                    stage: 'waiting'
                },
                {
                    asignee: 'Qeenan Quitzon II',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg',
                    description: 'Totam quis consequatur.',
                    email: 'Thelma89@yahoo.com',
                    id: 11,
                    priority: 'high',
                    stage: 'waiting'
                }
            ];

            const expectedResult = [
                {
                    asignee: 'Qeenan Quitzon II',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg',
                    description: 'Totam quis consequatur.',
                    email: 'Thelma89@yahoo.com',
                    id: 11,
                    priority: 'high',
                    stage: 'waiting'
                }
            ];

            const action = new todoActions.DeleteTodoAction(10);
            const result = todoReducer(currentState, action);
            expect(result).toEqual(expectedResult);
        });
    });
});
