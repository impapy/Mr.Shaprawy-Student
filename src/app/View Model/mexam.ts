export interface Mexam {
    _id:string,
    years: string,
    month:string,
  
    testM:[
        {
            question:string,
            a:string,
            b:string,
            c:string,
            d:string,
            result:string,
            marke:number
        }
    ]
}
