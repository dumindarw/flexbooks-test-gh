const supertest = require("supertest");
const app = require("../index")


describe('Integration Tests', () =>  {
    test('root', async () => {
        await supertest(app).get('/').expect(200)
        .then((res) => {
            expect(res.body).toStrictEqual({"message": "Index" })
        });
    });

    test('hello', async () => {
        await supertest(app).get('/hello').expect(200)
        .then((res) => {
            expect(res.body).toStrictEqual({"message": "Hello Githook" })
        });
    });
});
    


