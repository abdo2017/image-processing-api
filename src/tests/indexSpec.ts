import app from '../index'
import supertest from 'supertest'
import exp from 'constants'
import imageProcess from '../utils/imageProcess'

const request = supertest(app)
describe('testing endpoints', () => {
    //  main route
    describe('checking the main route', () => {
        it('should return 200 status code', async () => {
            const res = await request.get('/')
            expect(res.status).toBe(200)
        })
    })

    // /api route
    describe('checking the api route', () => {
        it('should return 200 status code', async () => {
            const res = await request.get('/api')
            expect(res.status).toBe(200)
        })
    })
    // /api/images route
    describe('checking the main route', () => {
        it('should return 200 status code', async () => {
            const res = await request.get('/api/images')
            expect(res.status).toBe(200)
        })
        //   check for wrong cases
        it('should return a wrong message for filenmae not found', async () => {
            const res = await request.get(
                '/api/images?filename=nothing&width=200&height=200'
            )
            expect(res.text).toBe(
                'file name is not found.. please enter a filename and width and height to resize it'
            )
        })
        //    check for wrong width and height images
        it('should return a wrong message for filenmae not found', async () => {
            const res = await request.get(
                '/api/images?filename=beach&width=nothing&height=nothing'
            )
            expect(res.text).toBe(
                'please enter a width and height parameters to resize the picture...'
            )
        })
    })
    // testing the imageProcess Function
    describe('pass all the tests for the image process function ', () => {
        it('should return a wrong message if the file name is not accessable', async () => {
            const res = await imageProcess('abdelrahman', 200, 200)
            expect(res).toEqual(
                'file name is not found.. please enter a filename and width and height to resize it'
            )
        })
    })
})
