export interface Vidoes {
    _id:string,
    name: string,
    source:string,
    description?:string,
    imageHomework?:[string],
    test:[
        {
            question:string,
            a:string,
            b:string,
            c:string,
            d:string,
            result:string
        }
    ],
    solutionVidoe?:string
}
