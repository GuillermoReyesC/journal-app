import {types} from '../../types/types';


describe('pruebas en types', () => {
  
    test('should debe tener estos types', () => {

        expect( types ).toEqual({
            login: '[auth] Login',
            logout: '[auth] Logout',
            register: '[auth] Register',


            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set Active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Update notes',
            notesDelete: '[Notes] Delete notes',
            notesFileUrl: '[Notes] Update image URL',
            notesLogoutCleaning: '[Notes] Logout Cleaning',

        });



});

});

