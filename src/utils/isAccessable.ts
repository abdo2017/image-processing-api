import { promises as fsPromises } from 'fs'
import fs from 'fs'

export default async (filenmae: string): Promise<boolean> => {
    try {
        await fsPromises.access(filenmae, fs.constants.F_OK)
        return true
    } catch (err) {
        return false
    }
}
