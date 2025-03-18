import app, { start } from "../app"
import request from 'supertest'

describe('profile router test', () => {
    describe('/profile endpoint test', () => {
        // test akk the exceptions before...
        test('it should return an array of posts', async () => {
            await start()
            const result = await request(app).get('/profile')
            expect(result.statusCode).toBe(200)
        })
    })
})