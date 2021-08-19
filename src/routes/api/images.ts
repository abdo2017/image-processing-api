import express, { Router } from 'express'
import path from 'path'
import sharp from 'sharp'
import isAccessable from '../../utils/isAccessable'
import imageProcess from '../../utils/imageProcess'

const routes = Router()

// the endpoint for resizing the image..
routes.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        // catching parameters values..
        const queryFilename: string = req.query.filename as unknown as string
        const queryWidth: number = parseInt(
            req.query.width as unknown as string
        )
        const queryHeight: number = parseInt(
            req.query.height as unknown as string
        )

        const imagePath: string = path.resolve(
            './',
            'assets',
            'full',
            queryFilename + '.jpg'
        )
        const outputImagePath: string = path.resolve(
            './',
            'assets',
            'thumb',
            queryFilename + queryWidth + '-' + queryHeight + '.jpg'
        )

        const outputImagePathDir: string = path.resolve('./', 'assets', 'thumb')
        const newImageFullPath: string =
            outputImagePathDir +
            queryFilename +
            queryWidth +
            '-' +
            queryHeight +
            '.jpg'
        // check if the picture has resized before and return it
        if (await isAccessable(newImageFullPath)) {
            res.status(200).sendFile(newImageFullPath)
        }
        const result: string | void = await imageProcess(
            queryFilename,
            queryWidth,
            queryHeight
        )
        if (result) {
            res.send(result)
        }
        res.status(200).sendFile(outputImagePath)
    }
)

export default routes
