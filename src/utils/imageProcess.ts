import path from 'path'
import sharp from 'sharp'
import isAccessable from './isAccessable'

export default async (
    queryFilename: string,
    queryWidth: number,
    queryHeight: number
): Promise<void | string> => {
    const imagePath = path.resolve(
        './',
        'assets',
        'full',
        queryFilename + '.jpg'
    )
    const outputImagePath = path.resolve(
        './',
        'assets',
        'thumb',
        queryFilename + queryWidth + '-' + queryHeight + '.jpg'
    )

    if (!(await isAccessable(imagePath))) {
        return 'file name is not found.. please enter a filename and width and height to resize it'
    }
    if (isNaN(queryHeight) || isNaN(queryWidth)) {
        return 'please enter a width and height parameters to resize the picture...'
    } else if (queryWidth < 0 || queryHeight < 0) {
        return 'please enter values or width and height bigger than 0'
    }

    await sharp(imagePath)
        .resize(queryWidth, queryHeight)
        .toFile(outputImagePath)
}
