import { fileUpload } from "../../helpers/fileUpload";


describe('pruebas en fileUpload', () => {
  
    test('debe de cargar un archivo y retornar el URL', async() => {
        
        const resp = await fetch('https://res.cloudinary.com/ultracloud/image/upload/v1642712750/1366_2000_at1nt6.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');
        expect( url.length ).toBeGreaterThan(0);    
        

    });
    

    
    test('debe de cargar un archivo y retornar el URL', async() => {
        

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );

        expect(  url ).toBe(null);
            
        

    });



});
