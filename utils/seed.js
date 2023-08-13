import { writeFileSync, readFileSync } from '../lib/fs'

export function seedFS() {
    if (readFileSync('data.json') != undefined) {
        return
    }

    const data = [
        {
            field1: 1,
            field2: "two"    
        },
        {
            field1: 11,
            field2: "twotwo"    
        },
        {
            field1: 111,
            field2: "twotwotwo"    
        }
    ];

    writeFileSync('data.json', JSON.stringify(data))
}